const db_productos = require('../models/Productos')
const db_categorias = require('../models/Categorias')
const db_users = require('../models/Users')


// !!! Productos
    // Read all
    const obtenerDatos = async (req, res) => {
        const resultado = await db_productos.find({})
        res.status(200).json(resultado)
    }

    // Read unique
    const obtenerDato = async (req, res) => {
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
    const cargarDatos = async (req, res) => {
        const { nombreProducto, categoriaProducto, ingredientesProducto, valorProducto, ofertaDescuentoProducto, stockProducto } = req.body
        let datosVacios = []

        if (!nombreProducto) {
            datosVacios.push('nombreProduct')
        }
        if (!categoriaProducto) {
            datosVacios.push('categoriaProducto')
        }
        if (!ingredientesProducto) {
            datosVacios.push('ingredientesProducto')
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

        if (datosVacios.length > 0) {
            console.log(datosVacios)
            return res.status(400).json({ error: 'Por favor ingrese los datos de los campos ', datosVacios })
        }


        try {
            const resultado = await db_productos.create({ nombreProducto, categoriaProducto, ingredientesProducto, valorProducto, ofertaDescuentoProducto, stockProducto })
            res.status(200).json(resultado)
        }
        catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    // Delete
    const eliminarDatos = async (req, res) => {

        const { id } = req.params
        const resultado = await db_productos.findOneAndDelete({ _id: id })

        if (!resultado) {
            return res.status(400).json({ error: 'no se puedo eliminar' })
        }

        res.status(200).json(resultado)

    }

    // Update
    const actualizarDatos = async (req, res) => {
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
        const { nombreCategoria, imgUrlCategoria, activeCategory,iconUrlCategoria} = req.body
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
            const resultado = await db_categorias.create({ nombreCategoria, imgUrlCategoria, activeCategory,iconUrlCategoria})
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
    const register_get=async(req,res)=>{
        const datos= await db_users.find({})
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
    const register_post=async(req,res)=>{
        console.log(req.body)
        const {email,nombre,password}=req.body

        try{
            const user= await db_users.create({email,password,nombre})
            res.status(201).json(user)
        }catch(error){
            const errors= handleError(error)
        }
    }


module.exports = {
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
}