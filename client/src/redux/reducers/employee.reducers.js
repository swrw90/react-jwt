import axios from 'axios';
const employeesUrl = 'http://localhost:5000/employees';
import { LoadingState } from '../../redux/reducers/product.reducers';

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
            console.log("loading");
            return {
                ...state,
                loadingMessage: "Loading data",
                loadingState: LoadingState.loading
            }
        case "EMPLOYEES_DATA_SUCCESS":
            console.log("Successful data retrieval after network call");
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