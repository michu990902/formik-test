import { appActionTypes } from './appActionTypes'

export const setFormData = data => ({
    type: appActionTypes.SET_FORM_DATA,
    payload: data
})