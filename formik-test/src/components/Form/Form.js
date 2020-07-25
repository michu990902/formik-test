import React from 'react';
// import { Formik } from 'formik';

import { connect } from 'react-redux';
import { setFormData } from '../../redux/app/appActions'

const Form = () => (
    <div>
        form
    </div>
);

const mapDispatchToProps = dispatch => ({
    setFormData: data => dispatch(setFormData(data))
});

export default connect(null, mapDispatchToProps)(Form);