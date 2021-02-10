import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Breadcrumb, FormLabel, ListGroupItem, ListGroup, Jumbotron } from 'react-bootstrap'
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

  function checkEndDate(input) {
    if (isNaN(Date.parse(input)) || Date.parse(input) == null) {
        return "In Progress"
    } else if(Date.parse(input) > Date.now()) {
        return "In Progress"
    } else {
        return "Completed"
    }
}

const Researchers = (props) => {
    const rows = Array.from(props.researchers).map((researcher, index) => {
        return(
            <Row className="mx-3 people">
                <Col sm={4} className="align-self-center"><small>{researcher.fName + " " + researcher.lName}</small></Col>
                <Col sm={7} className="align-self-center"><small>{researcher.Position}</small></Col>
            </Row>
        );
    });
    return rows;
}

export class Viewcard extends React.Component {
    constructor(props) {
        super(props);
        this.state={data:'', methods:[], links:[], researchers:[]};
        this.componentDidMount = this.componentDidMount.bind(this);
        var oidArray = window.location.pathname.split('/');
        oid = oidArray[2];
}

    componentDidMount() {     
        Axios.get(`http://localhost:3001/get-record/${oid}`).then((res)=>{
            this.setState({data: res.data});
            this.setState({methods: res.data.Methods});
            this.setState({links: res.data.Research_Outputs});
        });
        Axios.get(`http://localhost:3001/get-record-researchers/${oid}`).then((res)=>{
            this.setState({researchers: res.data});
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
    
            <Jumbotron>
                    <Row className="justify-content-left">
                        <Col sm={4}><small className="font-weight-bold">{e.Project_Name}</small></Col>
                        <Col sm={4} className="align-self-center"><small><strong>Start Date:</strong> {parseDate(e.Start_Date)}</small></Col>
                        <Col sm={4} className="align-self-center"><small><strong>Status:</strong> {checkEndDate(e.End_Date)}</small></Col>
                    </Row>     

                    <Row className="justify-content-left">
                        <Col sm={4}><small>#{e.Research_ID}</small></Col>
                        <Col sm={4} className="align-self-center"><small><strong>Location:</strong> {e.Location}</small></Col>
                        <Col sm={4} className="align-self-center"><small><strong>Date completed:</strong> {parseDate(e.End_Date)}</small></Col>
                    </Row>        

                    <Row className="justify-content-right">
                        <Col sm={4}></Col>
                        <Col sm={4} className="align-self-center"><small><strong>Industry:</strong> {e.Industry}</small></Col>
                        <Col sm={4} className="align-self-center"><small><strong>Company:</strong> {e.Company}</small></Col>
                    </Row>      
            </Jumbotron>
            <Row className="mx-3 people">
                <Col sm={4} className="align-self-center"><small><strong>Created by:</strong></small></Col>
                <Col sm={7} className="align-self-center"><small className="font-weight-bold">Role:</small></Col>
            </Row>
            <Row className="mx-3 people">
                <Col sm={4} className="align-self-center"><small>{e.Creator}</small></Col>
            </Row>
            <Row className="mx-3 people">
                <Col sm={4} className="align-self-center"><small><strong>Contributors:</strong></small></Col>
            </Row>
            <Researchers researchers={this.state.researchers} />
            <Jumbotron className="mx-4 interviewees">
                <Row className="text-left"><div><large><Icon.People /></large> {e.Sample_Size} interviewees</div></Row>
            </Jumbotron>  
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
                        <p className="p-wrap"><ul>{this.state.methods.map((method) => {
                            return (<li>{method}</li>)
                        })}</ul></p>
                 
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
                   <p id="links" className="p-wrap">
                   <ul>{this.state.links.map((link) => {
                            return (<li><a href={link.URL}>{link.Title}</a></li>)
                        })}</ul>
                  </p>
            
           </Col>
        </Row>
        </div>

      
            </div>);
            
    }
}