const mongoose=require('mongoose');

const schema= new mongoose.Schema({
    code:{
        type:String,
        required:true,
        maxlength:8
    },
    class:{
        type:String,
        required:true
    },
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    department:{
        type:String,
        required:true
    },
    trainingProgram:{
        type:String,
        enum:['NORMAL','ADVANCED','HIGH_QUALITY'],
        required:true
    },
    beginAt:{
        type:Number,
        required:true
    },
    finishAt:{
        type:Number,
        required:true
    }
})
