const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()

mongoose.connect('mongodb://ImIn:1k2k3k4k@ds131753.mlab.com:31753/mydb',{ useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
    console.log('connected to mLab')
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.use(bodyParser.json())
var server = app.listen(4000, ()=>{
    console.log('server is up on 4000')
})
app.use(express.static(path.join(__dirname, 'public')));
const io = require('socket.io').listen(server);
io.on('connection', (socket) => {
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
})
