import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Breadcrumb, FormLabel } from 'react-bootstrap'
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
            <Row className="my-3 mx-3" >
                <h4>Project name</h4>
            </Row>
            <Row>
                <Breadcrumb className="mx-4">
                <Breadcrumb.Item href="#">UX Research Repository</Breadcrumb.Item>
                <Breadcrumb.Item active href="[TBC]">Project Name</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
    
        <div className="jumbotron">
                    <Row className="justify-content-left">
                        <Col sm={6}><h6 className="font-weight-bold">Project Name</h6></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Start Date: <br /></small></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Status: <br /></small></Col>
                    </Row>     

                    <Row className="justify-content-left">
                        <Col sm={6}><h6>#12345678</h6></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Location: <br /></small></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Date completed: <br /></small></Col>
                    </Row>        

                    <Row className="justify-content-right">
                        <Col sm={6}></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Industry: <br /></small></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Company: <br /></small></Col>
                    </Row>      
        </div>
        </div>

        
            <Row className="mx-3">
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Created by: <br /></small></Col>
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Role: <br /></small></Col>

            </Row>      
            
            <div className="jumbotron mx-4">
                <Row className="text-left"><Icon.People /><br/><small>12 interviewees</small></Row>
            </div>

        <div className="mx-4">
        <Row>
                <Col>
                   
                        <FormLabel>Problem Statement</FormLabel>
                        <p>
                        </p> 
                 
                </Col>
                <Col>
                   
                        <FormLabel>UX Methods</FormLabel>
                        <p>
                        </p> 
                 
                </Col>
        </Row>

        <Row>
            <Col>
                   
                   <FormLabel>Key Insights</FormLabel>
                   <p>
                </p> 
            
           </Col>
           <Col>
                   
                   <FormLabel>Key Findings</FormLabel>
                   <p>
                   </p> 
            
           </Col>
        </Row>

        <Row>
            <Col sm={6}>
                   
                   <FormLabel>Links</FormLabel>
                   <p id="links">
                  </p>
            
           </Col>
        </Row>
        </div>

      
            </div>);
            
    }
}