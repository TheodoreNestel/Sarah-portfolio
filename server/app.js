const path = require("path")
const express = require('express')
const app = express()



app.use(express.static(path.join(__dirname, '../client/dist'))); //link our server to the parcel distribution folder





//api route goes here 



module.exports = app //export defaulting our app 