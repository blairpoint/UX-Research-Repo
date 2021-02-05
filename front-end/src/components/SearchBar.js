import React from 'react';
import { Button, Col, Dropdown, DropdownButton, Form, InputGroup, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

export class SearchBar extends React.Component {
    
    cat_text = 'Choose an option...'
    cat_one = 'Category 1'
    cat_two = 'Category 2'
    cat_three = 'Category 3'

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
                    <Col sm={8} md={7} className="align-self-end">
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
                    <Col sm={4} md={4}>
                        <Form.Group>
                            <Form.Label><small>Search for a category</small></Form.Label>
                            <Form.Control
                                as="select"
                                //variant="outline-secondary" //Can change the variant later - maddie
                                className="glob-input"
                                value={this.state.cat}
                                onChange={(e) => this.selectCat(e.target.value)}
                                >
                                <option disabled>{this.cat_text}</option>
                                <option>{this.cat_one}</option>
                                <option>{this.cat_two}</option>
                                <option>{this.cat_three}</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                    
                    
            </div>
        );
    }

}