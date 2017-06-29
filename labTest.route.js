const express=require("express");
const mongoose=require("mongoose");

const LabTestModel=mongoose.model("LabTest");
const FieldModel=mongoose.model("Field");

const Router=express.Router();

Router.post("/",(req,res)=>{
    const labTest=new LabTestModel({
        labTestName:req.body.labTestName,
        category:req.body.category
    });
//console.log(labTest)
labTest.save().then(labtest=>{
    res.json(labtest);
}).catch(err=>{
    console.error(err);
res.sendStatus(500);
})
});
Router.get("/",(req,res)=>{
    LabTestModel.find().populate("fields").exec().then(labTests=>{
    res.json(labTests);
}).catch(err=>{
    console.error(err);
res.sendStatus(500);
});
});
Router.post("/:id/fields",(req,res)=>{
    let Field=new FieldModel({
        fieldName:req.body.fieldName,
        unit:req.body.unit,
        normalRange:req.body.normalRange,
        labTest:req.params.id
    });
Field.save().then(fieldDb=>{
    return LabTestModel.findByIdAndUpdate(req.params.id,{$push:{"fields":fieldDb._id}});
}).then(labTestDb=>{
    res.json(labTestDb);
}).catch(err=>{
    res.sendStatus(500);
console.error(err)
})

});
Router.get("/:id",(req,res)=>{
    LabTestModel.findById(req.params.id).populate('fields').exec().then(labTest => {
    res.json(labTest || {});
}).catch(err => {
    console.error(err);
res.sendStatus(500);
});
});

Router.get("/:name/testname",(req,res)=>{
    LabTestModel.find({labTestName:req.params.name}).populate('fields').exec().then(labTest => {
    res.json(labTest || {});
}).catch(err => {
    console.error(err);
res.sendStatus(500);
});
});
module.exports=Router;