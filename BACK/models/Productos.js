const mongoose = require('mongoose')

const productosSchema=new mongoose.Schema({
    nombreProducto:{
        type:String,
        required:[true,'Por favor ingrese un nombre del producto'],
    },
    categoriaProducto:{
        type:String,
        required:[true,'Por favor ingrese una categoria del producto'],
    },
    ingredientesProducto:{
        type:String,
        required:[true,'Por favor ingrese un los ingredientes'],
    },
    valorProducto:{
        type:Number,
        required:[true,'Por favor ingrese valor del producto'],
    },
    ofertaDescuentoProducto:{
        type:Number,
    },
    stockProducto:{
        type:Number,
        required:[true,'Por favor ingrese el número de productos'],
    },
}
,{
    timestamps:true
})

module.exports=mongoose.model('productos',productosSchema)