import * as actionTypes from './actionTypes';

export const editStudentList = (filteredList) => {
    return {
        type: actionTypes.FILTER_STUDENT_LIST,
        payload: filteredList
    }
};

export const addStudentList = (studentList) => {
    return {
        type: actionTypes.ADD_STUDENT_LIST,
        payload: studentList
    }
};