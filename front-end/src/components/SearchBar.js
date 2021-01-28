import React from 'react';
import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export class SearchBar extends React.Component {
    
    cat_text = 'search for a category'
    cat_one = 'Category 1'
    cat_two = 'Category 2'
    cat_three = 'Category 3'

    constructor(props) {
        super(props);
        this.state={search:'', cat:this.cat_text};
        
    }

    selectCat(selection) {
        this.setState({cat: selection});
    };

    render() {
        return(
            <div className="searchbar">
                <InputGroup className="input-group-sm mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" placeholder="Search" />
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={this.state.cat}
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item><div onClick={(e) => this.selectCat(e.target.textContent)}>{this.cat_one}</div></Dropdown.Item>
                        <Dropdown.Item><div onClick={(e) => this.selectCat(e.target.textContent)}>{this.cat_two}</div></Dropdown.Item>
                        <Dropdown.Item><div onClick={(e) => this.selectCat(e.target.textContent)}>{this.cat_three}</div></Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
                
                {/*<Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>*/}
            </div>
        );
    }

}