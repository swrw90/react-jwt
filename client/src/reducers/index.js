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

export function login() {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(true));
        dispatch(setLoginError(true));

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