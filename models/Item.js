// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const { Schema } = mongoose;

// store name, last, buy, Sell, volume, base_unit of all top 10 results

 const ItemsSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    last: {
        type: String,
        required:true
    },
    buy: {
        type: mongoose.Types.Decimal128,
        required:true
    },
    sell: {
        type: mongoose.Types.Decimal128,
        required:true
    },
    volume: {
        type: mongoose.Types.Decimal128,
        required:true
    },
    base_unit: {
        type: String,
        required: true
    }

});

export const Items = mongoose.model('items',ItemsSchema);