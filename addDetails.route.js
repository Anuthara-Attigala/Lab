const express=require('express');
const mongoose=require('mongoose');

const addDetailsModel = mongoose.model('addDetails');
const Router = express.Router();

Router.get('/',(req,res)=>{
    addDetailsModel.find().exec().then(details=>{
        res.json(details);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    })
});
Router.post('/',(req,res)=>{
    const details = new addDetailsModel(req.body);
    details.save().then(details=>{
        res.json(details);
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    });
});
Router.delete('/:id',(req,res)=>{
    addDetailsModel.findByIdAndRemove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});



module.exports = Router;

