import React from 'react'
import {Jumbotron, Container, Row, Col, Card, ListGroup} from 'react-bootstrap'

export default function Products() {
    return (
        <Jumbotron className="about-us d-flex align-items-center min-vh-100  HeaderClass">
            <Container className="text-center" fluid>
            <h1 style={{ fontSize: "6.2em" }}>Products</h1>
                <Row>
                    <Col md xs lg="12">
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md xs lg="12">
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md xs lg="12">
                        <Card >
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}