'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ResultSchema=new Schema({
    requestID:{
        type:String,
        required:true
    },
    testName:{
        type:String,
        required:true
    },
    patientName:{
        type:String,
        required:true
    },
    result:[{
        fieldName:{
            type:String,
            required:true
        },
        result:{
            type:String,
            required:true
        }
    }]

});
const Result=mongoose.model("Result",ResultSchema);
module.exports=Result;
