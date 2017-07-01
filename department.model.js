'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const DepartmentSchema=new Schema({
    departmentName:{
        type:String,
        required:true
    }
});
const Department=mongoose.model('Department',DepartmentSchema);
module.exports=Department;
