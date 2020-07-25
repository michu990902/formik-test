import { appActionTypes } from './appActionTypes'

const initialState = {
    form_data: {},
}

const appReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case appActionTypes.SET_FORM_DATA:
            return {
                ...state,
                form_data: payload
            }; 
        default: return state;
    }
}

export default appReducer;