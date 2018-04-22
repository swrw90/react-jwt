import axios from 'axios';
const employeesUrl = 'http://localhost:5000/employees';

export const LoadingState = {
    pending: 0,
    loading: 1,
    finished: 2
};

let defaultState = {
    employees: [{
        name: "",
        description: "",
    }],
    loadingMessage: '',
    loadingState: LoadingState.pending
};

let employeeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "EMPLOYEES_LOADING":
            return {
                ...state,
                loadingMessage: "Loading data",
                loadingState: LoadingState.loading
            }
        case "EMPLOYEES_DATA_SUCCESS":
            return {
                ...state,
                employees: action.data.employees,
                loadingMessage: "Data successfully loaded",
                loadingState: LoadingState.finished
            };
        default:
            return state;
    }
}

export function getEmployeesData() {
    return dispatch => {
        dispatch({
            type: "EMPLOYEES_LOADING",
        })
        axios.get(employeesUrl)
            .then(response => {
                dispatch({
                    type: 'EMPLOYEES_DATA_SUCCESS',
                    data: response.data,
                });
            })
            .catch(function (error) {
                return error
            });
    }
}

export default employeeReducer;