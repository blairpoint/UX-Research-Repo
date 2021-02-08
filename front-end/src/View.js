import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { Accordion, Badge, Button, Col, Container, InputGroup, ListGroup, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import FormControl from 'react-bootstrap/FormControl';
import {SearchBar} from './components/SearchBar';
import { Link } from 'react-router-dom';

export class View extends React.Component {

    constructor(props) {
        super(props);
        this.state={data:'', search: false, countResults: 0};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onPressEnter = this.onPressEnter.bind(this);
        this.testArr = ["Chip Whistler", "Mandy Bragger", "Ziggy Stardust", "Test Testerson"];
    }

    onPressEnter(event) {
        if (event.charCode === 13) {
            if(event.target.value==='') {
                Axios.get('http://localhost:3001/get-all').then((res)=>{
                    this.setState({data: res.data});
                    this.setState({search: ''});
                    this.setState({countResults: 0});      
                });
            } else {
                Axios.get(`http://localhost:3001/search3/${event.target.value}`).then((res)=>{
                this.setState({data:res.data});
                this.setState({search: event.target.value});
                this.setState({countResults: this.countResults(res.data)});

                });
            }
        }
    }

    componentDidMount() {     
        Axios.get('http://localhost:3001/get-all').then((res)=>{
            this.setState({data: res.data});      
        });
    }

    formatResearchers(researcherArr) {
        var arr = Array.from(researcherArr);
        var extras = arr.length - 1
        var firstResearcher = arr[0];
        if (extras == 0) {
            return firstResearcher
        } else {
            return firstResearcher + " +" + extras;
        }
    }

    countResults(results) {
        return Array.from(results).length;
    }

    returnResultSize() {
        if (this.state.search != '') {
            return "Showing " + this.state.countResults + " results for " + this.state.search;
        } else {
            return "";
        }
    }

    parseDate(input) {
        if (isNaN(Date.parse(input))) {
          return input
        } else {
          var date = new Date(input);
          var options = { year: 'numeric', month: '2-digit', day: '2-digit'};
          return new Intl.DateTimeFormat('en-NZ', options).format(date);
        }
      }

    /* Commenting this out until we decide that we need this method
    delete(id) {
        Axios.post('http://localhost:3001/delete',{
            id:id
        }).then(()=>{
            const val = this.state.data.filter((val)=>{
                return val.ResearchID != id;
            });
            this.setState({data:val});
        });
    }*/

    render() {
        return(
            <Container>
                <SearchBar functionCallFromParent={this.onPressEnter.bind(this)} valueFromParent={this.value}/>
                <div className="results"><strong>{this.returnResultSize()}</strong></div>
                <CardColumns>
                    {Array.from(this.state.data).map((val)=>{         
                        return(
                            <Card bg="light">
                                <Card.Header className="border-bottom-0">
                                        <Row>
                                            <Col sm={8} md={8} className="text-left"><small className="text-left">#{val.ResearchID}</small></Col>
                                            <Col sm={8} md={4} className="text-right"><Link to={`/Viewcard/${val._id}`}><small>Take a look</small></Link></Col>
                                        </Row>
                                        <Row>
                                            {/* Project Name - Company name as per wireframe */}
                                            <Col><small className="font-weight-bold d-inline-block text-truncate card-project">{val.ProjectName} - {val.Company}</small></Col>
                                        </Row>                  
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text className="problem-statement"><small>{val.Problem_Statement}</small></Card.Text>
                                </Card.Body>
                                <Card.Footer className="border-top-0">
                                    <Row>
                                        <Col className="text-left">
                                            <small><span className="font-weight-bold">Created:</span> {this.parseDate(val.Date)}</small> {/* Pass dates through the `parseDate` method */}
                                        </Col>
                                        <Col className="text-right">
                                            <small><span className="font-weight-bold">Status:</span> Completed</small> {/* Need to create a method to check if a project is complete / has an end date*/}                                  
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-left">
                                            {/* Created By */}
                                            <small>{this.testArr[3]}</small> {/* used last name in the test array for this field */}
                                        </Col>
                                        <Col className="text-right">
                                            {/* end date */}
                                            <small>{this.parseDate(val.Date)}</small> {/* Pass dates through the `parseDate` method */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-left">
                                            <small><span className="font-weight-bold">Contributors:</span></small>
                                        </Col>
                                        <Col className="text-right">
                                            <small><span className="font-weight-bold">Location:</span> {val.Country}</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-left">
                                            {/* contributors / researchers */}
                                            <small>{this.formatResearchers(this.testArr)}</small> {/* Replace testArr with Array of researchers */}
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        )
                    })}
                </CardColumns>
            </Container>
        )
    }
}