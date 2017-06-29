const bodyParser=require('body-parser');
const express=require('express');
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
require('./sampleCenterType.model.js');
require('./field.model.js');
require('./labTest.model.js');
require('./result.model.js');

const SampleCenterTypeRouter=require('./sampleCenterType.route.js');
const LabTestRouter=require('./labTest.route.js');
const ResultRouter=require("./result.route.js");
const app=express();

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/AF1',err =>{
    if(err){
        console.log(err);
        process.exit(1);
    }
});

app.use('/sampleCenterTypes',SampleCenterTypeRouter);
app.use('/labTests',LabTestRouter);
app.use('/results',ResultRouter);

app.listen(3001,err =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('server is listening on port 3001');
});