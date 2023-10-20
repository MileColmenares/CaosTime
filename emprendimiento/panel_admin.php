
<?php
session_start();

if (!isset($_SESSION["nombre"])) {
    header("location: indexlog.php");
    exit();
}

// Aquí puedes mostrar el contenido del panel de administrador una vez que el usuario ha iniciado sesión.
?>

<!DOCTYPE html>
<html>
<head>
    <title>Panel de Administrador</title>
    <link rel="stylesheet" type="text/css" href="panel.css">
</head>
<body>
    <h1>Bienvenido, <?php echo $_SESSION["nombre"]; ?></h1>
    <a href="logout.php">Cerrar sesión</a>
    <a href="indexlog.php" class="btn-volver">Volver a la página principal</a>
</body>
</html>
