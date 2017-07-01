const express=require("express");
const mongoose=require("mongoose");

//const docRequestModel=mongoose.model("DoctorRequest");
const labRequestModel=mongoose.model("Request");

const Router=express.Router();

// Router.post("/",(req,res)=>{
//     const docReq=new docRequestModel({
//         DoctorName:req.body.DoctorName,
//         patientName:req.body.patientName,
//         Priority:req.body.Priority,
//         date:req.body.date,
//         labTest:req.body.labTest
//     });
//     docReq.save().then(docReq=>{
//         res.json(docReq);
//     }).catch(err=>{
//         console.error(err);
//         res.sendStatus(500);
//     })
// })
Router.get("/",(req,res)=>{
    docRequestModel.find().populate('doctorRequest').exec().then(docreq=>{
        res.json(docreq);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get("/patientName",(req,res)=>{
    labRequestModel.findById(req.params.id).populate('doctorRequest').exec().then(docreq => {
        res.json(docreq || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
module.exports=Router;