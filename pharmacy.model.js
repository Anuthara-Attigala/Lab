'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PharmacySchema = new Schema({
    drugID:{
        type:Number,
        required:true
    },
    drugName:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    eDate:{
        type:Date,
        require:true
    },
    mDate:{
        type:Date,
        require:true
    },
    supplierID:{
        type:Number,
        required:true
    }
});

const User = mongoose.model('User',PharmacySchema);

module.exports = User;