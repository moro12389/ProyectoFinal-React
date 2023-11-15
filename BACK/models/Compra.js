const mongoose = require('mongoose')

const compraSchema=new mongoose.Schema({
   
    usuarioId:{
        type:String,
        required:[true,'Por favor ingrese URL imagen'],
    }, 
    carritoId:{
        type:String,
        required:[true,'Por favor ingrese URL imagen'],
    },
    productosId:{
        type:String,
        required:[true,'Por favor completar si esta activa'],
    },
    delivery:{
        type:Boolean,
        required:[true,'Por favor completar si esta activa'],
    },
    quantity:{
        type:Number,
        required:[true,'Por favor completar si esta activa'],
    },
}
,{
    timestamps:true
})

module.exports=mongoose.model('compraProductos',compraSchema);