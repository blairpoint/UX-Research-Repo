import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { Badge, Button, Col, Container, InputGroup, ListGroup, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import FormControl from 'react-bootstrap/FormControl';
import {SearchBar} from './components/SearchBar';
import { Link } from 'react-router-dom';

var EyeBadge = () => {
    return (
        <span className="eye-badge"><h2><Badge className="badge-secondary"><Icon.Eye className="view-icon" /></Badge></h2></span>
    );
}

export class View extends React.Component {

    constructor(props) {
        super(props);
        this.test_researchers = ["Alice Fage", "Blair Robinson", "Juliano Serraro", "Maddie Eckrich"];
        this.test_researchers2 = ["Alice Fage"];
        this.test_researchers3 = ["Alice Fage", "Juliano Serraro"];
        this.state={data:'', search: false, countResults: 0};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onPressEnter = this.onPressEnter.bind(this);
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
                                <Card.Header>
                                        <Row>
                                            <Col sm={6} className="align-self-center"><small className="font-weight-bold">Start Date: {val.Date}<br />Research ID: {val.ResearchID}</small></Col>
                                            <Col sm={6}><Link to={`/Viewcard/${val._id}`}><EyeBadge /></Link>{ /* Wrap with a Link to for the view single card unless not viewable*/}</Col>
                                        </Row>                  
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title as="h6">{val.ProjectName}</Card.Title>
                                    <Card.Text className="problem-statement"><small>Problem Statement:<br />{val.Problem_Statement}</small></Card.Text>
                                    <Row>
                                        <Col className="text-center"><Icon.PieChart /><br/><small>0-5</small></Col>
                                        <Col className="text-center"><Icon.People /><br/><small>{this.ResearcherID}</small></Col>
                                        <Col className="text-center"><Icon.Unlock /><br/><small>Open</small></Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer><small>Location: {val.Country}</small></Card.Footer>
                            </Card>
                        )
                    })}
                </CardColumns>
            </Container>
        )
    }
}