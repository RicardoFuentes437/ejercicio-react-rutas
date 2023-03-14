import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .min(1, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
    email: Yup.string()
    .min(4, 'Too Short!')
    .required('Required'),
    password: Yup.string()
    .required('Required!')
    .min(8, 'Too short!')
});

const Registerpage = ({ register}) => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    return (
        <div>
            <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={async (values) => {
                        register(values);
                    }}
            >
                {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                    <label htmlFor="name">Name</label>
                    <Field id="name" type="text" name="name" className="input" placeholder="Nombre"/>
                    { errors.name && touched.name &&
                        (
                        <ErrorMessage name="name" component='div'></ErrorMessage>
                        )
                    }
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


Registerpage.propTypes = {
    register: PropTypes.func.isRequired
};


export default Registerpage;
