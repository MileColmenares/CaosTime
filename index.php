<!DOCTYPE html>
<html>
<head>
    <title>Carrito de Compras</title>
    <link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
    <h1>Lista de Productos</h1>
    <table>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Agregar al Carrito</th>
        </tr>

    <form action="ver_carrito.php" method="get">
        <input type="submit" value="Ver Carrito">
    </form>
        <tr>
            <td>Producto 1</td>
            <td>$10.00</td>
            <td><input type="number" name="quantity" value="1"></td>
            <td><a href="agregar_carrito.php?id=1">Agregar</a></td>
        </tr>
        <tr>
            <td>Producto 2</td>
            <td>$15.00</td>
            <td><input type="number" name="quantity" value="1"></td>
            <td><a href="agregar_carrito.php?id=2">Agregar</a></td>
        </tr>
        

        <tr>
            <td>Producto 3</td>
            <td>$20.00</td>
            <td><input type="number" name="quantity" value="1"></td>
            <td><a href="agregar_carrito.php?id=3">Agregar</a></td>
        </tr>
        <tr>
            <td>Producto 4</td>
            <td>$25.00</td>
            <td><input type="number" name="quantity" value="1"></td>
            <td><a href="agregar_carrito.php?id=4">Agregar</a></td>
        </tr>


    </table>
</body>
</html>
