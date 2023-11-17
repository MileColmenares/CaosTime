<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $comentario = $_POST["comentario"];
    if (!empty($comentario)) {
        require('conexion.php'); // Asegúrate de incluir el archivo de conexión

        $comentario = $conexion->quote($comentario); // Escapa el comentario
        $sql = "INSERT INTO comentarios (comentario) VALUES ($comentario)";

        try {
            $conexion->exec($sql);
            // Comentario guardado con éxito en la base de datos

            // Después de guardar el comentario, muestra la lista actualizada de comentarios
            require('mostrar_comentarios.php');
        } catch (PDOException $e) {
            echo "Error al guardar el comentario: " . $e->getMessage();
        }
    }
}
?>
