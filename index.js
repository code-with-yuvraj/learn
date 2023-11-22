// const express=require('express');
// const app=express();

// app.get('/',(req,res)=>{
//      res.send('NGINX web server');
// })

// app.listen(80,'0.0.0.0',(err)=>{
//       if(err) return err;
//       console.log('server start');
// })


const express = require('express');
const app = express();
// const port = 8081;
const port = 3000;

app.get('/', (req, res) => {
    //res.send('Login page');
    res.sendFile(__dirname + '/index.html')
});

app.get('/node', (req, res) => {
    //res.send('Login page');
    res.sendFile(__dirname + '/content.html')
});

const user = function (a, b, callback) {
    setTimeout(() => {
        callback(null, a + b);
    }, 5000);
};

user(10, 5, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
