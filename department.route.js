const express=require('express');
const mongoose=require('mongoose');

const DepartmentModel=mongoose.model('Department');
const Router=express.Router();
Router.get('/',(req,res)=>{
    DepartmentModel.find().exec().then(department =>{
        res.json(department);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
Router.post('/',(req,res)=>{
    const department1= new DepartmentModel({departmentName:req.body.departmentName});
    department1.save().then(department => {
        res.json(department);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.delete('/:id',(req,res)=>{
    DepartmentModel.findByIdAndRemove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports=Router;