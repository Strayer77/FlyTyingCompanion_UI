require('dotenv').config()  //pulls all of our environment variables from env file

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');



//database connection through mongoose - DATABASE URL is set within env file to protect url
//and allows us to pull database url from wherever it is deployed later
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
//variable for our db connection
const db = mongoose.connection

db.on('error', (error) => console.error(error))      //tells us if theres an error connecting to db
db.once('open', (error) => console.log('Connected to Database'))    // tells us that we've connected to db on startup

app.use(express.json()) //middleware to allow our app to read json
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, DELETE, POST, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//where are routes will be located - inside routes folder in flies.js file
const fliesRouter = require('./routes/Flies')
app.use('/Flies', fliesRouter)  //tells app to use the fliesRouter whenever we query
//'localhost:8080/flies/blahblah'

app.use(express.static('www'));

//app listens on port 8080 and a Server Started message is delivered on startup
//process.env.port will tell us what port it will be assigned to on deployment
app.listen(process.env.PORT || 8080, () => console.log("Server Started")) 