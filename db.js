import mongoose from 'mongoose';
// const mongoURI = 'mongodb://127.0.0.1:27017/hodlinfo';

export function connectToMongo(){
    mongoose.connect('mongodb://127.0.0.1:27017/hodlinfo');
}

