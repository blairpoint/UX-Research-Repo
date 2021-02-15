import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import '../stylesheets/SearchBar.css';

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state={search:''};       
    }

    /**
     * Calls the function call from the parent class (View). This sends the searched keyword(s) to the View screen.
     * @param {Event} e 
     */
    getInput = (e) => {
        this.props.functionCallFromParent(e);
    }

    /**
     * Renders the SerachBar component. Sends the user input to the View class.
     */
    render() {
        return(
            <div className="searchbar">
                <Link to="/create"><Button className="btn btn-primary">Add Research +</Button></Link>
                <Row>
                    <Col sm={12} md={12} className="align-self-end">
                        <InputGroup className="input-group mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" className="glob-input"><Icon.Search /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                className="glob-input"
                                placeholder="Search"
                                onKeyPress={this.getInput.bind(this)}
                                type="text"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        );
    }

}