import React from 'react'
import {Jumbotron, Button, Container} from 'react-bootstrap'

export default function LandingJumbotron() {
    return (
        <Jumbotron className="Jumbotron-Landing d-flex align-items-center min-vh-100  HeaderClass">
            <Container className="text-center">
                <i class="fa fa-pied-piper-pp" aria-hidden="true" style={{fontSize: "6.2em"}}></i> 
                <h1 style={{fontSize: "6.2em"}}>Instant AI</h1>
                <br/>
                <h4>
                    We are an automated AI platform for humans
                </h4>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Container>
        </Jumbotron>
    )
}