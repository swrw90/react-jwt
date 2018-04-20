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
            console.log(err + { test: "This error"});
            res.status(500).json({
                error: err,
                message: "possibly here?"
            })
        })
}