/**
 * Created by User on 5/6/2017.
 */
const express=require('express');
const mongoose=require('mongoose');



const PharmacyModel = mongoose.model('User');

const Router = express.Router();

Router.get('/',(req,res)=>{
    PharmacyModel.find().exec().then(users=>{
        res.json(users);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    })
});

Router.post('/',(req,res)=>{
    const user = new PharmacyModel(req.body);
    user.save().then(user=>{
        res.json(user);
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id',(req,res)=>{
    PharmacyModel.findByIdAndRemove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    PharmacyModel.find({"drugID": req.params.id}).exec().then(user => {
        res.json(user || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);

    });
});


module.exports = Router;