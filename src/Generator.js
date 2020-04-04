import React from 'react'
import { Jumbotron, Container, Form, Button, Row, Col, Card } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import exercises from './execises'

const schema = Yup.object({
    time: Yup.number()
})

export default class Generator extends React.Component {

    constructor() {
        super()
        this.state = {
            formSubmitted: false,
            currentWorkout: {}
        }
    }

    handleSubmit(values) {

        //this filters array of type abs
        const absArr = exercises.filter(a => a.type === "abs");

        const chestArr = exercises.filter(a => a.type === "chest");
        const cardioArr = exercises.filter(a => a.type === "cardio");
        const legsArr = exercises.filter(a => a.type === "legs");

        //this selects a random excersize from an array
        const absWorkout = absArr[Math.floor(Math.random() * absArr.length)]
        const chestWorkout = chestArr[Math.floor(Math.random() * chestArr.length)]
        const cardioWorkout = cardioArr[Math.floor(Math.random() * cardioArr.length)]
        const legsWorkout = legsArr[Math.floor(Math.random() * legsArr.length)]

        const rounds = values.time / 5

        const currentWorkout = {
            "rounds": rounds,
            "absName": absWorkout["name"],
            "chestName": chestWorkout["name"],
            "cardioName": cardioWorkout["name"],
            "legsName": legsWorkout["name"],
            "absReps": absWorkout["reps"],
            "chestReps": chestWorkout["reps"],
            "cardioReps": cardioWorkout["reps"],
            "legsReps": legsWorkout["reps"],
        }

        this.setState({
            formSubmitted: true,
            currentWorkout: currentWorkout
        })

    }

    render() {
        return (
            <div>
                <Jumbotron className="Jumbo-generator d-flex align-items-center min-vh-100" fluid>
                    <Container className="text-center">
                        <h1>Workout Generator App</h1>
                        <Formik
                            validationSchema={schema}
                            onSubmit={this.handleSubmit.bind(this)}
                            initialValues={{
                                time: 15
                            }}
                        >{({
                            handleSubmit,
                            handleChange,
                            values,
                        }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Group controlId="exampleForm.ControlSelect2">
                                        <Form.Label>How long would you like to workout</Form.Label>
                                        <Row>
                                            <Col md={{ offset: 4, span: 4 }} lg={{ offset: 4, span: 4 }} xl={{ offset: 4, span: 4 }}>
                                                <Form.Control
                                                    as="select"
                                                    type="number"
                                                    name="time"
                                                    value={values.time}
                                                    onChange={handleChange}
                                                >
                                                    <option>15</option>
                                                    <option>20</option>
                                                    <option>25</option>
                                                    <option>30</option>
                                                    <option>35</option>
                                                    <option>40</option>
                                                    <option>45</option>
                                                    <option>50</option>
                                                    <option>55</option>
                                                    <option>60</option>
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Button type="submit">Generate Workout</Button>
                                </Form>
                            )}
                        </Formik>
                        {
                            this.state.formSubmitted ?
                                <div>
                                    <br />
                                    <h3>Rounds: {this.state.currentWorkout.rounds}</h3>
                                    <Row>
                                        <Col lg md xl = "4">
                                            <Card>
                                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1563053764-85dbf278c408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                                                <Card.Body>
                                                    <Card.Title>{this.state.currentWorkout.absName}</Card.Title>
                                                    <Card.Text>
                                                      Perform {this.state.currentWorkout.absReps}  reps of {this.state.currentWorkout.absName}
                                                    </Card.Text>
                                                    <Button variant="primary" disabled>Reps Number: {this.state.currentWorkout.absReps}</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg md xl = "4">
                                            <Card>
                                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1579047172169-515291e29467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                                                <Card.Body>
                                                    <Card.Title>{this.state.currentWorkout.chestName}</Card.Title>
                                                    <Card.Text>
                                                      Perform {this.state.currentWorkout.chestReps}  reps of {this.state.currentWorkout.chestName}
                                                    </Card.Text>
                                                    <Button variant="primary" disabled>Reps Number: {this.state.currentWorkout.chestReps}</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg md xl = "4">
                                            <Card>
                                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1519505645104-c7be90e0d630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" />
                                                <Card.Body>
                                                    <Card.Title>{this.state.currentWorkout.cardioName}</Card.Title>
                                                    <Card.Text>
                                                      Perform {this.state.currentWorkout.cardioReps}  reps of {this.state.currentWorkout.cardioName}
                                                    </Card.Text>
                                                    <Button variant="primary" disabled>Reps Number: {this.state.currentWorkout.cardioReps}</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                        <Col lg md xl = "4">
                                        </Col>
                                        <Col lg md xl = "4">
                                            <Card>
                                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1466761366829-84fd59a22e0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt="" />
                                                <Card.Body>
                                                    <Card.Title>{this.state.currentWorkout.legsName}</Card.Title>
                                                    <Card.Text>
                                                      Perform {this.state.currentWorkout.legsReps}  reps of {this.state.currentWorkout.legsName}
                                                    </Card.Text>
                                                    <Button variant="primary" disabled>Reps Number: {this.state.currentWorkout.legsReps}</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        
                                    </Row>
                                </div> : null
                        }
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}