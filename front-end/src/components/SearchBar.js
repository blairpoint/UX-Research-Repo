import React from 'react';
import { Button, Col, Dropdown, DropdownButton, Form, InputGroup, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state={search:'', cat:this.cat_text};       
    }

    selectCat(selection) {
        this.setState({cat: selection}); //will move this onto the actual lines at a later date
    };

    getInput = (e) => {
        this.props.functionCallFromParent(e);
    }

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