import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
const rootUrl = 'http://localhost:5000/employees/';

class Employee extends Component {
    render() {
        return (
            <div>
                <Col xs={6} md={4} lg={4}>
                    <Image className="employees" href="#" alt="171x180" src={rootUrl + this.props.employee.employeeImage} circle />
                    <div class="card">
                        <h3 className="card-title">{this.props.employees.name} <p> {console.log(this.props.employees.description)}</p> </h3>
                    </div>
                </Col>
            </div>
        )
    }
}

export default Employee;