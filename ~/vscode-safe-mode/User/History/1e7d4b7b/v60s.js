const mongoose = require('mongoose');

uri = "";

const connectDb = ()=>{
    return mongoose.connect(uri,options,callback)
}