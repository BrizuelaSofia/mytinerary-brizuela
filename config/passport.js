const passport= require ('passport')
const jwtStrategy = require ('passport-jwt').Strategy
const extractJwt= require ('passport-jwt').ExtractJwt 

const User= require ('../models/users')

module.exports = passport.use(new jwtStrategy(
    {jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY},
    async (jwt_payload,done) => {
        //console.log(jwt_payload)
        try {
            const user = await User.findOne({_id:jwt_payload.id})
            if (user) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        }
        catch(error) {
            console.log(error)
            return done(error,false)
        }
    }
))





    /*new JwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrkey: process.env.SECRET_KEY 
},(jwt_payload, done)=>{
    console.log(jwt_payload)
    User.findeOne ({_id: jwt_payload.id})
    .then (user=>{
        console.log (user)
        if (user){
            return done(null,user)
        }
        else if (err){
            console.log (err)
            return done (err, false);
        }
        else{
            return done(null, false)
        }
    })
    .catch (err =>{
        console.log(err, status)
        return done (err, false)
    })
})) */