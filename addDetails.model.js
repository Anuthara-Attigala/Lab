'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addDetailsSchema = new Schema({
    requestID : {
        type:Number
    },
    testName : {
        type :String
    },
    date : {
        type :String
    },
    location : {
        type : String
    }

});

const addDetails = mongoose.model('addDetails',addDetailsSchema);
module.exports = addDetails;

