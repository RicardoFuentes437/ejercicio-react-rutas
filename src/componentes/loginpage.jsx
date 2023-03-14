import React from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
    password: Yup.string()
    .required('Required!')
    .min(8, 'Too short!')
});

const Loginpage = ({login}) => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const navigate = useNavigate();

    return (
        <div>
            <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={async (values) => {
                        login();
                        navigate("/");
                    }}
            >
                {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="text" name="email" className="input" placeholder="Email"/>
                    { errors.email && touched.email &&
                        (
                        <ErrorMessage name="email" component='div'></ErrorMessage>
                        )
                    }
                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password" className="input" placeholder="Password"/>
                    { errors.password && touched.password &&
                        (
                        <ErrorMessage name="password" component='div'></ErrorMessage>
                        )
                    }
                    
                    <button type="submit">Submit</button>
                    {isSubmitting ? <p>Your form is submitting...</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};


Loginpage.propTypes = {
    login: PropTypes.func.isRequired
};


export default Loginpage;
