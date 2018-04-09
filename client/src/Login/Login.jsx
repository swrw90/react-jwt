import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, ControlLabel, Button, Checkbox, Form, FormGroup, FormControl } from 'react-bootstrap';
import './Login.css';
import { connect } from 'react-redux';


class Login extends Component {
    render() {
        return (
            <div>
                <Grid className="login-form-wrapper">
                    <Form horizontal name="loginForm">
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" name="email" placeholder="Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                             </Col>
                            <Col sm={10}>
                                <FormControl type="password" name="password" placeholder="Password" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Checkbox>Remember me</Checkbox>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit" value="Login">Sign in</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Grid>
            </div>
        );
    }
}

mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    }
}

export default Login;
