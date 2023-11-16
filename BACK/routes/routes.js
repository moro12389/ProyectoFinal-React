const express = require('express')
const router=express.Router()

const {
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
    register_getOne,
    register_getEmail
} = require('../controllers/controladores')

// Categoria

router.get('/obtenerCategorias',obtenerCategorias)

router.get('/obtenerCategoria/:id',obtenerCategoria)

router.post('/cargarCategoria',cargarCategoria)

router.delete('/eliminarCategoria/:id',eliminarCategoria)

router.patch('/actualizarCategoria/:id',actualizarCategoria)

// Productos

router.get('/obtenerProductos',obtenerProductos)

router.get('/obtenerProductosCategoria/:id',obtenerProductosIdCategoria)

router.get('/obtenerProducto/:id',obtenerProducto)

router.post('/cargarProducto',cargarProducto)

router.delete('/eliminarProducto/:id',eliminarProducto)

router.patch('/actualizarProducto/:id',actualizarProducto)

// Carrito

router.get('/obtenerCarrito/:usuarioId',obtenerCarrito)

router.post('/cargarCarrito',cargarCarrito)

router.delete('/eliminarCarritoUser/:id',eliminarCarritoIdUser)

router.delete('/eliminarCarritoUserProducto',eliminarCarritoIdProduct)

router.patch('/actualizarCarrito',actualizarCarrito)


// Users

router.get('/registerUser_get',register_get)

router.get('/registerUser_getOne/:id',register_getOne)

router.get('/register_getEmail/:email',register_getEmail)

router.post('/registerUser_add',register_post)


module.exports=router