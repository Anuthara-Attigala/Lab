const express=require('express');
const mongoose=require('mongoose');

const SampleCenterTypesModel=mongoose.model('SampleCenterType');
const Router=express.Router();
Router.get('/',(req,res)=>{
    SampleCenterTypesModel.find().exec().then(sampleCenterTypes =>{
        res.json(sampleCenterTypes);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
Router.post('/',(req,res)=>{
    const sampleCenterType= new SampleCenterTypesModel({sampleCenterTypeName:req.body.sampleCenterTypeName});
    sampleCenterType.save().then(sampleCenterType => {
        res.json(sampleCenterType);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.delete('/:id',(req,res)=>{
    SampleCenterTypesModel.findByIdAndRemove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports=Router;