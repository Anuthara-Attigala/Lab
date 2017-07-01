'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const PatientSchema=new Schema({
    patientName:{
        type:String,
        required:true
    },
    gender: {
        type: String
    },
    contactNumber:{
        type:String
    },
    dob:{
        type:Date
    }
});
const Patient=mongoose.model('Patient',PatientSchema);
module.exports=Patient;
