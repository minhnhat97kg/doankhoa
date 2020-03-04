const Joi = require('joi')
const passport = require('passport')
const bcrypt = require('bcrypt');
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')



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
            //Check when model is created 
            if (err)
                res.json(err)
                //Success
            res.json(user)
        })
    })
}



module.exports.login =(req, res,next) => {

    const generateToken = (user) => {
        const payload = JSON.stringify(user);
        return jwt.sign(payload, config.jwtSecret);
    }

    passport.authenticate('login',(err,user,info)=>{
        if(err){
            return next(err)
        }
        //Send error message
        if(!user){
            console.log(user)
            res.status(401).send(info)
            return
        }
        let token = generateToken(user._id)
        res.status(200).json({ user, token })

    })(req,res,next)
}
