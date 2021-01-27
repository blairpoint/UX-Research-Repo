import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from "../assets/ibmlogo.JPG";

export class NavigationBar extends React.Component {
    viewCreate() {
        this.props.history.push('create');
    }

    render() {
        return(
            <Navbar expand="lg">
                <Navbar.Brand href="/"><img src={logo} />Research Respository</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/create"><button className="btn btn-primary">+ADD</button></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}