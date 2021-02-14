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
var researchers = [];

/**
 * Takes a string representation of a Date and returns it in an Australian date format: dd/mm/yyyy.
 * If the input is not a valid JavaScript Date, it will return as a string
 * @param {String} input 
 */
function parseDate(input) {
    if (isNaN(Date.parse(input))) {
      return input
    } else {
      var date = new Date(input);
      var options = { year: 'numeric', month: '2-digit', day: '2-digit'};
      return new Intl.DateTimeFormat('en-AU', options).format(date);
    };
  };

  /**
   * Takes a String representation of a Date and determines a String representing the status of the Research Project.
   * Return either "In Progress" or "Completed".
   * @param {String} input 
   */
  function checkEndDate(input) {
      if (isNaN(Date.parse(input)) || Date.parse(input) == null) {
          return "In Progress"
      } else if(Date.parse(input) > Date.now()) {
          return "In Progress"
      } else {
          return "Completed"
      }
  }

/**
 * Takes a string representation of Researcher ids and a list of Researcher Objects. Return a String
 * formatted as: [Full Name of Researcher at index 0] +[Number of additional Researcher ids].
 * @param {String} ids 
 * @param {List} researcher_list 
 */
function formatResearchers(ids, researcher_list) {
    console.log(researcher_list);
    if (ids.length <= 0) {
        return "None Recorded";
    } else {
        var name = "";
        var extras = ids.length - 1;
        var first = ids[0];
        Array.from(researcher_list).forEach(r => {
            if (first == r._id) {
                name = r.fName + " " + r.lName;
            }
        });
        if (extras > 0) {
            name = name + " +" + extras;
        }
        return name;
    }
};

/**
 * Takes in a List and returns a List of Lists (the cache) with each internal List being of length chunkSize.
 * This allows the retrieved search results to display in the relevant order row by row in a maximum of chunkSize columns.
 * @param {List} arr 
 * @param {Number} chunkSize 
 * @param {List} cache 
 */
const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr]
    if (chunkSize <= 0) return cache
    while (tmp.length) cache.push(tmp.splice(0, chunkSize))
    return cache
  }

/**
 * Populates and returns a formated Research Card with the properties of that Research popluated in the correct formats.
 * @param {Object} props 
 */
const ResearchCard = (props) => {
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
                <Card.Text className="problem-statement p-wrap"><small>{props.Problem_Statement}</small></Card.Text>
            </Card.Body>
            <Card.Footer className="border-top-0">
                <Row>
                    <Col className="text-left">
                        {/* Created date */}
                        <small><span className="font-weight-bold">Created:</span> {parseDate(props.Creation_Date)}</small> {/* Pass dates through the `parseDate` method */}
                    </Col>
                    <Col className="text-right">
                        <small><span className="font-weight-bold">Status:</span> {checkEndDate(props.End_Date)}</small> {/* Need to create a method to check if a project is complete / has an end date*/}                                  
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left">
                        {/* Created By */}
                        <small>{props.Creator}</small> {/* used last name in the test array for this field */}
                    </Col>
                    <Col className="text-right">
                        {/* end date */}
                        <small>{parseDate(props.End_Date)}</small> {/* Pass dates through the `parseDate` method */}
                    </Col>
                </Row>
                <Row>
                    <Col sm={5} md={5} className="text-left">
                        <small><span className="font-weight-bold">Contributors:</span></small><br/>
                    </Col>
                    <Col sm={7} md={7} className="text-right">
                        <small><span className="font-weight-bold">Location:</span> {props.Location}</small>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} className="text-left">
                        <small>{props.Researchers}</small>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
    return card;
}

/**
 * React constant which splits the returned search results into chunks to then be displayed in the correct order.
 * This populates each ResearchCard with the relevant properties, puts them into columns, puts the columns into rows,
 * and returns the rows within a Container.
 * @param {Object} props 
 */
const CardResults = (props) => {
    const resultChunks = chunk(props.data, 3);
    const rows = resultChunks.map((resultChunk, index) => {
        const cols = resultChunk.map((result, index) => {
            const researcher_ids = result.Researchers;
            
            return(
                <Col md={4} sm={12} Research_ID={result.Research_ID}>
                    <ResearchCard
                        Research_ID={result.Research_ID}
                        _id={result._id}
                        Project_Name={result.Project_Name}
                        Company={result.Company}
                        Problem_Statement={result.Problem_Statement}
                        Creation_Date={result.Creation_Date}
                        Location={result.Location}
                        End_Date={result.End_Date}
                        Creator={result.Creator}
                        Researchers={formatResearchers(researcher_ids, props.researcher_list)}
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
        "Australia",
        "New Zealand",
        "United States",
        "Singapore",
        "United Kingdom"
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
        this.state={data:'', search: false, countResults: 0, location: this.cat_text, industry: this.cat_text, method: this.cat_text, researcher_list:[]};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onPressEnter = this.onPressEnter.bind(this);
    }

    /**
     * Determines what call to make to the database when a user presses enter while focused on the SearchBar;
     * uses Axios to get the search results and subsequently update the View's state.
     * @param {Event} event 
     */
    onPressEnter(event) {
        if (event.charCode === 13) {
            if(event.target.value==='' && this.state.industry == this.cat_text) {
                Axios.get('http://localhost:3001/get-all').then((res)=>{
                    this.setState({data: res.data});
                    this.setState({search: ''});
                    this.setState({countResults: 0});    
                });
            } else if (event.target.value==='' && this.state.industry != this.cat_text) {
                Axios.get(`http://localhost:3001/filterSearchIndustryBlank/${this.state.industry}`).then((res)=>{
                    this.setState({data:res.data});
                    this.setState({search: event.target.value});
                    this.setState({countResults: this.countResults(res.data)});
                });
            } else if (this.state.industry != this.cat_text) {
                Axios.get(`http://localhost:3001/filterSearchIndustry/${this.state.industry}/${event.target.value}`).then((res)=>{
                    this.setState({data:res.data});
                    this.setState({search: event.target.value});
                    this.setState({countResults: this.countResults(res.data)});
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

    /**
     * On page load, gets all research and researcher records in the database and updates the View's state.
     */
    componentDidMount() {     
        Axios.get('http://localhost:3001/get-all').then((res)=>{
            this.setState({data: res.data});      
        });
        Axios.get(`http://localhost:3001/get-all-researchers`).then((res)=>{
            this.setState({researcher_list: res.data});  
        });
    }

    /**
     * Returns the number of results retrieved.
     * @param {List} results 
     */
    countResults(results) {
        return Array.from(results).length;
    }

    /**
     * Returns a String in the format: "Showing [Number of results] for [Search keyword(s)]"
     */
    returnResultSize() {
        const resultWord = this.state.countResults == 1 ? "result" : "results";
        if (this.state.search != '') {
            return "Showing " + this.state.countResults + " " + resultWord + " for " + this.state.search;
        } else {
            return "";
        }
    }

    /**
     * Takes a list of strings, and returns the Strings as HTML <option> elements.
     * @param {List} list 
     */
    insertOptionsList(list) {
        const options = list.map((option, index) => {
            return(<option>{option}</option>)
        });
        return options;
    }

    /**
     * Renders the View Component. This renders the entire index/home page and includes a Header, a SearchBar component,
     * dropdown filter options, and the results of the search.
     */
    render() {
        return(
            <Container>
                <h1 className="margin-5">UX Research Repository</h1>
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
                <CardResults data={this.state.data} researcher_list={this.state.researcher_list} />
            </Container>
        )
    }
}