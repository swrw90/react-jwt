const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const EmployeesController = require('../controllers/employees');

const multer = require('multer');

const storage = multer.diskStorage({
    distination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// handles GET requests to /employees
router.get('/', EmployeesController.get_all_employees);