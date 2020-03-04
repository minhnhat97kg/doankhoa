const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const evtschema =  Schema({
    _idEvt:{
        type:schema_mongoose.Types.ObjectId,
        ref:'Event'
    } 
})

const schema = Schema({
    _idStudent:{
        type:schema_mongoose.Types.ObjectId,
        ref:'Student'
    },
    evtRig:[evtschema],
    evtJoin:[evtschema],
    file:[{
        _idfile:{
            type:schema_mongoose.Types.ObjectId,
            ref:'File'
        },
        status:{
            type:String,
            required:true    
        }
    }],  
})
