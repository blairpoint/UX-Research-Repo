import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { Accordion, Badge, Button, Col, Container, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import FormControl from 'react-bootstrap/FormControl';
import {SearchBar} from './components/SearchBar';
import { Link } from 'react-router-dom';

const testArr = ["Chip Whistler", "Mandy Bragger", "Ziggy Stardust", "Test Testerson"];

function parseDate(input) {
    if (isNaN(Date.parse(input))) {
      return input
    } else {
      var date = new Date(input);
      var options = { year: 'numeric', month: '2-digit', day: '2-digit'};
      return new Intl.DateTimeFormat('en-NZ', options).format(date);
    };
  };

function formatResearchers(researcherArr) {
    var arr = Array.from(researcherArr);
    var extras = arr.length - 1
    var firstResearcher = arr[0];
    if (extras == 0) {
        return firstResearcher
    } else {
        return firstResearcher + " +" + extras;
    };
};

const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr]
    if (chunkSize <= 0) return cache
    while (tmp.length) cache.push(tmp.splice(0, chunkSize))
    return cache
  }

const ResearchCard = (props) => {
    let status = ''
    if (props.End_Date === null || props.End_Date === '') {
        status = "In Progress"
    } else {
        status = "Completed"
    }

    const card = (
        <Card bg="light" className="research-card">
            <Card.Header className="border-bottom-0">
                    <Row>
                        <Col sm={8} md={8} className="text-left"><small className="text-left">#{props.Research_ID}</small></Col>
                        <Col sm={8} md={4} className="text-right"><Link to={`/Viewcard/${props._id}`}><small>Take a look</small></Link></Col>
                    </Row>
                    <Row>
                        {/* Project Name - Company name as per wireframe */}
                        <Col><small className="font-weight-bold d-inline-block text-truncate card-project">{props.Project_Name} - {props.Company}</small></Col>
                    </Row>                  
            </Card.Header>
            <Card.Body>
                <Card.Text className="problem-statement"><small>{props.Problem_Statement}</small></Card.Text>
            </Card.Body>
            <Card.Footer className="border-top-0">
                <Row>
                    <Col className="text-left">
                        {/* Created date */}
                        <small><span className="font-weight-bold">Created:</span> {parseDate(props.Created_Date)}</small> {/* Pass dates through the `parseDate` method */}
                    </Col>
                    <Col className="text-right">
                        <small><span className="font-weight-bold">Status:</span> Completed</small> {/* Need to create a method to check if a project is complete / has an end date*/}                                  
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left">
                        {/* Created By */}
                        <small>{testArr[3]}</small> {/* used last name in the test array for this field */}
                    </Col>
                    <Col className="text-right">
                        {/* end date */}
                        <small>{parseDate(props.End_Date)}</small> {/* Pass dates through the `parseDate` method */}
                    </Col>
                </Row>
                <Row>
                    <Col sm={5} md={5} className="text-left">
                        <small><span className="font-weight-bold">Contributors:</span></small><br/>
                        <small>{formatResearchers(testArr)}</small> {/* Replace testArr with Array of researchers */}
                    </Col>
                    <Col sm={7} md={7} className="text-right">
                        <small><span className="font-weight-bold">Location:</span> {props.Location}</small>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
    return card;
}

const CardResults = (props) => {
    const resultChunks = chunk(props.data, 3);
    const rows = resultChunks.map((resultChunk, index) => {
        const cols = resultChunk.map((result, index) => {
            return(
                <Col md={4} sm={12} Research_ID={result.Research_ID}>
                    <ResearchCard
                        Research_ID={result.Research_ID}
                        _id={result._id}
                        Project_Name={result.Project_Name}
                        Company={result.Company}
                        Problem_Statement={result.Problem_Statement}
                        Created_Date={result.Created_Date}
                        Location={result.Location}
                        End_Date={result.End_Date}
                    />
                </Col>
            );
        });
        return <Row key={index} className="card-row">{cols}</Row>
    });
    return(
        <Container className="card-row-container">
            {rows}
        </Container>
    );
};


export class View extends React.Component {

    cat_text = 'Choose an option...'
    location_list = [
        "Wellington",
        "Auckland",
        "Christchurch"
    ]
    industry_list = [
        "Agriculture, Forestry and Fishing",
        "Mining",
        "Manufacturing",
        "Electricity, Gas, Water and Waste Services",
        "Construction",
        "Wholesale Trade",
        "Retail Trade",
        "Accommodation and Food Services",
        "Transport, Postal and Warehousing",
        "Information Media and Telecommunications",
        "Financial and Insurance Services",
        "Rental, Hiring and Real Estate Services",
        "Professional, Scientific and Technical Services",
        "Administrative and Support Services",
        "Public Administration and Safety",
        "Education and Training",
        "Health Care and Social Assistance",
        "Arts and Recreation Services",
        "Other Services"
    ]
    method_list = [
        "Agile",
        "Garage",
        "Lean Startup",
        "Design Thinking"
    ]

    constructor(props) {
        super(props);
        this.state={data:'', search: false, countResults: 0, location: this.cat_text, industry: this.cat_text, method: this.cat_text};
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
                Axios.get(`http://localhost:3001/search/${event.target.value}`).then((res)=>{
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

    insertOptionsList(list) {
        const options = list.map((option, index) => {
            return(<option>{option}</option>)
        });
        return options;
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
                <Row>
                    <Col sm={4} md={4}>
                        <Form.Group>
                            <Form.Label><small>Search by location</small></Form.Label>
                            <Form.Control
                                as="select"
                                className="glob-input"
                                value={this.state.location}
                                onChange={(e) => this.setState({location: e.target.value})}
                                >
                                <option>{this.cat_text}</option>
                                {this.insertOptionsList(this.location_list)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={4} md={4}>
                        <Form.Group>
                            <Form.Label><small>Search by industry</small></Form.Label>
                            <Form.Control
                                as="select"
                                className="glob-input"
                                value={this.state.industry}
                                onChange={(e) => this.setState({industry: e.target.value})}
                                >
                                <option>{this.cat_text}</option>
                                {this.insertOptionsList(this.industry_list)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={4} md={4}>
                        <Form.Group>
                            <Form.Label><small>Search by method</small></Form.Label>
                            <Form.Control
                                as="select"
                                className="glob-input"
                                value={this.state.method}
                                onChange={(e) => this.setState({method: e.target.value})}
                                >
                                <option>{this.cat_text}</option>
                                {this.insertOptionsList(this.method_list)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <div className="results"><strong>{this.returnResultSize()}</strong></div>
                <CardResults data={this.state.data} />
            </Container>
        )
    }
}