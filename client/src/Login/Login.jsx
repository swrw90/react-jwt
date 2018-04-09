import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, ControlLabel, Button, Checkbox, Form, FormGroup, FormControl } from 'react-bootstrap';
import './Login.css';
import { connect } from 'react-redux';
import { login } from '../redux/reducers/index';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { email, password } = this.state;
        let { isLoginPending, isLoginSuccess, loginError } = this.props
        return (
            <div>
                <Grid className="login-form-wrapper" onSubmit={this.onSubmit}>
                    <Form horizontal name="loginForm">
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" name="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                             </Col>
                            <Col sm={10}>
                                <FormControl type="password" name="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
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
                                    {/*{isLoginPending && <div>Please wait...</div>}*/}
                                    {isLoginSuccess && <div>Welcome back!</div>}
                                    {/*{loginError && <div>loginError.message</div>}*/}
                            </Col>
                        </FormGroup>
                    </Form>

                </Grid>
            </div>
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        this.props.login(email, password);
    }
}



let mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
