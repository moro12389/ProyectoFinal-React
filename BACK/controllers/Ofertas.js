const db_ofertas = require('../models/Oferta')

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
    const { nombreoferta, subtituloOferta, detallesOferta, detallesConNegritaOferta, stockOferta, valorOferta, descuentoOferta, imgUrlOferta, pointOferta  } = req.body
    let datosVacios = []

    if (!nombreoferta) {
        datosVacios.push('nombreoferta')
    }
    if (!subtituloOferta) {
        datosVacios.push('subtituloOferta')
    }
    if (!detallesOferta) {
        datosVacios.push('detallesOferta')
    }
    if (!detallesConNegritaOferta) {
        datosVacios.push('detallesConNegritaOferta')
    }
    if (!stockOferta) {
        datosVacios.push('stockOferta')
    }
    if (!valorOferta) {
        datosVacios.push('valorOferta')
    }
    if (!descuentoOferta) {
        datosVacios.push('descuentoOferta')
    }
    if (!imgUrlOferta) {
        datosVacios.push('imgUrlOferta')
    }
    if (!pointOferta) {
        datosVacios.push('pointOferta')
    }

    // if (datosVacios.length > 0) {
    //     console.log(datosVacios)
    //     return res.status(400).json({ error: 'Por favor ingrese los datos de los campos ', datosVacios })
    // }

    try {
        const resultado = await db_ofertas.create(
            // { nombreoferta, subtituloOferta, detallesOferta, detallesConNegritaOferta, stockOferta, valorOferta, descuentoOferta, imgUrlOferta, pointOferta }
            
            {
                "nombreOferta": "Pizza Pollo",
                "subtituloOferta": "With Special Cheese",
                "detallesOferta": "Italian Pizza Pollo with special cheese is a favor can find only in",
                "detallesConNegritaOferta": "Mr.Chef",
                "stockOferta": 50,
                "valorOferta": 6.50,
                "descuentoOferta":15.4,
                "imgUrlOferta": "/img/Products/platoPizza.png",
                "pointOferta": 50
              },
              {
                "nombreOferta": "French Fries",
                "subtituloOferta": "50% Discount",
                "detallesOferta": "Get a discount on french fries with purchases",
                "detallesConNegritaOferta": "over $3",
                "stockOferta": 50,
                "valorOferta": 2,
                "descuentoOferta":50,
                "imgUrlOferta": "/img/Products/papaFrita.png",
                "pointOferta":50
              },
              {
                "nombreOferta": "Falafel on a plate",
                "subtituloOferta": "With Special Spices",
                "detallesOferta": "Unusual spices ordered by us straight from Israel will give you an unforgettable taste and aroma",
                "detallesConNegritaOferta": "",
                "stockOferta": 50,
                "valorOferta": 4,
                "descuentoOferta":5,
                "imgUrlOferta": "/img/Products/platoVegetariano.png",
                "pointOferta": 50
                }

            )
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