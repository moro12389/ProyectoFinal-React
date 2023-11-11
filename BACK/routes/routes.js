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

    register_get,
    register_post,
    register_getOne
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

// Users

router.get('/registerUser_get',register_get)

router.get('/registerUser_getOne/:id',register_getOne)

router.post('/registerUser_add',register_post)

module.exports=router