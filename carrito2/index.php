<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="iindex.css"> <!-- Enlaza tu archivo CSS -->
    <link rel="stylesheet" href="CSS/ffoter.css">
    <script src="script.js"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

    <title>Tu Tienda en Línea</title>
</head>
<body>
    <div class="store-container">
        <div class="announcement">
            <p>ENVÍOS A TODO EL PAÍS</p>
        </div>

        <header>
            <div class="logo">
                <img src="logo.jpeg" alt="Logo de tu tienda">
            </div>
            <nav>
                <ul>
                <li><a href="index.php">INICIO</a></li>
                <li class="dropdown">
                    <a href="#">INFO. LOCAL</a>
                    <ul class="submenu">
                        <li><a href="pagina1.html">Preguntas frecuentes</a></li>
                        <li><a href="comentarios.php">Opiniones</a></li>
                        <li><a href="descuentos.php">Descuentos</a></li>
                        <li><a href="pagina4.html">Cupon de desc.</a></li>
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

        <div class="image-slider">
            <img class="slider-image" src="img/11.jpg" alt="Imagen 1">
            <img class="slider-image" src="img/2.jpg" alt="Imagen 2">
            <img class="slider-image" src="img/perro.jpeg" alt="Imagen 1">
            <img class="slider-image" src="img/4.jpg" alt="Imagen 2">
            <img class="slider-image" src="img/44.jpg" alt="Imagen 2">

            <img class="slider-image" src="img/9.jpg" alt="Imagen 2">


        </div>
        
        <h1 class="store-name">
            <span class="line"></span>
            CAOS TIME
            <span class="line"></span>
        </h1>



        <div class="product-container">
            <div class="product">
                <img src="img/corre.jpeg" alt="Producto 1">
                <h3>CORREAS</h3>
                <a href="accesorios.php" class="comprar-link">GO</a>
            </div>

            <div class="product">
                <img src="img/cuchs.jpg" alt="Producto 2">
                <h3>CASITAS</h3>
                <a href="cuchas.php" class="comprar-link">GO</a>
            </div>

            <div class="product">
                <img src="img/juguetes.jpg" alt="Producto 3">
                <h3>JUGUETES</h3>
                <a href="jugetes.php" class="comprar-link">GO</a>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="text-center mb-4 espacio">
            <h1 class="seguinos">SEGUINOS</h1>
            <a href="" class="d-inline-block mx-2">
                <img src="./img/icons8-facebook-50.png" alt="Facebook">
            </a>
            <a href="" class="d-inline-block mx-2">
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
