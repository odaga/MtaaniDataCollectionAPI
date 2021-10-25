const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');


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

//Password reset enpoint
//TODO
    //1. get the email and check if there is an account with this email
    //2. if an account does not exist, reset client message with 404
    //3. if  an acount exists send email with activation link/token/key

//Verify the password reset token/link