const express = require('express')
const router=express.Router()

const {
    obtenerDatos,
    obtenerDato,
    cargarDatos,
    eliminarDatos,
    actualizarDatos,

    obtenerCategorias,
    obtenerCategoria,
    cargarCategoria,
    eliminarCategoria,
    actualizarCategoria,

    register_get,
    register_post,
    register_getOne
} = require('../controllers/controladores')

// Productos

router.get('/obtenerDatos',obtenerDatos)
router.get('/obtenerProducto/:id',obtenerDato)

router.post('/cargarDatos',cargarDatos)

router.delete('/eliminarProducto/:id',eliminarDatos)

router.patch('/actualizarProducto/:id',actualizarDatos)

// Categoria

router.get('/obtenerCategorias',obtenerCategorias)
router.get('/obtenerCategoria/:id',obtenerCategoria)

router.post('/cargarCategoria',cargarCategoria)

router.delete('/eliminarCategoria/:id',eliminarCategoria)

router.patch('/actualizarCategoria/:id',actualizarCategoria)

// Users

router.get('/registerUser_get',register_get)

router.get('/registerUser_getOne/:id',register_getOne)

router.post('/registerUser_add',register_post)

module.exports=router