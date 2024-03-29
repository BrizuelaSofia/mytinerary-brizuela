const joi = require('joi')

const validator = (req, res, next) => {
    //console.log("req.body es")
    console.log(req.body.data)

    const schema = joi.object({
        firstName: joi.string()
            .min(3)
            .max(20)
            .trim()
            .pattern(new RegExp('[a-zA-Z]'))
            .required()
            .messages({
                'string.min': 'name: min 3 characters',
                'string.max': 'name: max 20 characters'
            }),
        lastName: joi.string()
            .min(3)
            .max(20)
            .trim()
            .pattern(new RegExp('[a-zA-Z]'))
            .required()
            .messages({
                'string.min': '"last name": min 3 characters',
                'string.max': '"last name": max 20 characters'
            }),
        email: joi.string()
            .email({ minDomainSegments: 2 })
            .required(),

        imageUser: joi.string()
            .trim()
            .required(),


        password: joi.string()
            .min(8)
            .max(30)
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()

            .messages({
                'string.min': '"password": min 8 characters',
                'string.max': '"password": max 30 characters'
            }),
        country: joi.string(),
        // .required(),

        from: joi.string()

    })

    const validation = schema.validate(req.body.data, { abortEarly: false })
    console.log(validation)

    if (validation.error) {
        return res.json({ success: false, from: 'validator', message: validation.error.details, test: validation })
    }
    next()
}

module.exports = validator