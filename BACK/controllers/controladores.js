const db_productos = require('../models/Productos')
const db_categorias = require('../models/Categorias')
const db_users = require('../models/Users')
const db_carrito = require('../models/Carrito')


// !!! Productos
// Read all
const obtenerProductos = async (req, res) => {
    const resultado = await db_productos.find({})
    res.status(200).json(resultado)
}

const obtenerProductosIdCategoria = async (req, res) => {
    console.log(req.params.id)
    const { id } = req.params
    const resultado = await db_productos.find({ categoriaProducto: id })
    console.log(resultado)
    if (!resultado) {
        return res.status(404).json({ error: 'no se encontro la informacion' })
    }
    res.status(200).json(resultado)
}

// Read unique
const obtenerProducto = async (req, res) => {
    console.log(req.params.id)
    const { id } = req.params
    const resultado = await db_productos.findById(id)
    console.log(resultado)
    if (!resultado) {
        return res.status(404).json({ error: 'no se encontro la informacion' })
    }
    res.status(200).json(resultado)
}

// Write
const cargarProducto = async (req, res) => {
    const { nombreProducto, categoriaProducto, ingredientesProducto, pesoProducto, valorProducto, ofertaDescuentoProducto, stockProducto, imgUrlProducto } = req.body
    let datosVacios = []

    if (!nombreProducto) {
        datosVacios.push('nombreProducto')
    }
    if (!categoriaProducto) {
        datosVacios.push('categoriaProducto')
    }
    if (!ingredientesProducto) {
        datosVacios.push('ingredientesProducto')
    }
    if (!pesoProducto) {
        datosVacios.push('pesoProducto')
    }
    if (!valorProducto) {
        datosVacios.push('valorProducto')
    }
    if (ofertaDescuentoProducto) {
        datosVacios.push('ofertaDescuentoProducto')
    }
    if (!stockProducto) {
        datosVacios.push('stockProducto')
    }
    if (!imgUrlProducto) {
        datosVacios.push('imgUrlProducto')
    }

    if (datosVacios.length > 0) {
        console.log(datosVacios)
        return res.status(400).json({ error: 'Por favor ingrese los datos de los campos ', datosVacios })
    }


    try {
        const resultado = await db_productos.create({ nombreProducto, categoriaProducto, ingredientesProducto, pesoProducto, valorProducto, ofertaDescuentoProducto, stockProducto, imgUrlProducto })
        res.status(200).json(resultado)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete
const eliminarProducto = async (req, res) => {

    const { id } = req.params
    const resultado = await db_productos.findOneAndDelete({ _id: id })

    if (!resultado) {
        return res.status(400).json({ error: 'no se puedo eliminar' })
    }

    res.status(200).json(resultado)

}

// Update
const actualizarProducto = async (req, res) => {
    const { id } = req.params
    const resultado = await db_productos.findOneAndUpdate({ _id: id }, { ...req.body })
    res.status(200).json(resultado)
    console.log(resultado)
}


// !!! Categoria
// Read all
const obtenerCategorias = async (req, res) => {
    const resultado = await db_categorias.find({})
    res.status(200).json(resultado)
}

// Read unique
const obtenerCategoria = async (req, res) => {
    console.log(req.params.id)
    const { id } = req.params
    const resultado = await db_categorias.findById(id)
    console.log(resultado)
    if (!resultado) {
        return res.status(404).json({ error: 'no se encontro la informacion' })
    }
    res.status(200).json(resultado)
}

// Write
const cargarCategoria = async (req, res) => {
    const { nombreCategoria, imgUrlCategoria, activeCategory, iconUrlCategoria } = req.body
    let datosVacios = []

    if (!nombreCategoria) {
        datosVacios.push('nombreCategoria')
    }
    if (!imgUrlCategoria) {
        datosVacios.push('imgUrlCategoria')
    }
    if (!iconUrlCategoria) {
        datosVacios.push('iconUrlCategoria')
    }
    if (!activeCategory) {
        datosVacios.push('activeCategory')
    }



    if (datosVacios.length > 0) {
        console.log(datosVacios)
        return res.status(400).json({ error: 'Por favor ingrese los datos de los campos ', datosVacios })
    }


    try {
        const resultado = await db_categorias.create({ nombreCategoria, imgUrlCategoria, activeCategory, iconUrlCategoria })
        res.status(200).json(resultado)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete
const eliminarCategoria = async (req, res) => {

    const { id } = req.params
    const resultado = await db_categorias.findOneAndDelete({ _id: id })

    if (!resultado) {
        return res.status(400).json({ error: 'no se puedo eliminar' })
    }

    res.status(200).json(resultado)

}

// Update
const actualizarCategoria = async (req, res) => {
    const { id } = req.params
    const resultado = await db_categorias.findOneAndUpdate({ _id: id }, { ...req.body })
    res.status(200).json(resultado)
    console.log(resultado)
}

// !!! Usuarios

//ver respuesta de usuario reg
const register_get = async (req, res) => {
    const datos = await db_users.find({})
    res.status(200).json(datos)
    //res.render('register')
}

const register_getOne = async (req, res) => {
    console.log(req.params.id)
    const { id } = req.params
    const resultado = await db_users.findById(id)
    console.log(resultado)
    if (!resultado) {
        return res.status(404).json({ error: 'no se encontro la informacion' })
    }
    res.status(200).json(resultado)
}

//resepcion respuesta de usuario
const register_post = async (req, res) => {
    console.log(req.body)
    const { email, nombre, password } = req.body

    try {
        const user = await db_users.create({ email, password, nombre })
        res.status(201).json(user)
    } catch (error) {
        const errors = handleError(error)
    }
}

// !!! Carrito

const obtenerCarrito = async (req, res) => {
    const { usuarioId } = req.body
    const resultado = await db_carrito.find({ usuarioId: usuarioId })
    console.log(resultado)
    if (!resultado) {
        return res.status(404).json({ error: 'no se encontro la informacion' })
    }
    res.status(200).json(resultado)
}

// Write
const cargarCarrito = async (req, res) => {
    const { usuarioId, productoId, quantity } = req.body;
    let datosVacios = [];

    if (!usuarioId) {
        datosVacios.push("usuarioId");
    }
    if (!productoId) {
        datosVacios.push("productoId");
    }
    if (!quantity) {
        datosVacios.push("quantity");
    }

    if (datosVacios.length > 0) {
        console.log(datosVacios);
        return res
            .status(400)
            .json({ error: "Por favor ingrese los datos de los campos ", datosVacios });
    }

    try {
        // Buscar si ya existe el producto para el usuario
        const existingCartItem = await db_carrito.find({
            usuarioId,
            productoId,
        });

        if (existingCartItem[0]) {
            // Si ya existe, actualizar la cantidad
            await db_carrito.findOneAndUpdate(
                { productoId, usuarioId },
                { $set: { quantity: existingCartItem[0].quantity + quantity } }
              );
  
            res.status(200).json(existingCartItem)
        } else {
            // Si no existe, crear un nuevo registro
            const resultado = await db_carrito.create({
                usuarioId,
                productoId,
                quantity,
            });
            res.status(200).json(resultado);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete
const eliminarCarritoIdUser = async (req, res) => {

    const { id } = req.params
    const resultado = await db_carrito.deleteMany({ usuarioId: id })

    if (!resultado) {
        return res.status(400).json({ error: 'no se puedo eliminar' })
    }

    res.status(200).json(resultado)

}

const eliminarCarritoIdProduct = async (req, res) => {

    const { usuarioId, productoId } = req.body
    const resultado = await db_carrito.findOneAndDelete({ productoId: productoId, usuarioId: usuarioId })

    if (!resultado) {
        return res.status(400).json({ error: 'no se puedo eliminar' })
    }

    res.status(200).json(resultado)

}

// Update
const actualizarCarrito = async (req, res) => {
    const { usuarioId, productoId } = req.body
    const resultado = await db_carrito.findOneAndUpdate({ productoId: productoId, usuarioId: usuarioId }, { ...req.body })
    res.status(200).json(resultado)
    console.log(resultado)
}


module.exports = {
    obtenerCategorias,
    obtenerCategoria,
    cargarCategoria,
    eliminarCategoria,
    actualizarCategoria,

    obtenerProductos,
    obtenerProductosIdCategoria,
    obtenerProducto,
    cargarProducto,
    eliminarProducto,
    actualizarProducto,

    obtenerCarrito,
    cargarCarrito,
    eliminarCarritoIdUser,
    eliminarCarritoIdProduct,
    actualizarCarrito,

    register_get,
    register_post,
    register_getOne
}