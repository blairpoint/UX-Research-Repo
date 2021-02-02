import React from 'react';
import Axios from 'axios';
import { Form, Badge, Card, FormGroup, FormControl, Row, Col, label, Switch, Container, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';


export class Viewcard extends React.Component {
    constructor(props) {
        super(props);
        this.state={        

        Date:'',                
        
                                    Checked: false, 
        ResearchID:'',          Country:'',
        ResearcherID:'',
        ProjectName:'',  

        Problem_Statement:'',
        Tags:'',
        KeyInsight:'',
        KeyPainPoint:'',
        SampleSize:'',          
        Methods:'',
        IndustryName:'',
        Company:'',
        URL_ID:'',

        // Time_in_days:'',
        // Status:'',
        // Privacy_Level:'',
        // Demographic:'',
        // Commentary:'',}
        };
    
    this.handleChange = this.handleChange.bind(this);

}
handleChange(checked) {
    this.setState({ checked });
  };
  handleSelect = (evtKey, evt) => {
    // Get the selectedIndex in the evtKey variable
}

getResearch() {
    Axios.get('http://localhost:3001/get-all').then((res)=>{
        this.setState({data: res.data});      
    });
}
    componentDidMount() {     
        Axios.get('http://localhost:3001/get-all').then((res)=>{
            this.setState({data: res.data});      
        });
    }
   
    render() {
        return(<div className="container">
            <Card>
                <Card.Header>
                    
                <FormGroup className="text-left">
                <Row>
                    <Col sm={3}>
                        <label for="ResearchID">Research ID</label>
                        <FormControl readOnly type="text"/>
                    </Col>
                    <Col sm={2}>
                        <label for="SampleSize">Sample Size</label>
                        <FormControl readOnly type="text"/>
                    </Col>
                    <Col sm={3}>
                        <label for="Country">Location</label>
                        <FormControl readOnly type="text"/>
                    </Col>
                    <Col sm={3}>
                        <label for="ResearcherID">Team Members</label>
                        <FormControl readOnly type="text"/>
                        </Col>
                </Row>
                </FormGroup>
                </Card.Header>
                <br />

<div class="row" >
    <div class="column col-sm-6">
  <Card bg="light" style={{ width: 'auto' }}>
    <Card.Body>
        <Row>
                <Col sm={4}>
                    <label for="Problem_Statement">Problem Statement</label>
                </Col>
        </Row>
        <Row>
                <Col sm={10} id="Problem_Statement">
                    <FormControl readOnly type="text"/>
                </Col>
        </Row>
    </Card.Body>
  </Card>
  </div>
  <br />

  <div class="column col-sm-6">

  <Card bg="light" style={{ width: 'auto' }}>
    <Card.Body>
      
      <Row>
            <Col sm={4}>
            <label for="KeyInsight">Key Insights</label>
            </Col>
     </Row>
     <Row>
            <Col sm={10} id="KeyInsight">
                <FormControl readOnly type="text"/>
            </Col>
    </Row>
    </Card.Body>
  </Card>
  </div>
  </div>
  <br />

  <div class="row" >
    <div class="column col-sm-6">
  <Card bg="light" style={{ width: 'auto' }}>
    <Card.Body>
      
      <Row>
            <Col sm={4}>
            <label for="KeyPaintPoint">Pain Points</label>
            </Col>
     </Row>
     <Row>
            <Col sm={10} id="KeyPainPoint">
                <FormControl readOnly type="text"/>
            </Col>
    </Row>
    </Card.Body>
  </Card>
  </div>
  <br />

  <div class="column col-sm-6">
  <Card bg="light" style={{ width: 'auto' }}>
    <Card.Body>
      
      <Row>
            <Col sm={4}>
            <label for="Methods">Methods</label>
            </Col>
     </Row>
     <Row>
            <Col sm={10} id="Methods">
                <FormControl readOnly type="text"/>
            </Col>
    </Row>
    </Card.Body>
  </Card>
  </div>    
  </div>
  <br />

  <Card bg="light" style={{ width: 'fill' }}>
    <Card.Body>
      
      <Row>
            <Col sm={4}>
            <label for="URL_ID">Links</label>
            </Col>
     </Row>
     <Row>
            <Col sm={10} id="URL_ID">
                <FormControl readOnly type="text"/>
            </Col>
    </Row>
    </Card.Body>
  </Card>
  <br />
             
        </Card>
            {/* <button onClick={()=>this.addResearch()} className="btn btn-primary">Submit</button> */}
            </div>);
            
    }
}