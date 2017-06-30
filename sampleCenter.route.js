const express=require('express');
const mongoose=require('mongoose');

const SampleCenterModel=mongoose.model('SampleCenter');
const Router=express.Router();

Router.post('/',(req,res)=>{
    const sampleCenter= new SampleCenterModel(req.body);
    sampleCenter.save().then(sampleCenter => {
        res.json(sampleCenter);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/',(req,res)=>{
    SampleCenterModel.find().exec().then(sampleCenter =>{
        res.json(sampleCenter);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:name',(req,res)=>{
    SampleCenterModel.find({"sampleCenterTypeName":req.params.name}).exec().then(sampleCenter =>{
        res.json(sampleCenter);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
Router.put("/:id",(req,res)=>{
    const sampleCenter=req.body;
    delete sampleCenter._id;
    const sampleCenterId=req.params.id;
    SampleCenterModel.findByIdAndUpdate(sampleCenterId,{$sert:sampleCenter}).then(centerdb=>{
        res.json(sampleCenter);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });

});
module.exports=Router;