const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');


const Child = require('../../models/Child');


//CREATEA NEW CHILD PROFILE
router.post('/', (req, res) => {
    try{
        res.status(httpStatus.CREATED).json({
            message: "profile created successfully",

        });
    }
    catch(err) {
        console.log(err);
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    error: error.message
                });
    }
});

//FIND PROFILE BY ID
router.get('/:id', (req, res) => {
    try {
        if (req.params.id) {
            res.status(httpStatus.CREATED).json({
                message: "profile with id found"
            });
        }
        else {
            res.status(httpStatus.NOT_FOUND).json({
                message: "profile not found"
            });
        }
    }
    catch(err) {
        console.log(err);
    }
});

module.exports = router;