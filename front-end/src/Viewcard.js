import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Breadcrumb, Image } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import './Viewcard.css';


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
        return(
             
        <div className="container align-left">
        <div className="container">
            <Row className="my-3" >
                <h4>Project name</h4>
            </Row>
            <Row>
                <Breadcrumb>
                <Breadcrumb.Item href="#">UX Research Repository</Breadcrumb.Item>
                <Breadcrumb.Item active href="[TBC]">Project Name</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
    
        <div className="jumbotron">
                    <Row className="justify-content-left mx-5">
                        <Col sm={6}><h6 className="font-weight-bold">Project Name</h6></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Start Date: <br /></small></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Status: <br /></small></Col>
                    </Row>     

                    <Row className="justify-content-left mx-5">
                        <Col sm={6}><h6>#12345678</h6></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Location: <br /></small></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Date completed: <br /></small></Col>
                    </Row>        

                    <Row className="justify-content-right mx-5">
                        <Col sm={6}></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Industry: <br /></small></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Company: <br /></small></Col>
                    </Row>      
        </div>
        </div>

        
            <Row>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Created by: <br /></small></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Role: <br /></small></Col>

            </Row>      
            
            <div className="jumbotron">
                <Row className="text-left"><Icon.People /><br/><small>12 interviewees</small></Row>
            </div>

            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Problem Statement</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>UX Methods</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Key Insights</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Findings</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
            <Col sm={6}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Links</Form.Label>
                        <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
      
            </div>);
            
    }
}