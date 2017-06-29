'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const SampleCenterTypeSchema=new Schema({
    sampleCenterTypeName:{
        type:String,
        required:true
    }
});
const SampleCenterType=mongoose.model('SampleCenterType',SampleCenterTypeSchema);
module.exports=SampleCenterType;
