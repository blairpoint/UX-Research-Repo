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
        this.state={data:''};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onPressEnter = this.onPressEnter.bind(this);
    }

    onPressEnter(event) {
        if (event.charCode === 13) {
            if(event.target.value==='') {
                Axios.get('http://localhost:3001/get-all').then((res)=>{
                    this.setState({data: res.data});      
                });
            } else {
                Axios.get(`http://localhost:3001/search3/${event.target.value}`).then((res)=>{
                this.setState({data:res.data});
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
                <SearchBar functionCallFromParent={this.onPressEnter.bind(this)} />
                <CardColumns>
                    {Array.from(this.state.data).map((val)=>{         
                        return(
                            <Card bg="light">
                                <Card.Header>
                                        <Row>
                                            <Col sm={6} className="align-self-center"><small className="font-weight-bold">Start Date: {val.Date}<br />Research ID: {val.ResearchID}</small></Col>
                                            <Col sm={6}><Link to="/Viewcard?ObjectID=601201340b1f2b3b04992833"><EyeBadge /></Link>{ /* Wrap with a Link to for the view single card unless not viewable*/}</Col>
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