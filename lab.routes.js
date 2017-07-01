const express=require('express');
const mongoose=require('mongoose');

const LabModel=mongoose.model('Lab');
const Router=express.Router();

Router.post('/',(req,res)=>{
    const lab= new LabModel(req.body);
    lab.save().then(lab => {
        res.json(lab);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/',(req,res)=>{
    LabModel.find().exec().then(lab =>{
        res.json(lab);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:name',(req,res)=>{
    LabModel.find({"departmentName":req.params.name}).exec().then(lab =>{
        res.json(lab);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
Router.put("/:id",(req,res)=>{
    const lab=req.body;
    delete lab._id;
    const labId=req.params.id;
    LabModel.findByIdAndUpdate(labId,{$set:lab}).then(labDb=>{
        res.json(lab);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });

});
module.exports=Router;