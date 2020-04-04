import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Jumbotron className="Jumbo-home d-flex align-items-center min-vh-100" fluid>
                <Container className="text-center">
                    <h1>Workout Generator App</h1>
                    <div className="mb-2">
                        <Button variant="primary" size="lg" href="/about">
                            About
                        </Button>{' '}
                        <Button variant="success" size="lg" href="/generator">
                            Generator
                        </Button>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}