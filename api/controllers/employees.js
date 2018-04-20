const Employee = require('../models/employees');
const mongoose = require('mongoose');

//Get all employees
exports.get_all_employees = (req, res, next) => {
    Employee.find()
        .select('name _id description employeeImage')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                employees: docs.map(doc => {
                    return {
                        name: doc.name,
                        description: doc.description,
                        employeeImage: doc.employeeImage,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:5000/employees/' + doc._id
                        }
                    }
                })
            };
            if (docs.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: 'No entries found'
                });
            }
        })
        .catch(err => {
            console.log(err + { test: "This error" });
            res.status(500).json({
                error: err,
                message: "possibly here?"
            })
        })
}

// Create an employee
exports.create_employee = (req, res, next) => {
    console.log(req.file);
    const employee = new Employee({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        employeeImage: req.file.path
    });
    employee.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Created employee successfully',
            createdEmployee: {
                name: result.name,
                description: result.description,
                _id: result._id,
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/employees/' + result._id
                }
            }
        });
    })
        .catch(err => {
            console.log(err + { message: "Here is the error" });
            res.stats(500).json({
                error: err,
                message: "We have an error here"
            });
        });
}

// Get a specific employee
exports.get_specific_employee = (req, res, next) => {
    const id = req.params.employeeId;
    Employee.findById(id)
        .select('name description _id employeeImage')
        .exec()
        .then(doc => {
            console.log("From the database", doc);
            if (doc) {
                res.status(200).json({
                    employee: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000:/employes/'
                    }
                });
            } else {
                res.status(404).json({
                    message: 'No valid entry for ID'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: "Err up in herr",
                message: "Got an error"
            })
        });
}