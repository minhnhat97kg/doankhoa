const mongoose=require('mongoose');
const Schema=mongoose.Schema
const schema = Schema({
    title:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    size:{
        type:Number
    },
    type:{
        type:String
    },
    path:{
        type:String,
        unique:true,
        required:true
    }
},{timestamps:true})
module.exports = mongoose.model('Form',schema)
