import { appActionTypes } from './appActionTypes'

const initialState = {
    formData: {
        email: "test@test.pl",
        color: "#000"
    },
}

const appReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case appActionTypes.SET_FORM_DATA:
            return {
                ...state,
                formData: payload
            }; 
        default: return state;
    }
}

export default appReducer;