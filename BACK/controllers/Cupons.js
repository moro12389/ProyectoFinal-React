const db_cupons = require('../models/Cupons')

const obtenerCupones = async (req, res) => {
    const resultado = await db_cupons.find({}).sort({ level: 1 })
    res.status(200).json(resultado)
}

// Read unique
const obtenerCupon = async (req, res) => {
    const { id } = req.params
    const resultado = await db_cupons.findById(id)
    if (!resultado) {
        return res.status(404).json({ error: 'no se encontro la informacion' })
    }
    res.status(200).json(resultado)
}

// Write
const cargarCupon = async (req, res) => {
    const { title, level, stars, discount, colorTicket } = req.body
    let datosVacios = []

    if (!title) {
        datosVacios.push('title')
    }
    if (!level) {
        datosVacios.push('level')
    }
    if (!stars) {
        datosVacios.push('stars')
    }
    if (discount) {
        datosVacios.push('discount')
    }
    if (!colorTicket) {
        datosVacios.push('colorTicket')
    }

    // if (datosVacios.length > 0) {
    //     console.log(datosVacios)
    //     return res.status(400).json({ error: 'Por favor ingrese los datos de los campos ', datosVacios })
    // }


    try {
        const resultado = await db_cupons.create(
            // { title, level, stars, discount, colorTicket }
            {
                "title": "Cupón -25% de descuento en cualquier comida",
                "level": 17,
                "stars": 3,
                "discount": 25,
                "colorTicket": "#3366FF"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 19,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#FF5733"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 8,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#33FF57"
              },
              {
                "title": "Cupón -10% de descuento en cualquier comida",
                "level": 3,
                "stars": 2,
                "discount": 10,
                "colorTicket": "#FF5733"
              },
              {
                "title": "Shawarma gratis de tu elección",
                "level": 25,
                "stars": 6,
                "discount": 100,
                "colorTicket": "#FF9900"
              },
              {
                "title": "Cupón -25% de descuento en cualquier comida",
                "level": 5,
                "stars": 3,
                "discount": 25,
                "colorTicket": "#3366FF"
              },
              {
                "title": "75% de descuento en tu próxima comida",
                "level": 21,
                "stars": 5,
                "discount": 75,
                "colorTicket": "#9900CC"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 35,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#33FF57"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 31,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#FF5733"
              },
              {
                "title": "Tablero de cocina del Sr. Jefe",
                "level": 39,
                "stars": 7,
                "discount": 0,
                "colorTicket": "#9900CC"
              },
              {
                "title": "2x1 en cualquier menú por una semana",
                "level": 41,
                "stars": 5,
                "discount": 50,
                "colorTicket": "#3366FF"
              },
              {
                "title": "Shawarma gratis de tu elección",
                "level": 37,
                "stars": 6,
                "discount": 100,
                "colorTicket": "#FF9900"
              },
              {
                "title": "Shawarma gratis de tu elección",
                "level": 10,
                "stars": 5,
                "discount": 100,
                "colorTicket": "#FF9900"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 45,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#FF5733"
              },
              {
                "title": "Tablero de cocina del Sr. Jefe",
                "level": 51,
                "stars": 7,
                "discount": 0,
                "colorTicket": "#9900CC"
              },
              {
                "title": "Tablero de cocina del Sr. Jefe",
                "level": 15,
                "stars": 6,
                "discount": 0,
                "colorTicket": "#9900CC"
              },
              {
                "title": "Cupón -25% de descuento en cualquier comida",
                "level": 55,
                "stars": 3,
                "discount": 25,
                "colorTicket": "#FF5733"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 57,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#3366FF"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 59,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#33FF57"
              },
              {
                "title": "Tablero de cocina del Sr. Jefe",
                "level": 65,
                "stars": 7,
                "discount": 0,
                "colorTicket": "#3366FF"
              },
              {
                "title": "20% de descuento en tu pedido por un mes",
                "level": 61,
                "stars": 5,
                "discount": 20,
                "colorTicket": "#FF5733"
              },
              {
                "title": "Cupón -25% de descuento en cualquier comida",
                "level": 67,
                "stars": 3,
                "discount": 25,
                "colorTicket": "#33FF57"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 69,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#FF5733"
              },
              {
                "title": "Shawarma gratis de tu elección",
                "level": 75,
                "stars": 6,
                "discount": 100,
                "colorTicket": "#FF9900"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 71,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#3366FF"
              },
              {
                "title": "Tablero de cocina del Sr. Jefe",
                "level": 77,
                "stars": 7,
                "discount": 0,
                "colorTicket": "#9900CC"
              },
              {
                "title": "Cupón -25% de descuento en cualquier comida",
                "level": 79,
                "stars": 3,
                "discount": 25,
                "colorTicket": "#33FF57"
              },
              {
                "title": "Cena gratis para dos una vez al mes",
                "level": 81,
                "stars": 5,
                "discount": 100,
                "colorTicket": "#FF5733"
              },
              {
                "title": "Shawarma gratis de tu elección",
                "level": 87,
                "stars": 6,
                "discount": 100,
                "colorTicket": "#FF9900"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 85,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#3366FF"
              },
              {
                "title": "Tablero de cocina del Sr. Jefe",
                "level": 89,
                "stars": 7,
                "discount": 0,
                "colorTicket": "#9900CC"
              },
              {
                "title": "Tablero de cocina del Sr. Jefe",
                "level": 27,
                "stars": 7,
                "discount": 0,
                "colorTicket": "#9900CC"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 95,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#FF5733"
              },
              {
                "title": "Shawarma gratis de tu elección",
                "level": 99,
                "stars": 6,
                "discount": 100,
                "colorTicket": "#FF9900"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 97,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#3366FF"
              },
              {
                "title": "Cena gratis todas las semanas durante un año",
                "level": 100,
                "stars": 7,
                "discount": 100,
                "colorTicket": "#9900CC"
              },
              {
                "title": "Cupón -50% de descuento en cualquier comida",
                "level": 47,
                "stars": 4,
                "discount": 50,
                "colorTicket": "#33FF57"
              },
              {
                "title": "Cupón -25% de descuento en cualquier comida",
                "level": 29,
                "stars": 3,
                "discount": 25,
                "colorTicket": "#3366FF"
              },
              {
                "title": "Cupón -25% de descuento en cualquier comida",
                "level": 91,
                "stars": 3,
                "discount": 25,
                "colorTicket": "#33FF57"
              },
              {
                "title": "Shawarma gratis de tu elección",
                "level": 49,
                "stars": 6,
                "discount": 100,
                "colorTicket": "#FF9900"
              },
              {
                "title": "Cupón -5% de descuento en cualquier comida",
                "level": 1,
                "stars": 1,
                "discount": 5,
                "colorTicket": "#ADD8E6"
              }
        )
        res.status(200).json(resultado)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete
const eliminarCupon = async (req, res) => {

    const { id } = req.params
    const resultado = await db_cupons.findOneAndDelete({ _id: id })

    if (!resultado) {
        return res.status(400).json({ error: 'no se puedo eliminar' })
    }

    res.status(200).json(resultado)
}

// Update
const actualizarCupon = async (req, res) => {
    const { id } = req.params
    const resultado = await db_cupons.findOneAndUpdate({ _id: id }, { ...req.body })
    res.status(200).json(resultado)
    console.log(resultado)
}

module.exports = {
    
    obtenerCupones,
    obtenerCupon,
    cargarCupon,
    eliminarCupon,
    actualizarCupon,

}