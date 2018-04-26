import React, { Component } from 'react';
import { Grid, Col, Image, Jumbotron, ControlLabel, Button, Checkbox, Form, FormGroup, FormControl } from 'react-bootstrap';
import './Login.css';
import { connect } from 'react-redux';
import { login } from '../redux/reducers/login.reducers';


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
                    <Jumbotron className="cart-banner">
                        <h1>Clothing Co.</h1>
                        <p className="cart-banner-text">Sign up for great deals!</p>
                    </Jumbotron>
                    <Col sm={10} md={6}>
                        <Image src="assets/pexels-photo-322207.jpeg" className="about-profile-picture" rounded />
                    </Col>
                    <Col sm={10} md={6}>
                        <Form horizontal name="loginForm">
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2} md={12}>
                                    <FormControl type="email" name="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2} md={12}>
                                    <FormControl type="password" name="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
                                    <Checkbox>Remember me</Checkbox>
                                    <Button type="submit" value="Login">Sign in</Button>
                                    <Col smOffset={2} sm={10} md={12}>
                                        {isLoginPending && <div>Please wait...</div>}
                                        {isLoginSuccess && <div><h3>Welcome back!</h3></div>}
                                        {loginError && <div>{loginError.message}</div>}
                                    </Col>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
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
