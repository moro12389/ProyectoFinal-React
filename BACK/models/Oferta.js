const mongoose = require('mongoose')

const ofertaProductosSchema=new mongoose.Schema({
    nombreOferta:{
        type:String,
        required:[true,'Por favor ingrese un nombre del Oferta'],
    },
    subtituloOferta:{
        type:String,
        required:[true,'Por favor ingrese un nombre del Oferta'],
    },
    detallesOferta:{
        type:String,
        required:[true,'Por favor ingrese un los ingredientes'],
    },
    detallesContNegritaOferta:{
        type:String,
        required:[true,'Por favor ingrese un los ingredientes'],
    },
    stockOferta:{
        type:Number,
        required:[true,'Por favor ingrese el número de Ofertas'],
    },
    valorOferta:{
        type:Number,
        required:[true,'Por favor ingrese valor del Oferta'],
    },
    descuentoOferta:{
        type:Number,
    },
    imgUrlOferta:{
        type:String,
        required:[true,'Por favor ingrese url imagen'],
    },
    pointOferta:{
        type:Number,
        required:[false,'Por favor ingrese punto por compra'],
    },
}
,{
    timestamps:true
})

module.exports=mongoose.model('ofertaProductos',ofertaProductosSchema);
