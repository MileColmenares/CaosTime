<!DOCTYPE html>
<html>
<head>
    <title>Productos a la Venta</title>
    <link rel="stylesheet" type="text/css" href="CSS/style.css">
    <link rel="stylesheet" href="iindex.css">
    <link rel="stylesheet" href="CSS/ffoter.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

</head>
<body>
<header>
            <div class="logo">
                <img src="logo.jpeg" alt="Logo de tu tienda">
            </div>
            <nav>
                <ul>
                <li><a href="index.php">INICIO</a></li>
                <li class="dropdown">
                    <a href="#">PODUCTOS</a>
                    <ul class="submenu">
                        <li><a href="pagina1.html">Botón 1</a></li>
                        <li><a href="pagina2.html">Botón 2</a></li>
                        <li><a href="pagina3.html">Botón 3</a></li>
                        <li><a href="pagina4.html">Botón 4</a></li>
                        <li><a href="pagina5.html">Botón 5</a></li>
                </ul>
                </li>
                <li class="dropdown">
                    <a href="#">USUARIO</a>
                    <ul class="submenu">
                        <li><a href="pagina1.html">Iniciar sesión</a></li>
                        <li><a href="pagina2.html">Crear cuenta</a></li>

                </ul>
                <li><a href="pagina1.html">CARRITO</a></li>

                </ul>
            </nav>

        </header>
    <h1>ACCESORIOS PARA PERROS</h1>
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
    <footer class="footer">
        <div class="text-center mb-4 espacio">
            <h1 class="seguinos">SEGUINOS</h1>
            <a href="" class="d-inline-block mx-2">
                <img src="./img/icons8-facebook-50.png" alt="Facebook">
            </a>
            <a href="" class "d-inline-block mx-2">
                <img src="./img/icons8-instagram-50.png" alt="Instagram">
            </a>
        </div>

        <div class="container text-center mb-2">
            <div class="row align-items-end">
                <div class="col">
                    <img src="./img/icons8-truck-50.png">
                    <h3>ENVÍO GRATIS</h3>
                    Entregas a todo Montecristo
                </div>
                <div class="col">
                    <img src="./img/icons8-bank-50.png">
                    <h3>PAGÁ SIN INTERÉS</h3>
                    Recibimos transferencias
                </div>
                <div class="col">
                    <img src="./img/icons8-recycle-50.png">
                    <h3>PRODUCTOS ECOLÓGICOS</h3>
                    Colabora con el medio ambiente
                </div>
            </div>
        </div>

        <div class="espacio">
            <hr>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div>
                        <ul>
                            <h2>NAVEGACIÓN</h2>
                            <a href="index.html"><h3>Inicio</h3></a>
                            <a href="index.html"><h3>Productos</h3></a>
                            <a href="index.html"><h3>Preguntas frecuentes</h3></a>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div>
                        <ul>
                            <h2>CONTACTO</h2>
                            <li class="contact-list">
                                <img src="./img/icons8-phone-50 (1).png">
                                <h4>351 000-2323</h4>
                            </li>
                            <li class="contact-list">
                                <img src="./img/icons8-place-50.png">
                                <h4>Montecristo, Córdoba</h4>
                            </li>
                            <li class="contact-list">
                                <img src="./img/icons8-mail-48.png">
                                <h4>caostime@gmail.com</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
