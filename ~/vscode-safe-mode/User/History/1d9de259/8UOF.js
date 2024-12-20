const express = require('express')
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
console.log('welcome to the server')
})


const start = async()=>{
    try{
        app.listen(port, hostname, blacklog)
    }
    catch{

    }
}
start();
