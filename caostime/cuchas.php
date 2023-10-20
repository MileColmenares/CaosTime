<!DOCTYPE html>
<html>
<head>
    <title>Productos a la Venta</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <header>
        <h1>CUCHAS PARA PERROS</h1>
    </header>
    <main>
        <?php
        // Datos de conexión a la base de datos
        $servername = 'localhost';
        $username = 'root';
        $password = '';
        $dbname = 'CUCHAS';

        // Crear una conexión a la base de datos
        $conexion = new mysqli($servername, $username, $password, $dbname);

        // Verificar la conexión
        if ($conexion->connect_error) {
            die("Error en la conexión a la base de datos: " . $conexion->connect_error);
        }

        // Realiza una consulta para obtener las imágenes
        $sql = "SELECT id, descripcion, precio, url FROM img";
        $result = $conexion->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $id = $row["id"];
                $descripcion = $row["descripcion"];
                $precio = $row["precio"];
                $url = $row["url"];
        ?>
        <div class="producto">
            <div class="producto-contenedor">
                <img src="<?php echo $url; ?>" alt="<?php echo $descripcion; ?>">
                <div class="descripcion-precio">
                    <h2><?php echo $descripcion; ?></h2>
                    <p>3 CUOTAS SIN INTERES.</p>
                    <p>Precio: $<?php echo $precio; ?></p>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
        <?php
            }
        } else {
            echo "No se encontraron imágenes en la base de datos.";
        }

        // Cierra la conexión a la base de datos
        $conexion->close();
        ?>
    </main>
    <footer class="footer-container">
        <p>
            <a href="index.php" class="volver-btn">Volver a la Página Principal</a>
        </p>
    </footer>
</body>
</html>

