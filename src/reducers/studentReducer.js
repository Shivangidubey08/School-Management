/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    studentList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_STUDENT_LIST:
            return { ...state, studentList: action.payload };
        case actionTypes.FILTER_STUDENT_LIST:
            return { ...state, studentList: action.payload };
        default:
            return state;
    }
};