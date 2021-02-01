import React from 'react';
import { Button, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

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
        this.setState({cat: selection}); //will move this onto the actual lines at a later date
    };

    getInput = (e) => {
        //e.preventDefault();
        this.props.functionCallFromParent(e);
    }

    render() {
        return(
            <div className="searchbar">
                <Link to="/create"><Button className="btn btn-primary btn-sm">+ Add Research File</Button></Link>
                <InputGroup className="input-group-sm mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><Icon.Search /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        className="searchbox"
                        placeholder="Search"
                        onKeyPress={this.getInput.bind(this)}
                        type="text"
                    />
                    <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary" //Can change the variant later - maddie
                        title={this.state.cat}
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item><div onClick={(e) => this.selectCat(e.target.textContent)}>{this.cat_one}</div></Dropdown.Item>
                        <Dropdown.Item><div onClick={(e) => this.selectCat(e.target.textContent)}>{this.cat_two}</div></Dropdown.Item>
                        <Dropdown.Item><div onClick={(e) => this.selectCat(e.target.textContent)}>{this.cat_three}</div></Dropdown.Item>
                        <Dropdown.Divider />
                        {/*the below is not great will resolve later - Maddie*/}
                        <Dropdown.Item><div onClick={(e) => this.selectCat(e.target.textContent)}>{this.cat_text}</div></Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </div>
        );
    }

}