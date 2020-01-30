const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const managerNews=mongoose.Schema({
    code:{
        type: String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    writer:{
        type:Date,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
   }
})

const schema= new mongoose.Schema({
    code:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
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
    news:[{
        new:{
            type:Schema.Types.ObjectId,
            ref:'News'
        }
    }] 
})
