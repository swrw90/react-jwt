import React, { Component } from 'react';
import { Col, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
// import { getEmployeesData } from '../../redux/reducers/employee.reducers';
// import { LoadingState } from '../../redux/reducers/product.reducers';

const rootUrl = 'http://localhost:5000/';

class Employee extends Component {
    render() {
        return (
            <div>
                <Col xs={6} md={4} lg={4}>
                    <Image className="employees" href="#" alt="171x180" src="assets/employee2.jpg" circle />
                    <div class="card">
                        <h3 className="card-title">Jeremy Wilkins<p>Marketing</p></h3>
                    </div>
                </Col>
            </div>
        )
    }
}

export default Employee;