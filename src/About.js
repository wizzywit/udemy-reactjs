import React from 'react'
import { Jumbotron, Container, ListGroup, Row, Col } from 'react-bootstrap'

export default function About() {
    return (
        <div>
            <Jumbotron className="Jumbo-about d-flex align-items-center min-vh-100" fluid>
                <Container className="text-center">
                    <h1>Workout Generator App</h1>
                    <Row>
                        <Col md ={{offset: 4, span: 4}} lg ={{offset: 4, span: 4}} xl ={{offset: 4, span: 4}}>
                            <ListGroup >
                                <ListGroup.Item variant="warning" >Love fitness</ListGroup.Item>
                                <ListGroup.Item variant="warning">Love workouts</ListGroup.Item>
                                <ListGroup.Item variant="warning">Love getting stronger</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}