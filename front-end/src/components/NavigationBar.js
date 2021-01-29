import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import {SearchBar} from "./SearchBar";
import logo from "../assets/ibmlogo.JPG";

export class NavigationBar extends React.Component {
    viewCreate() {
        this.props.history.push('create');
    }

    render() {
        return(
            <Navbar expand="lg">
                {/*<Navbar.Brand href="/"><img src={logo} />Research Repository</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Item>
                            <SearchBar />
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/create"><button className="btn btn-primary btn-sm">+ Add Research File</button></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}