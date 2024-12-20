const mongoose = require('mongoose');



const connectDb = (uri)=>{
    console.log('connected')
    return mongoose.connect(uri,{
        
    });
};

module.exports = connectDb;