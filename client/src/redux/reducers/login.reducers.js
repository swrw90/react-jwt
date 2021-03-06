import axios from 'axios';

const LOGIN_PENDING = 'LOGIN-PENDING';
const LOGIN_SUCCESS = 'LOGIN-SUCCESS';
const LOGIN_ERROR = 'LOGIN-ERROR';

function setLoginPending(isLoginPending) {
    return {
        type: LOGIN_PENDING,
        isLoginPending
    }
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    }
}

function setLoginError(loginError) {
    return {
        type: LOGIN_ERROR,
        loginError
    }
}


export function login(email, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        sendLoginRequest(email, password)
            .then(success => {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(true));
            })
            .catch(err => {
                dispatch(setLoginPending(false));
                dispatch(setLoginError(err));
            });
    }
}

export default function reducer(state = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null
}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            }

        case LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            }

        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            }
        default:
            return state;
    }
}

function sendLoginRequest(email, password) {
    return new Promise((resolve, reject) => {

        axios.post('http://localhost:5000/user/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                if (response.status === 200) {
                    return resolve(true);
                } else {
                    return reject(new Error('Invalid email or password'));
                }
            })
            .catch(function (error) {
                return reject(new Error('Invalid email or password'));
            });

        // setTimeout(() => {
        //     if (email === 'admin@example.com' && password === 'admin') {
        //         return resolve(true);
        //     } else {
        //         return reject(new Error('Invalid email or password'));
        //     }
        // }, 1000);
    });
}


