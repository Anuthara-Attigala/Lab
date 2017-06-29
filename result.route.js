const express=require("express");
const mongoose=require("mongoose");

const ResultModel=mongoose.model("Result");
const Router=express.Router();

Router.post('/',(req,res)=>{
    const Result=new ResultModel(req.body);
    Result.save().then(resultDb=>{
        res.json(resultDb)
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
Router.get('/',(req,res)=>{
    ResultModel.find().exec().then(results=>{
        res.json(results)
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500)
    });
});
Router.get('/:requestid/request',(req,res)=>{
    ResultModel.find({requestID:req.params.requestid}).exec().then(result=>{
        res.json(result)
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500)
    });
});
Router.put("/:id",(req,res)=>{
    ResultModel.findByIdAndUpdate(req.params.id,{$push:{'result':req.body}}).then(resultDb=>{
        res.json(resultDb);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    })
});
module.exports=Router;