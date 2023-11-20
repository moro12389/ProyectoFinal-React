const express = require('express')
const router=express.Router()
const cors = require('cors')

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
    register_getEmail,
    login,
    logOut,

    verifyToken,
    userIdToken,

    obtenerCupones,
    obtenerCupon,
    cargarCupon,
    eliminarCupon,
    actualizarCupon,
} = require('../controllers/controladores')

// Categoria

router.get('/obtenerCategorias',obtenerCategorias)

router.get('/obtenerCategoria/:id',obtenerCategoria)

router.post('/cargarCategoria',cargarCategoria)

router.delete('/eliminarCategoria/:id',eliminarCategoria)

router.patch('/actualizarCategoria/:id',actualizarCategoria)

// Productos

router.get('/obtenerProductos',obtenerProductos)

router.get('/obtenerProductosCategoria/:id',verifyToken,obtenerProductosIdCategoria)

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

router.get('/userId',verifyToken,userIdToken)


router.post('/login',cors({
    origin: 'http://localhost:5173',
    credentials: true,
}),login)

router.get('/userId',logOut)

// Cupons

router.get('/obtenerCupones',obtenerCupones)

router.get('/obtenerCupon/:id',obtenerCupon)

router.post('/cargarCupon',cargarCupon)

router.delete('/eliminarCupon/:id',eliminarCupon)

router.patch('/actualizarCupon/:id',actualizarCupon)



module.exports=router