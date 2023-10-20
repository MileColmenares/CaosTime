<!DOCTYPE html>
<html>
<head>
    <title>Iniciar sesión</title>
    <link rel="stylesheet" type="text/css" href="indexlog.css">
</head>
<body>
    <h2>Iniciar sesión como administrador</h2>
    <form method="post" action="login.php">
        <label for="nombre">Nombre de usuario:</label>
        <input type="text" name="nombre" id="nombre" required><br>

        <label for="contraseña">Contraseña:</label>
        <input type="contraseña" name="contraseña" id="contraseña" required><br>

        <input type="submit" value="Iniciar sesión">
    </form>
</body>
</html>

