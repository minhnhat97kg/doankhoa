const User =  require('./model')
module.exports.index = (req,res)=>{
    User.find({},'firstname lastname email _id',(err,users)=>{
        res.json(users)
    })
}
