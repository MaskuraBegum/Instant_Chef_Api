const mongoose = require('mongoose');



const connectDb = (uri)=>{
    console.log(uri);
    return mongoose.connect(uri,{
       
    });
};

module.exports = connectDb;