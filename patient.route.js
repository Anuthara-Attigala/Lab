const express=require('express');
const mongoose=require('mongoose');

const PatientModel=mongoose.model('Patient');
const Router=express.Router();

Router.get('/',(req,res)=>{
    PatientModel.find().exec().then(patient=>{
        res.json(patient);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/',(req,res)=>{
    const Patient=new PatientModel(req.body);
    Patient.save().then(patient=>{
        res.json(patient);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id',(req,res)=>{
    PatientModel.findByIdAndRemove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put("/:id",(req,res)=>{
    const patient=req.body;
    delete patient._id;
    const patientId=req.params.id;
    PatientModel.findByIdAndUpdate(patientId,{$set:patient}).then(()=>{
        res.json(patient);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });

});


module.exports=Router;

