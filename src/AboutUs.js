import React from 'react'
import { Container, Jumbotron, Accordion, Card } from 'react-bootstrap'

const aboutUS = [
    { "id": "1", "header": "Mission", "body": "Developing a community of continous research and development where our people's innovation and creativity is harnessed" },
    { "id": "2", "header": "Vision", "body": "To become the best tech company in the world" }
]

export default function AboutUs() {
    return (
        <Jumbotron className="about-us d-flex align-items-center min-vh-100  HeaderClass" >
            <Container className="text-center">
                <h1 style={{ fontSize: "6.2em" }}>About Us</h1>
                <Accordion defaultActiveKey="0">
                    {
                        aboutUS.map(items =>
                            <Card key={items.id}>
                                <Accordion.Toggle as={Card.Header} eventKey={items.id}>{items.header}</Accordion.Toggle>
                                <Accordion.Collapse eventKey={items.id}>
                                    <Card.Body>{items.body}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    }
                </Accordion>
            </Container>
        </Jumbotron>

    )
}