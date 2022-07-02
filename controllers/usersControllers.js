// const User = require("../models/users")
// const bcryptjs = require("bcryptjs")

const User = require('../models/users')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const sendEmail = require('../controllers/sendEmail')
//const nodemailer = require('nodemailer')
//const jwt = require('jsonwebtoken')
// firstName:{type:String, require:true},
// lastname:{type:String, require:true},
// email:{type:String, require},
// password:[{type:String, require:true}],
// country: {type:String, require:true},  
// imageUser: {type:String},
// from: {type:Array}


const userControllers = {


    signUp: async (req,res) => {
        //console.log('REQ BODY SING UP USER')
        //console.log(req.body)
        const {firstName, lastName, email,  country, password, from} = req.body.data
        //ACLARACION: password y from son ARRAYS
        //cada elemento de password se relaciona con un unico elemento de from
        //el indice de cada contraseña coincide con el indice de cada from
        //es decir:
        //la contraseña[0] es del from[0]
        //la contraseña[2] es del from[2]
        //la contraseña[indice] es del from[indice]
        try {
            const newUser = await User.findOne({email}) //buscamos por mail
            const verification = false //por default
            const uniqueString = crypto.randomBytes(15).toString('hex') //utilizo losmetodos cripto
            if (!newUser) { //si NO existe el usuario
                const hashWord = bcryptjs.hashSync(password, 10) //hasheo la contraseña
                const myNewUser = await new User({firstName, lastName, email, country, verification,
                    uniqueString: uniqueString,
                    password: [hashWord],
                    from: [from]})
                if (from === "signUpForm") { //si la data viene del formulario
                    //ACLARACION: ahora el if/else tienen la misma data
                    //pero van a cambiar cuando enviemos correo de verificacion
                    myNewUser.verification = true,
                   
                    await myNewUser.save()
                     console.log(myNewUser)
                    await sendEmail(email, uniqueString)
                    res.json({
                        success: true, 
                        from: from,
                        message: `check ${email} and finish your SIGN UP!`}) 
                    } else { //si la data viene de una red social
                    await myNewUser.save()
                    res.json({
                        success: true, 
                        from: from,
                        message: `you SIGNED UP by ${from}! now LOG IN!`})
                }
            } else { //si existe el usuario, significa que al menos tiene un registro
                //hay que chequear si coincide la forma de RE-REGISTRO con la ya REGISTRADA
                //si coincide se tiene que cumplir la siquiente condicion:
                if (newUser.from.indexOf(from) !== -1) { //coincide la forma de registro ACTUAL con alguna ya EXISTENTE en mi bd
                    //del usuario que encontró
                    //busco en la propiedad FROM
                    //el indice que coincide con el FROM del cual el usuario quiere "volver" a registrarse
                    //si ese indice EXISTE ==> el usuario ya está registrado DE ESTA FORMA y hay que mandarlo a loguearse
                    //ACLARACION: si existe indexOf(from) significa que el usuario ya se registró de esta manera (la que capturamos en la variable FROM)
                    //entonces si el indice de from es cualquier numero que no sea -1 significa que ya existe el usuario y NO DEBEMOS PERMITIRLE volver a registrarse
                    res.json({ //devolvemos la respuesta
                        success: false,
                        from: from,
                        message: `${email} has been registered, please LOG IN!`})
                //si no coincide, se tiene que cumplir esta otra:                
                } else {
                    //si es -1 significa que el usuario NO SE REGISTRO DE ESTA FORMA (nuevo registro con google)
                    //pero ya tiene AL MENOS UN registro (facebook y form)
                    const hashWord = bcryptjs.hashSync(password, 10)
                    newUser.password.push(hashWord)
                    newUser.from.push(from)
                    newUser.verification = true
                    await newUser.save()
                    res.json({
                        success: true, 
                        from: from, 
                        message: `check ${email} to confirm your SIGN UP!`}) 
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR',
            console: console.log(error)})
        }
    },

    signIn: async (req, res) => {
        //console.log('REQ BODY SIGN IN USER')
        //console.log(req.body)
        const {email, password, from} = req.body.data
        try {
            const loginUser = await User.findOne({email}) //buscamos por email
            if (!loginUser) { //si NO existe el usuario
                res.json({
                    success: false,
                    from: 'no from',
                    message: `${email} has no account, please SIGN UP!`})
            } else { //si existe el usuario
                let checkedWord =  loginUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                //console.log(checkedWord)
                //filtramos en el array de contraseñas hasheadas si coincide la contraseña 
                if (from === "signUpForm") { //si fue registrado por nuestro formulario                
                    if (checkedWord.length>0) { //si hay coincidencias
                        const userData = { //este objeto lo utilizaremos cuando veamos TOKEN
                            id:loginUser._id,
                            firstName: loginUser.firstName,
                            lastName: loginUser.lastName,
                            email: loginUser.email,
                          
                            country: loginUser.country,
                            from:loginUser.from}
                        await loginUser.save()
                        res.json({
                            response: userData, 
                            success: true, 
                            from: from, 
                            message: `welcome back ${userData.firstName}!`})
                    } else { //si no hay coincidencias
                        res.json({
                            success: false, 
                            from: from,   
                            message: `verify your mail or password!`})
                    }
                } else { //si fue registrado por redes sociales
                    //ACLARACION: por ahora es igual al anterior
                    if (checkedWord.length>0) { //si hay coincidencias
                        const userData = { //este objeto lo utilizaremos cuando veamos TOKEN
                            id:loginUser._id,
                            firstName: loginUser.firstName,
                            lastName: loginUser.lastName,
                            email: loginUser.email,
                        
                            country: loginUser.country,
                            from:loginUser.from}
                        await loginUser.save()
                        res.json({
                            response: userData, 
                            success: true, 
                            from: from, 
                            message: `welcome back ${userData.firstName}!`})
                    } else { //si no hay coincidencias
                        res.json({
                            success: false, 
                            from: from,  
                            message: `verify your mail or password!`})
                    }
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'})
        }
    },
    verifyMail: async(req, res) => {
        const {string} = req.params
        const user = await User.findOne({uniqueString: string})
        //console.log(user)
        if(user){
            user.verificatrion = true
            await user.save()
            res.redirect("http://localhost:3000/")
        }
        else{res.json({
            success: false,
            message:`email hast not been confirmed yet!`
        })}
    }
}

module.exports = userControllers



// const usersControllers = {
//     signUpUsers: async(req, res) => {
//         const {firstName, lastName, email, password, from, imageUser, country } = req.body.userData
//         const test = req.body.test
//         try{
//             const loginUser = await User.findOne({ email })
//             if(loginUser){
//                 if(loginUser.from.indexOf(from) !== -1){
//                     res.json({
//                         success: false,
//                         from: from,
//                         message:"Ya has realizado tu signUp de esta forma,  por favor realiza el SignIn"
//                     })
//                 }else{
//                     const passwordHasheada = bcryptjs.hashSync(password, 10)
//                     loginUser.from.push(from)
//                     loginUser.password.push(passwordHasheada)
//                     await newUser.save()
//                     res.json({
//                         success: true,
//                         from: from,
//                         message: "Agregamos" + from + "a tus medios para realizar SignIn"
//                     })
//                 }
//             }else{
//                 const passwordHasheada = bcryptjs.hashSync(password, 10)
//                 const nerUser = await new User({
//                     firstName: firstName,
//                     lastName: lastName,
//                     email: email,
//                     imageUser: imageUser,
//                     password: [passwordHasheada],
//                     verifiedEmail: false,
//                     country:country,
//                     from: [from]
//                 })
//                 if(from !== "form-signup") {
//                     await newUser.save()
//                     res.json({
//                         success: true,
//                         from: from,
//                         message:"te enviamos un email para validarlo, por favor verifica tu casilla"
//                     })
//                 }
//             }
//         } catch(error){
//             res.json({
//                 console: console.log(error),
//                 success: false,
//                 message:"algo salio mal, intentelo enunos minutos"
//             })
//         }
//     },

//  loginUser: async (req,res) =>{
//     const {email, password, from} = req.body.logedUser
//     try{
//         const loginUser = await User.findOne({ email })
//         if(!loginUser){
//             res.json({
//                 success: false,
//                 message:"you user has not been registered, please try again"
//             })
//         }else{
//             if(from !== "form-signup"){
//                 let passwordMatch =loginUser.password.filter(pass => bcryptjs.compareSync(password, pass))
//             }if(passwordMatch.length > 0){
//                 const userData = {
//                     id:loginUser._id,
//                     firstName: loginUser.firstName,
//                     lastName: loginUser.lastName,
//                     email: loginUser.email,
//                     imageUser: loginUser.imageUser,
//                     country: loginUser.country,
//                     from:from
//                 }
//             }
//         }
//     }
//  }
// }