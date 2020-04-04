import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {Form, Button, Jumbotron, Container, Row, Col, Alert} from 'react-bootstrap'

const schema = Yup.object({
    email: Yup.string().email("Please enter valid email")
})

export default class Subscribe extends React.Component {

    constructor() {
        super()
        this.state = {
            subscribed: false
        }
    }

    handleSubmit() {
        this.setState({
            subscribed: true
        })
    }

    render() {
        return(
            <Jumbotron className="about-us d-flex align-items-center min-vh-100  HeaderClass">
                <Container className="text-center">
                        {
                            this.state.subscribed?
                            <Alert variant="success">Succefully subscribed to our mailing patform!</Alert>: 
                            <Container className="text-center">
                            <h1 style={{ fontSize: "4em" }}>Subscribe</h1>
                        <Row>
                            <Col md={{span: 4, offset: 4}} xl={{span: 4, offset: 4}} lg={{span: 4, offset: 4}}>
                                    <Formik
                                validationSchema={schema}
                                onSubmit={this.handleSubmit.bind(this)}
                                initialValues={{
                                    email: ' '
                                }}>
                                    {
                                        ({
                                            handleSubmit,
                                            handleChange,
                                            values,
                                            errors,
                                        }) => (
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <Form.Group controlId="validationFormikEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                    type="email"
                                                    placeholder="email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.email}/>
                                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                                </Form.Group>
                                                <Button type="submit">Subscribe</Button>
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </Col>
                        </Row>
                        </Container>
                        }
                </Container>
            </Jumbotron>
        )
    }
}