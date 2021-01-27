import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from "../assets/ibmlogo.JPG";

export class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={data:''};
    }

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
                            <button onClick={()=>this.viewCreate()} className="btn btn-primary">+ADD</button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}