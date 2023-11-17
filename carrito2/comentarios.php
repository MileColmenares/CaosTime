<!DOCTYPE html>
<html>
<head>
    <title>Comentarios</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> <!-- Asegúrate de incluir jQuery -->
    <link rel="stylesheet" href="iindex.css"> <!-- Enlaza tu archivo CSS -->
    <link rel="stylesheet" href="CSS/ffoter.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS/comentarios.css">
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
                </li>
                <li><a href="pagina1.html">CARRITO</a></li>
            </ul>
        </nav>
    </header>

    <div class="comentarios-container">
        <h1>Comentarios</h1>
        <form id="comentario-form">
            <textarea name="comentario" id="comentario" placeholder="Añade un comentario..." style="width: 400px; height: 70px;" required></textarea>
            <button type="submit">Agregar</button>
        </form>
        <div class="comentarios" id="comentarios-list">
            <?php include('mostrar_comentarios.php'); ?>
        </div>
    </div>
    <script>
        $(document).ready(function() {
            // Manejar el envío del formulario de comentarios mediante AJAX
            $("#comentario-form").submit(function(event) {
                event.preventDefault(); // Evitar el envío tradicional del formulario
                var comentario = $("#comentario").val();

                // Realizar una solicitud AJAX para guardar el comentario
                $.ajax({
                    type: "POST",
                    url: "guardar_comentario.php",
                    data: { comentario: comentario },
                    success: function(response) {
                        // Actualizar la lista de comentarios en la página
                        $("#comentarios-list").html(response);
                        $("#comentario").val(""); // Limpiar el campo de comentarios
                    },
                    error: function(error) {
                        console.log("Error al guardar el comentario: " + error);
                    }
                });
            });
        });
    </script>

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
