const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const schema= new mongoose.Schema({
    code:{
        type:String,
        required:[true,'Code is empty'],
        unique:true
    },
    name:{
        type:String,
        required:[true,'Name is empty']
    },
    desc:{
        type:String,
        required:[true,'Description is empty']
    },
    date:{
        type:Date,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    maxStudent:{
        type:Number,
        required:true
    },
    participants:[{
        participant:{
            type:Schema.Types.ObjectId,
            ref:'Student'
        },
        status:{
            type:Boolean,
            default:false
        },
        position:{
            type:String,
            enum:['MANAGER','SUPPORTER','STUDENT'],
            default:'STUDENT',
            required:true
        }
    }],
    news:[
        {
            type:Schema.Types.ObjectId,
            ref:'News'
        }
    ]
})
module.exports = mongoose.model('Event', schema);
