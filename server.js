import express from 'express';

// Initialize our server
const app = express();

// This function is processing all incoming requests
app.use(function (req, res) {   // app.use(callback function)
    debugger;
    console.log('Request recieved');
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
    res.send('Hello World from me');
})


// Run the server
app.listen(4000)  //  The number is port, in this case local port