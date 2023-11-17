<?php
require('conexion.php'); // Asegúrate de incluir el archivo de conexión

$sql = "SELECT comentario FROM comentarios ORDER BY fecha DESC";

try {
    $result = $conexion->query($sql);
    while ($row = $result->fetch()) {
        echo "<p>" . $row["comentario"] . "</p>";
    }
} catch (PDOException $e) {
    echo "Error al recuperar los comentarios: " . $e->getMessage();
}
?>
