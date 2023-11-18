const db_productos = require('../models/Productos')
const db_categorias = require('../models/Categorias')
const db_users = require('../models/Users')
const db_carrito = require('../models/Carrito')


const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET
const iv = process.env.IV_CRYPTO
const key = process.env.KEY


// Encriptado
const crypto = require('crypto');

// const encriptado = (plaintext) => {
//     const cipher = crypto.createCipheriv(
//         "aes-256-gcm",
//         Buffer.from(key, 'base64'),
//         Buffer.from(iv, 'base64')
//     );
//     let ciphertext = cipher.update(plaintext, 'utf8', 'base64');
//     ciphertext += cipher.final('base64');
//     const tag = cipher.getAuthTag();
//     return { ciphertext, tag, iv };
// }

// const decryptSymmetric = (ciphertext, tag) => {
//     const decipher = crypto.createDecipheriv(
//         "aes-256-gcm",
//         Buffer.from(key, 'base64'),
//         Buffer.from(iv, 'base64')
//     );
//     decipher.setAuthTag(Buffer.from(tag, 'base64'));
//     let decrypted = decipher.update(ciphertext, 'base64', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// }

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
}

const register_getEmail = async (req, res) => {
    const { email } = req.params
    const datos = await db_users.find({ email: email })
    if (!datos) {
        return res.status(404).json({ error: 'no se encontro la informacion' })
    }
    res.status(200).json(datos)
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
    console.log("recibido: ", req.body)
    const { email, nombre, password,
        phone,
        street,
        house,
        entrance,
        commentOrder,
        housePrivate } = req.body


    const existingUser = await db_users.find({ email });

    if (existingUser[0]) {
        // Si ya existe, actualizar dato de usuario
        const idUser = existingUser[0]._id.toString()
        try {
            const user = await db_users.findOneAndUpdate(
                { _id: idUser, email },
                {
                    $set: {
                        phone,
                        street,
                        house,
                        entrance,
                        commentOrder,
                        housePrivate,
                    }
                }
            );
            res.status(201).json(user)
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } else {
        try {
            const user = await db_users.create({
                email, password, nombre,
                phone: "",
                street: "",
                house: "",
                entrance: "",
                commentOrder: "",
                housePrivate: false,
            })
            res.status(201).json(user)
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

const login = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)

    try {
        const datos = await db_users.findOne({ email })
        console.log(datos)

        if (!datos) {
            return res.status(401).json({ mensaje: 'credenciales invalidas' })
        }
        const passwordValido = await bcrypt.compare(password, datos.password)
        if (!passwordValido) {
            return res.status(401).json({ mensaje: 'credenciales invalidas' })
        }

        const data = { userId: datos._id, nombre: datos.nombre, email: datos.email, }

        // const ciphertext = encriptado(JSON.stringify(data));
        // console.log("Encriptado", ciphertext, iv);

        // crea token
        const token = jwt.sign(data, jwtSecret)


        // envia a cookie
        res.cookie('token-session', token, { expiresIn: '2h' });

        res.status(201).json({ token })
    } catch (error) {
        if (error.code === 11000) {
            res.status(409).json({ mensaje: 'usuario YA ESTA registrado', })

        }
        res.status(500).json({ mensaje: 'error interno del servidor', })
    }
}
const logOut = () => {
    res.clearCookie("token-session");
}

const verifyToken = (req, res, next) => {
    const tokens = req.headers.cookie;
    

    if (!tokens) {
        return res.status(401).json({ message: 'No se proporcionó un token de sesión.' });
    }
    const token = tokens.match(/token-session=([^;]+)/)[1];

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido.' });
    }
};


const userIdToken = (req, res) => {
    const informacionUsuario = req.user;
    res.json({ usuario: informacionUsuario });
}



// !!! Carrito

const obtenerCarrito = async (req, res) => {
    const { usuarioId } = req.params
    const resultado = await db_carrito.find({ usuarioId: usuarioId })
    console.log(resultado)
    if (!resultado) {
        return res.status(404).json({ error: 'no se encontro la informacion' })
    }
    res.status(200).json(resultado)
}


// Write
const cargarCarrito = async (req, res) => {
    const { usuarioId, productoId, quantity, option } = req.body;
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

        if (existingCartItem[0] && option) {
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
    register_getOne,
    register_getEmail,
    login,
    logOut,

    verifyToken,
    userIdToken,
}