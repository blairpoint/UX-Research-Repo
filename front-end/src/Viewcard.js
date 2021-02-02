import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Badge, Card, FormGroup, FormControl, Row, Col, label, Switch, Container, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';


export class Viewcard extends React.Component {
    constructor(props) {
        super(props);
        this.state={data:''};
        this.componentDidMount = this.componentDidMount.bind(this);
}

    componentDidMount() {     
        Axios.post('http://localhost:3001/get-record',{id:this.props.match.params.id}).then((res)=>{
            this.setState({data: res.data});      
        });
    }
   
    render() {
        const e = this.state.data;
        return(<div className="container">
            <Link to="/"><Button className="btn btn-secondary return-to-search"><Icon.ArrowLeft /> Search</Button></Link>
            <Card>
                <Card.Header>
                    
                <FormGroup className="text-left">
                <Row>
                    <Col sm={3}>
                        <label for="ResearchID">Research ID</label>
                        <FormControl readOnly type="text" placeholder={e?e.ResearchID:''}/>
                    </Col>
                    <Col sm={2}>
                        <label for="SampleSize">Sample Size</label>
                        <FormControl readOnly type="text" placeholder={e?e.SampleSize:''}/>
                    </Col>
                    <Col sm={3}>
                        <label for="Location">Location</label>
                        <FormControl readOnly type="text" placeholder={e?e.Country:''}/>
                    </Col>
                    <Col sm={3}>
                        <label for="Name">Team Members</label>
                        <FormControl readOnly type="text" placeholder={e?e.ResearcherID:''}/>

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
                    <FormControl readOnly type="text" placeholder={e?e.Problem_Statement:''} />
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
                <FormControl readOnly type="text" placeholder={e?e.KeyInsight:''}/>
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
                <FormControl readOnly type="text" placeholder={e?e.KeyPainPoint:''}/>
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
            <FormControl readOnly type="text" placeholder={e?e.Methods:''}/>
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
                <FormControl readOnly type="text" placeholder={e?e.URL_ID:''}/>
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