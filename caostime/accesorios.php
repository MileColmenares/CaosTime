<!DOCTYPE html>
<html>
<head>
    <title>Productos a la Venta</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <header>
        <h1>-ACCESORIOS PARA PERROS</h1>
    </header>
    <main>
       
        <!-- Producto 2 -->
        <div class="producto">
            <div class="producto-contenedor">
                <img src="img/perra.jpg" alt="Producto 2">
                <div class="descripcion-precio">
                    <h2>COLLAR PERLITAS</h2>
                    <p>3 CUOTAS SIN INTERES.</p>
                    <p>Precio: $1000</p>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
        
          <!-- Producto 2 -->
          <div class="producto">
            <div class="producto-contenedor">
                <img src="img/corbata.jpg" alt="Producto 2">
                <div class="descripcion-precio">
                    <h2>CORBATA</h2>
                    <p>3 CUOTAS SIN INTERES.</p>
                    <p>Precio: $1000</p>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
        
        
        
        
        <!-- Producto 4 -->
        <div class="producto">
            <div class="producto-contenedor">
                <img src="img/CORREA.jpg" alt="Producto 4">
                <div class="descripcion-precio">
                    <h2>CORREA</h2>
                    <p>3 CUOTAS SIN INTERES.</p>
                    <p>Precio: $1000</p>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
        
   
        <!-- Producto 6 -->
        <div class="producto">
            <div class="producto-contenedor">
                <img src="img/collar.jpg" alt="Producto 6">
                <div class="descripcion-precio">
                    <h2>COLLAR</h2>
                    <p>3 CUOTAS SIN INTERES.</p>
                    <p>Precio: $1000</p>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>

        <!-- Producto 6 -->
        <div class="producto">
            <div class="producto-contenedor">
                <img src="img/chapita.jpg" alt="Producto 6">
                <div class="descripcion-precio">
                    <h2>CHAPITA NOMBRE</h2>
                    <p>3 CUOTAS SIN INTERES.</p>
                    <p>Precio: $1000</p>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
        
        
        <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "caostime";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// La conexión se establece aquí. Luego puedes realizar tus consultas SQL.

$sql = "SELECT * FROM imagenes";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // No mostramos los datos en la página.
    }
} else {
    echo "No se encontraron resultados.";
}

$conn->close();
?>

     
    </main>
    <footer class="footer-container">
        <p>
            <a href="index.php" class="volver-btn">Volver a la Página Principal</a>
        </p>
    |</footer>
</body>
</html>
