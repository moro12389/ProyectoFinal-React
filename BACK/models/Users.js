const mongoose=require('mongoose')
const bcrypt= require('bcrypt')
const {isEmail}=require('validator')

const userSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,'Por favor ingrese un nombre'],
    },
    email:{
        type:String,
        required:[true,'Por favor ingrese un email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Porfavor ingrese un email valido']
    },
    password:{
        type:String,
        required:[true,'Por favor ingrese un password'],
        minLength:[6,'Ingrese un minimo de 6 digitos'],
    },
})

userSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(5);
        console.log(salt);
        this.password = await bcrypt.hash(this.password, salt);
        console.log(this.password);
        next();
    } catch (error) {
        next(error);
    }
})

const User=mongoose.model('users',userSchema)

module.exports=User