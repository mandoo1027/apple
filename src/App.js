/* eslint-disable */
import logo from './logo.svg';
import { Navbar, Container , NavDropdown , Nav , Jumbotron ,Button} from 'react-bootstrap'
import {useState} from 'react'
import './App.css';
import list from './data'
import { Link, Route, Switch } from 'react-router-dom'

import Main from './page/Main'
import Detail from './page/Detail'

function App() {

  let [ shoes, changeShoes] = useState(list)

  return (
    <div className="App"> 
    
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NikeDDalng</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron className="background">
        <h1>8월의 나이키</h1>
        <p>나이키 응모 리스튼
        </p>
        
      </Jumbotron>

      <Switch>
        <Route exact  path="/">
          <Main shoes={shoes}/>
        </Route>

        <Route exact path="/detail/:id">
          <Detail  shoes={shoes}/>
        </Route>
 
      </Switch>
    </div>
  );
}
 

export default App;
