import React, { useState } from 'react';
import { Formik, Field } from 'formik';

import styles from './Form.module.scss';

import { connect } from 'react-redux';
import { setFormData } from '../../redux/app/appActions';

const Form = ({ setFormData }) => {
    const [formValues, setFormValues] = useState({
        email: "",
        color: "#f00"
    });
    return (
        <div>
            <Formik
                initialValues={formValues}
                
                onSubmit={values => console.log(values)}

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

                render={({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name='email'
                            placeholder="email" 
                            onChange={handleChange}
                            value={values.content}
                        />
                        {errors.email && <div className={styles.error}>{errors.email}</div>}
                        <Field component="div" name="color">
                            <input
                                type="radio"
                                name="color"
                                value="#fff"
                            />
                            <input
                                type="radio"
                                name="color"
                                value="#000"
                            />
                        </Field>
                        <br/>
                        <input type="submit"/>
                    </form>
                )}
            />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setFormData: data => dispatch(setFormData(data))
});

export default connect(null, mapDispatchToProps)(Form);