const bodyParser=require('body-parser');
const express=require('express');
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
require('./sampleCenterType.model.js');
require('./field.model.js');
require('./labTest.model.js');
require('./result.model.js');
require('./pharmacy.model.js');
require('./labRequest.model');
require('./addDetails.model');
require('./sampleCenter.model.js');
require('./department.model.js');
require('./lab.model.js');
require('./patient.model.js');
require('./login.model.js');

const SampleDetailsRoute=require('./sampleDetails.route');
const PharmacyRoute=require('./pharmacy.route');
const AddDetailsRoute=require('./addDetails.route');
const SampleCenterTypeRouter=require('./sampleCenterType.route.js');
const LabTestRouter=require('./labTest.route.js');
const ResultRouter=require("./result.route.js");
const SampleCenterRouter=require('./sampleCenter.route.js');
const DepartmentRouter=require('./department.route.js');
const LabRouter=require('./lab.routes.js');
const PatientRouter=require('./patient.route.js');
const DoctorRequestRouter=require('./doctorRequest.route.js');

const app=express();

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/AF1',err =>{
    if(err){
        console.log(err);
        process.exit(1);
    }
});

allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);

app.use('/sampleCenterTypes',SampleCenterTypeRouter);
app.use('/labTests',LabTestRouter);
app.use('/results',ResultRouter);
app.use('/requests',SampleDetailsRoute);
app.use('/users',PharmacyRoute);
app.use('/addDetails',AddDetailsRoute);
app.use('/samplecenters',SampleCenterRouter);
app.use('/departments',DepartmentRouter);
app.use('/labs',LabRouter);
app.use('/patient',PatientRouter);
app.use('/doctorRequest',DoctorRequestRouter);
app.listen(3000,err =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('server is listening on port 3001');
});

module.exports = app;