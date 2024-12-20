const express = require('express')
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('welcome to the server')
});


const start = async()=>{
    try{
        app.listen(PORT,()=>{
           console.log(`${PORT} yes i am connected`);
        });
    }
    catch(error){
        console.log(error)

    }
};
start();
