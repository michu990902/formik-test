import React from 'react';
import { Formik, Field } from 'formik';

import styles from './Form.module.scss';

import { connect } from 'react-redux';
import { setFormData } from '../../redux/app/appActions';

const Form = ({ formData, setFormData, update }) => {
    const initialState = {
        email: "",
        color: "#000"
    };
    return (
        <div>
            <Formik
                initialValues={update ? formData : initialState}
                
                onSubmit={async (values, {resetForm}) => {
                    await setFormData(values)
                    resetForm(initialState)
                }}

                validate={values => {
                    const errors = {};
                    if(!values.email){
                        errors.email = "Required"
                    }else if(
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ){
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    // handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    isValid
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name='email'
                            placeholder="email" 
                            onChange={handleChange}
                            value={values.email}
                        />
                        {errors.email && <div className={styles.error}>{errors.email}</div>}
                        <br/>
                        <label id="radio_label">Color</label>
                        <Field component="div" name="color" value={values.color} role="radiogroup" aria-labelledby="radio_label">
                            <input
                                type="radio"
                                name="color"
                                value="#fff"
                                defaultChecked={values.color === '#fff'}
                            />
                            <input
                                type="radio"
                                name="color"
                                value="#000"
                                defaultChecked={values.color === '#000'}
                            />
                        </Field>
                        <br/>
                        <input type="submit" disabled={isSubmitting}/>
                    </form>
                )}
            </Formik>
        </div>
    );
}

const mapStateToProps = state => ({
    formData: state.app.formData
});
const mapDispatchToProps = dispatch => ({
    setFormData: data => dispatch(setFormData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);