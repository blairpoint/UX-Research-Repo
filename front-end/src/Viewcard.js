import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Breadcrumb, FormLabel } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import './Viewcard.css';
let oid = 0;

function parseDate(input) {
    if (isNaN(Date.parse(input))) {
      return input
    } else {
      var date = new Date(input);
      var options = { year: 'numeric', month: '2-digit', day: '2-digit'};
      return new Intl.DateTimeFormat('en-AU', options).format(date);
    };
  };

export class Viewcard extends React.Component {
    constructor(props) {
        super(props);
        this.state={data:''};
        this.componentDidMount = this.componentDidMount.bind(this);
        var oidArray = window.location.pathname.split('/');
        oid = oidArray[2];
        //console.log(oid);
}

    componentDidMount() {     
        Axios.get(`http://localhost:3001/get-record/${oid}`).then((res)=>{

//        Axios.get('http://localhost:3001/get-record',{id:this.props.match.params.id}).then((res)=>{
            this.setState({data: res.data});
        });
    }

    render() {
        const e = this.state.data;

        return(
             
        <div className="container align-left">
        <div className="container">
            <Row className="my-3 mx-3" >
                <h4>Project Name: {e.Project_Name}</h4>
            </Row>
            <Row>
                <Breadcrumb className="mx-4">
                    {/* Link not routing yet  */}
                <Breadcrumb.Item href="/..">UX Research Repository</Breadcrumb.Item>
                <Breadcrumb.Item active>{e.Project_Name}</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
    
        <div className="jumbotron">
                    <Row className="justify-content-left">
                        <Col sm={3}><h6 className="font-weight-bold">Project Name</h6></Col>
                        <Col sm={4} className="align-self-center"><small className="font-weight-bold">Start Date:{parseDate(e.Start_Date)}</small></Col>
                        <Col sm={4} className="align-self-center"><small className="font-weight-bold">Status:</small></Col>
                    </Row>     

                    <Row className="justify-content-left">
                        <Col sm={3}><h6>Research ID: {e.Research_ID}</h6></Col>
                        <Col sm={4} className="align-self-center"><small className="font-weight-bold">Location:{e.Location}</small></Col>
                        <Col sm={4} className="align-self-center"><small className="font-weight-bold">Date completed:{parseDate(e.End_Date)}</small></Col>
                    </Row>        

                    <Row className="justify-content-right">
                        <Col sm={3}></Col>
                        <Col sm={4} className="align-self-center"><small className="font-weight-bold">Industry:{e.Industry}</small></Col>
                        <Col sm={4} className="align-self-center"><small className="font-weight-bold">Company:{e.Company}</small></Col>
                    </Row>      
        </div>
        </div>

            <div className="mx-4">
            <Row className="mx-3">
                        <Col sm={3} className="align-self-center"><small className="font-weight-bold">Created by:{e.Creator}</small></Col>
                        <Col sm={7} className="align-self-center"><small className="font-weight-bold">Role:[need to work out how to get researchers]</small></Col>
            </Row>   
            </div>   
            
            
            <div className="jumbotron mx-4">
                <Row className="text-left"><Icon.People /><br/><small> {e.Sample_Size} interviewees</small></Row>
            </div>

        <div className="mx-4 text-boxes">
        <Row>
                <Col>
                   
                        <FormLabel>Problem Statement</FormLabel>
                        <p className="p-wrap">
                        {e.Problem_Statement}
                        </p> 
                 
                </Col>
                <Col>
                   
                        <FormLabel>UX Methods</FormLabel>
                        <p>
                        {e.Methods}
                        </p> 
                 
                </Col>
        </Row>

        <Row>
            <Col>
                   
                   <FormLabel>Key Insights</FormLabel>
                   <p className="p-wrap">
                   {e.Key_Insights}
                </p> 

            
           </Col>
           <Col>
                   
                   <FormLabel>Findings</FormLabel>
                   <p className="p-wrap">
                   {e.Findings}
                   </p> 
            
           </Col>
        </Row>

        <Row>
            <Col sm={6}>
                   
                   <FormLabel>Links</FormLabel>
                   <p id="links">
                   {e.Research_Output}
                  </p>
            
           </Col>
        </Row>
        </div>

      
            </div>);
            
    }
}