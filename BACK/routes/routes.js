const express = require('express')
const router=express.Router()

const {
    obtenerDatos,
    obtenerDato,
    cargarDatos,
    eliminarDatos,
    actualizarDatos,
    register_get,
    register_post,
    register_getOne
} = require('../controllers/controladores')

// Productos

router.get('/',obtenerDatos)
router.get('/obtenerProducto/:id',obtenerDato)

router.post('/',cargarDatos)

router.delete('/eliminarProducto/:id',eliminarDatos)

router.patch('/actualizarProducto/:id',actualizarDatos)

// Users

router.get('/registerUser_get',register_get)

router.get('/registerUser_getOne/:id',register_getOne)

router.post('/registerUser_add',register_post)

module.exports=router