import React from 'react';
import Axios from 'axios';
import { Form, Card, FormGroup, FormControl, Row, Col, label, Switch, Container, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap'

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
            <div class="card-columns"></div>
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
                    {/* <Col sm={1}>
                        <label for="Startdate">Start Date</label>
                    </Col>
                    <Col sm={1} id="Date">
                    <FormControl readOnly type="text"/>
                    </Col>
                    <Col sm={1}>
                        <label for="ProjectName">Project Name</label>
                    </Col>
                    <Col sm={2} id="ProjectName">
                    <FormControl readOnly type="text"/>
                    </Col>
                    
                    
                     */}
                </Row>
                </FormGroup>
                </Card.Header>

                <Card.Body>
                    <Card.Title>Title</Card.Title>
                        <Card.Text>
                            <Form>
                                <FormGroup className="text-left">
                                
                                    <Row>
                                        <Col sm={2}>
                                        <label for="Problem">Problem Statement</label>
                                        </Col>
                                        <Col sm={4} id="Problem">
                                        <FormControl readOnly type="text" placeholder={e?e.Problem_Statement:''}/>
                                        </Col>
                                        <Col sm={2}>
                                        <label for="KeyInsights">Key Insights</label>
                                        </Col>
                                        <Col sm={4} id="KeyInsight">
                                        <FormControl readOnly type="text" placeholder={e?e.KeyInsight:''}/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup className="text-left">
                                    <Row>
                                        <Col sm={2}>
                                        <label for="Problem">Pain Points</label>
                                        </Col>
                                        <Col sm={4} id="Problem">
                                        <FormControl readOnly type="text" placeholder={e?e.KeyPainPoint:''}/>
                                        </Col>
                                        <Col sm={2}>
                                        <label for="Methods">Methods</label>
                                        </Col>
                                        <Col sm={4}>
                                        <FormControl readOnly type="text"/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup className="text-left">
                                    <Row>
                                        <Col sm={2}>
                                        <label for="Links">Links</label>
                                        </Col>
                                        <Col sm={10} id="URL_ID">
                                        <FormControl readOnly type="text" placeholder={e?e.URL_ID:''}/>
                                        </Col>  
                                    </Row>
                                </FormGroup>
                        
                            </Form>
                              
                </Card.Text> 
                    
            </Card.Body>
        </Card>
            {/* <button onClick={()=>this.addResearch()} className="btn btn-primary">Submit</button> */}
            </div>);
    }
}