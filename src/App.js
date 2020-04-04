import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Generator from './Generator'
import About from './About'
import Home from './Home'
import {Navbar, Nav } from 'react-bootstrap'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      activeKey: window.location.pathname
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="/">WORKOUT GENERATOR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" activeKey={this.state.activeKey}>
                <Nav.Link href="/about" eventKey="/about">About</Nav.Link>
                <Nav.Link href="/generator" eventKey="/generator">Generator</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route exact path="/" render={()=>(<Home />)} />
          <Route exact path="/about" render={()=>(<About />)} />
          <Route exact path="/generator" render={()=>(<Generator />)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
