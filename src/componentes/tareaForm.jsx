import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { LEVELS } from '../models/levels.enum';
import { Tarea } from '../models/tarea.class';

import '../styles/form/formStyles.css';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

const TareaForm = ({ add }) => {

  const initialValues = {
    name: '',
    description: '',
    completed: false,
    level: LEVELS.NORMAL
  }

  function addTarea(values){
    const nuevaTarea = new Tarea(
        values.name,
        values.description,
        values.level
    );

    add(nuevaTarea);
}

    return (
      <div>
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1000));
        addTarea(values);
      }}
    >
      {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" type="text" name="name" class="input" placeholder="Nombre de la tarea"/>
          { errors.name && touched.name &&
            (
              <ErrorMessage name="name" component='div'></ErrorMessage>
            )
          }
          <label htmlFor="description">Description</label>
          <Field id="description" type="text" name="description" class="input" placeholder="Descripcion de tarea"/>
          { errors.description && touched.description &&
            (
              <ErrorMessage name="description" component='div'></ErrorMessage>
            )
          }
          <label htmlFor="level">Description</label>
          <Field as="select" name="level" class="input">
            <option value={LEVELS.NORMAL}>Normal</option>
            <option value={LEVELS.URGENTE}>Urgent</option>
            <option value={LEVELS.BLOCKING}>Blocking</option>
          </Field>
          <button type="submit">Submit</button>
          {isSubmitting ? <p>Your form is submitting...</p> : null}
        </Form>
      )}
    </Formik>
      </div>
    )
    
};

TareaForm.propTypes = {
  add: PropTypes.func.isRequired
};

export default TareaForm;
