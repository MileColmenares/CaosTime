<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="login.css">
</head>
<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $contraseña = $_POST["contraseña"];

    // Conectar a la base de datos (asegúrate de reemplazar con tus propios datos)
    $conexion = new mysqli("localhost", "root", "", "eriKa");

    if ($conexion->connect_error) {
        die("Error de conexión a la base de datos: " . $conexion->connect_error);
    }

    // Consulta para verificar las credenciales
    $stmt = $conexion->prepare("SELECT * FROM administradores WHERE nombre = ? AND contraseña = ?");
    $stmt->bind_param("ss", $nombre, $contraseña);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows == 1) {
        $_SESSION["nombre"] = $nombre;
        header("location: panel_admin.php");
    } else {
        echo "Datos incorrectos. Por favor, inténtalo de nuevo.";
    }

    $stmt->close();
    $conexion->close();
}
?>
