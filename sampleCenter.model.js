'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const SampleCenterSchema=new Schema({
    sampleCenterName:{
        type:String,
        required:true
    },
    sampleCenterTypeName:{
        type:String,
        required:true
    },
    inCharge:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    }
});
const SampleCenter=mongoose.model('SampleCenter',SampleCenterSchema);
module.exports=SampleCenter;
