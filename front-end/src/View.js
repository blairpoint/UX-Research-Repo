import React from 'react';
import Axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { Badge, Button, Col, Container, InputGroup, ListGroup, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

var EyeBadge = () => {
    return (
        <span className="eye-badge"><h2><Badge className="badge-secondary"><Icon.Eye className="view-icon" /></Badge></h2></span>
    );
}

export class View extends React.Component {
    constructor(props) {
        super(props);
        this.state={data:''};
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    //This will be executed on page load
    // componentDidMount() {
    //     Axios.get('http://localhost:3001/get-all').then((res)=>{
    //        this.setState({data: res.data});
    //     });
    // }
    componentDidMount() {
        Axios.get('http://localhost:3001/get-all').then((res)=>{
           this.setState({data: res.data});
        });
    }

    delete(id) {
        Axios.post('http://localhost:3001/delete',{
            id:id
        }).then(()=>{
            const val = this.state.data.filter((val)=>{
                return val.ResearchID != id;
            });
            this.setState({data:val});
        });
    }

    render() {
        return(
            <Container>
                <CardColumns>
                    {Array.from(this.state.data).map((val)=>{         
                        return(
                            <Card bg="light">
                                <Card.Header>
                                        <Row>
                                            <Col sm={6} className="align-self-center"><small className="font-weight-bold">Start Date: {val.Date}<br />Research ID: {val.ResearchID}</small></Col>
                                            <Col sm={6}><EyeBadge />{/* Wrap with a Link to for the view single card unless not viewable*/}</Col>
                                        </Row>                  
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title as="h6">{val.ProjectName}</Card.Title>
                                    <Card.Text className="problem-statement"><small>Problem Statement:<br />{val.Problem_Statement}</small></Card.Text>
                                    <Row>
                                        <Col className="text-center"><Icon.PieChart /><br/><small>0-5</small></Col>
                                        <Col className="text-center"><Icon.People /><br/><small>{val.ResearcherID}</small></Col>
                                        <Col className="text-center"><Icon.Unlock /><br/><small>Open</small></Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer><small>Location: {val.Country}</small></Card.Footer>
                            </Card>
                            
                            /*<tr>
                                <td>{val.Date}</td>
                                <td>{val.ResearchID}</td>
                                <td>{val.Country}</td>
                                <td>{val.ResearcherID}</td>
                                <td>{val.ProjectName}</td>
                                <td>{val.Problem_Statement}</td>
                                <td>{val.KeyInsight}</td>
                                <td>{val.KeyPainPoint}</td>
                                <td>{val.Methods}</td>
                                <td>{val.Industry}</td>
                                <td>{val.Company}</td>
                                <td><button onClick={()=>this.delete(val._id)}className="btn btn-danger">Delete</button></td>
                            </tr>*/
                        )
                    })}
                </CardColumns>
            </Container>
        )
    }
}