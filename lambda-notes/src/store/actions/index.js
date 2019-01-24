import axios from "axios";

export const LOADING = "LOADING";
export const GET_NOTES = "GET_NOTES";
export const ERROR = "ERROR";
export const GET_NOTE = "GET_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";


export const getNotes = () => {
    return dispatch => {
        dispatch({ type: LOADING });
            axios
                .get("https://fe-notes.herokuapp.com/note/get/all")
                .then(response => {
                    dispatch({ type: "GET_NOTES", notes: response.data });
                })
                .catch(err => {
                    console.log(err);
                    dispatch({ type: ERROR });
        });
    };
};

export const addNote = note => {
    return dispatch => {
        dispatch({ type: LOADING });
            axios
                .post("https://fe-notes.herokuapp.com/note/create", note)
                .then(response => {
                    dispatch({ type: "GET_NOTES", notes: response.data });
                })
                .catch(error => {
                    dispatch({ type: "ERROR", errorMessage: error });
                });
    };
};

export const getNote = id => {
    return dispatch => {
        dispatch({ type: GET_NOTE });
            axios
                .get(`"https://fe-notes.herokuapp.com/note/get/${id}"`)
                .then(response => {
                    dispatch({ type: "GET_NOTES", notes: response.data });
                })
                .catch(error => {
                    dispatch({ type: "ERROR", errorMessage: error });
        });
    };
};

export const editNote = id => {
    return dispatch => {
        dispatch({ type: EDIT_NOTE });
            axios
                .put(`"https://fe-notes.herokuapp.com/note/edit/${id}"`)
                .then(() => getNotes()(dispatch))
                .catch(error => {
                    dispatch({ type: "ERROR", errorMessage: error });
                });
    };
};


export const deleteNote = id => {
    return dispatch => {
        dispatch({ type: DELETE_NOTE });
            axios
                .delete(`"https://fe-notes.herokuapp.com/note/delete/${id}"`)
                .then(() => getNotes()(dispatch))
                .catch(error => {
                    dispatch({ type: "ERROR", errorMessage: error });
                });
    };
};
