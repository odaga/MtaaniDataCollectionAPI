const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const Child = require('../models/Child');


//CREATEA NEW CHILD PROFILE
router.post('/', (req, res) => {
    try{
        res.status(201).json({
            message: "profile created successfully",

        });
    }
    catch(err) {
        console.log(err);
                res.status(500).json({
                    error: error.message
                });
    }
});

//FIND PROFILE BY ID
router.get('/:id', (req, res) => {
    try {
        if (req.params.id) {
            res.status(201).json({
                message: "profile with id found"
            });
        }
        else {
            res.status(404).json({
                message: "profile not found"
            });
        }
    }
    catch(err) {
        console.log(err);
    }
});