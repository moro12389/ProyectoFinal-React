const db_ofertas = require('../models/ofertas')

const obtenerOfertas = async (req, res) => {
    const resultado = await db_ofertas.find({})
    res.status(200).json(resultado)
}

// Read unique
const obtenerOferta = async (req, res) => {
    console.log(req.params.id)
    const { id } = req.params
    const resultado = await db_ofertas.findById(id)
    console.log(resultado)
    if (!resultado) {
        return res.status(404).json({ error: 'no se encontro la informacion' })
    }
    res.status(200).json(resultado)
}

// Write
const cargarOferta = async (req, res) => {
    const { nombreoferta, imgUrloferta, activeCategory, iconUrloferta } = req.body
    let datosVacios = []

    if (!nombreoferta) {
        datosVacios.push('nombreoferta')
    }
    if (!imgUrloferta) {
        datosVacios.push('imgUrloferta')
    }
    if (!iconUrloferta) {
        datosVacios.push('iconUrloferta')
    }
    if (!activeCategory) {
        datosVacios.push('activeCategory')
    }



    if (datosVacios.length > 0) {
        console.log(datosVacios)
        return res.status(400).json({ error: 'Por favor ingrese los datos de los campos ', datosVacios })
    }


    try {
        const resultado = await db_ofertas.create({ nombreoferta, imgUrloferta, activeCategory, iconUrloferta })
        res.status(200).json(resultado)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete
const eliminarOferta = async (req, res) => {

    const { id } = req.params
    const resultado = await db_ofertas.findOneAndDelete({ _id: id })

    if (!resultado) {
        return res.status(400).json({ error: 'no se puedo eliminar' })
    }

    res.status(200).json(resultado)

}

// Update
const actualizarOferta = async (req, res) => {
    const { id } = req.params
    const resultado = await db_ofertas.findOneAndUpdate({ _id: id }, { ...req.body })
    res.status(200).json(resultado)
    console.log(resultado)
}

module.exports = {
    
    obtenerOfertas,
    obtenerOferta,
    cargarOferta,
    eliminarOferta,
    actualizarOferta,

}