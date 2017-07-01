'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const LabSchema=new Schema({
    labName:{
        type:String,
        required:true
    },
    laboratoryTypeName:{
        type:String,
        required:true
    },
    departmentName:{
        type:String,
        required:true
    },
    labInCharge:{
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
const Lab=mongoose.model('Lab',LabSchema);
module.exports=Lab;
