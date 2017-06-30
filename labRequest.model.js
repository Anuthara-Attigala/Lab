'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labRequestSchema = new Schema({
    action : {
        type:String
    },
    priority : {
        type :String
    },
    status : {
        type :String
    },
    requestID : {
        type : Number
    },
    patientName : {
        type : String
    },
    testName : {
        type : String
    },
    reqDate : {
        type : Date
    },
    dueDate : {
        type :Date
    },
    reqPerson : {
        type :String
    },
    comment : {
        type : String
    }
});

const Request = mongoose.model('Request',labRequestSchema);
module.exports = Request;

