import React, { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const registrationSchema = yup.object().shape({
  name: yup.string().required('Please insert your name'),
  email: yup
    .string()
    .email('Please insert a valid mail address')
    .required('Email is required '),
})

export default function RegistrationForm({ updateRegistrationState }) {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={registrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)

        axios
          .put('http://localhost:8085/customers/create', {
            customerName: values.name,
            customerEmail: values.email,
          })
          .then(() => updateRegistrationState(true))
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <label>
            Name<Field type="text" name="name" placeholder="Name"></Field>
          </label>
          <ErrorMessage name="name" component="div"></ErrorMessage>
          <label>
            Email
            <Field
              name="email"
              type="text"
              placeholder="Email"
              data-cy="register-email"
            ></Field>
          </label>
          <ErrorMessage name="email" component="div"></ErrorMessage>

          <button type="submit" disabled={isSubmitting} className="button p-10">
            Register
          </button>
        </Form>
      )}
    </Formik>
  )
  /*
  function submitHandler(event) {
    event.preventDefault()
    axios
      .put('http://localhost:8085/customers/create', {
        customerName: name,
        customerEmail: email,
      })
      .then(() => updateRegistrationState(true))
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }*/
}
