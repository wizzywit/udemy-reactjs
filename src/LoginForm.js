import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is not valid')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be 8 character or more')
        .required('Password is required')
})

export default class LoginForm  extends React.Component {
    render() {
        return(
            <div>
                <h1>Login</h1>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values) =>
                        this.props.handleFormUpdate(values)
                    }>
                    <Form>
                        <label>Email: <Field type="email" name="email"></Field></label>
                        <ErrorMessage name="email" component="div"></ErrorMessage>
                        <label>Password: <Field type="password" name="password"></Field></label>
                        <ErrorMessage name="password" component="div"></ErrorMessage>
                        <button type="submit">Submit</button>
                    </Form>
                    </Formik>
            </div>
        )
    }
}