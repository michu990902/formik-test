import React, { useState } from 'react';
import { Formik } from 'formik';

import { connect } from 'react-redux';
import { setFormData } from '../../redux/app/appActions'

const Form = ({ setFormData }) => {
    const [formValues, setFormValues] = useState({});
    return (
        <div>
            <Formik
                initialValues={{...formValues}}
                
                onSubmit={values => console.log(values)}

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
                            name='content' 
                            onChange={handleChange} 
                            // value={values.content}
                        />
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