const passport=require('passport')

const estategiaGoogle=require('passport-google-oauth20').Strategy
const key=require('./keys')

passport.use(
    new estategiaGoogle({
        callbackURL:'autorizo/google/redirect',
        clientID:key.google.clientID,
        clientSecret:key.google.clientSecret
    },(accesToken,refreshToken,profile,done)=>{
        console.log(profile)
    })
)