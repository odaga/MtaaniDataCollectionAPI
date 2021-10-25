const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');

//Handling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});



//Database connection
try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, 
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    }, 
    () => {
      console.log("Connected to the DB");
  });
}
catch (err) {
  console.log("Could not connect to the DB");
}

const authRoute = require('./routes/v1/authRoute.js');
const profile = require('./routes/v1/ChileProfileRoute');


//ADDING THE NEEDED MIDDLEWARE

app.use(morgan('dev'));
app.use('/auth', authRoute);
app.use('/profile', profile);


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Mtaani field data collection API',
        version: "1.0"
    });
});

module.exports = app;