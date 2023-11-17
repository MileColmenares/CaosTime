<?php
$servername = "localhost"; // Nombre del servidor de la base de datos
$username = "root"; // Nombre de usuario de la base de datos
$password = ""; // Contraseña de la base de datos
$dbname = "carrito"; // Nombre de la base de datos

try {
    // Crea una instancia de la clase PDO para establecer la conexión
    $conexion = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    // Establece el modo de errores de PDO a ERRMODE_EXCEPTION para gestionar excepciones
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Configura el conjunto de caracteres a UTF-8 para manejar correctamente caracteres especiales
    $conexion->exec("SET NAMES utf8");
} catch(PDOException $e) {
    // Captura y muestra cualquier excepción que ocurra durante la conexión
    echo "Error de conexión: " . $e->getMessage();
}
?>
