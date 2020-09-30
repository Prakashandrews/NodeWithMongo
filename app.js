const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use('/posts', postsRoute)

//Middleware
// app.use('/posts', ()=> {
//     console.log("middle ware running")
// });

app.get('/', (req, res) => {
    res.send('we are on home')
});

// app.get('/posts', (req, res) => {
//     res.send('we are on posts')
// });

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true } , ()=> {
    console.log('db connected..!');
});

app.listen(3000);