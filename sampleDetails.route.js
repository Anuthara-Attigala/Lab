/**
 * Created by User on 5/6/2017.
 */
const express=require('express');
const mongoose=require('mongoose');

const requestModel = mongoose.model('Request');
const Router = express.Router();

Router.get('/',(req,res)=>{
    requestModel.find().exec().then(requests=>{
        res.json(requests);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    })
});
Router.get('/:reqID', (req, res) => {
    requestModel.find({"requestID": req.params.reqID}).exec().then(request => {
        res.json(request || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);

    });
});
Router.get('/:id',(req,res)=>{
    requestModel.findById(req.params.id).exec().then(request=>{
        res.json(request || {});
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
Router.post('/',(req,res)=>{
    const request = new requestModel(req.body);
    request.save().then(request=>{
        res.json(request);
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id',(req,res)=>{
    requestModel.findByIdAndRemove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
Router.put('/:id',(req,res)=>{
    const request = req.body;
    delete request._id;
    const requestId = req.params.id;
    requestModel.findByIdAndUpdate(requestId,{$set:request}).then(requestdb=>{
        res.json(request);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});


module.exports = Router;
