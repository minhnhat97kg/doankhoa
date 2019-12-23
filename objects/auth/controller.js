const Joi = require('joi')
const passport = require('passport')
const bcrypt = require('bcrypt');
const config = require('../../config/config')
const jwt = require('jsonwebtoken')
const User = require('../user/model')


module.exports.index = (req, res, next) => {
    res.send("This is home page");
}

module.exports.register = async(req, res, next) => {
    console.log(req.body)
    Joi.validate(req.body, Joi.object({
        firstname: Joi.string(),
        lastname: Joi.string(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        repeatPassword: Joi.string().required().valid(Joi.ref('password'))
    }), (err, user) => {
        //Check Error of validate
        if (err)
            res.json(err)
        User.create(user, (err, user) => {
            //Check error of database
            if (err)
                res.json(err)
                //Success
            res.json(user)
        })
    })
}



module.exports.login = async(req, res) => {
    let user = req.user
    console.log(user)
    const generateToken = (user) => {
        const payload = JSON.stringify(user);
        return jwt.sign(payload, config.jwtSecret);
    }
    let token = generateToken(user._id)
    res.json({ user, token })
}