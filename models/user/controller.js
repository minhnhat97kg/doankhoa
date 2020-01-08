const User = require('./model.js')

module.exports.index = (req,res)=>{
    User.find({},'firstname lastname email _id',(err,users)=>{
        res.json(users)

    })
}
