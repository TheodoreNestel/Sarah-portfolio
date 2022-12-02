const path =require("path")
const express = require('express')
const app = express()



app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.static('../client/dist'))


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('index.html')
// })




module.exports = app //export defaulting our app 