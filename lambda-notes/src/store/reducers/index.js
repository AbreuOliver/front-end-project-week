import {
    GET_NOTES,
    ERROR,
    GET_NOTE,
    ADD_NOTE,
    DELETE_NOTE, 
    LOADING,
} from "../actions";

const defaultState =  {
    notes: [],
    loading: false,
    error: false 
}

export const rootReducer = (state = defaultState, action) => {
    switch(action.type){
        case LOADING:
            return {...state, loading: true, error: false}
        case GET_NOTES:
            return {...state, notes: action.notes, loading: false, error: false }
        case ERROR:
            return {...state, loading: false, error: true}
        case GET_NOTE:
            return {...state, loading: false, error: false}
        case ADD_NOTE:
            return {...state, loading: false, error: false}
        case DELETE_NOTE:
            return {...state, loading: false, error: false}
        default:
            return state
    }
}

export default rootReducer;