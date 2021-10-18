const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//Register a new user
router.post('/register', (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            res.status(201).json({
                message: "user created successfullys"
            });
        } 
        else {
            res.status(400). json({
                message: "email and password are required"
            })
        }
    }
    catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
});


//Login a user
router.post('/login', (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            res.status(201).json({
                message: "Login successful"
            });
        } 
        else {
            res.status(400). json({
                message: "email and password are required"
            })
        }
    }
    catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
});