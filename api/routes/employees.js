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

//handles POST requests to /employees, returns created employee
router.post('/', upload.single('employeeImage'), EmployeesController.create_employee);

// handles GET request for specific via employeeId variable, assigns it to new const id via params
router.get('/:employeeId', EmployeesController.get_specific_employee);

//handles deleting a specific product via id
router.delete('/:employeeId', ProductsController.products_delete_product);


module.exports = router;