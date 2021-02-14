import React from 'react';
import Axios from 'axios';
import { Form, FormGroup, Breadcrumb, Row, Col, Button } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import { Link } from 'react-router-dom';

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            Industry: '',
            Company: '',
            Problem_Statement: '',
            Methods: [],
            Tags: [],
            // Creation_Date:'', 
            //Research_ID:'',  
            Location:'',
            Project_Name:'',  
            Key_Insights:'',
            Sample_Size:'', 
            End_Date: new Date(),  
            Start_Date: new Date(),                
            Findings:'',
            Creator:'',
            Researchers:[],
            Research_Output:'',   
            Research_Outputs:[],    
            tempTitle:'',
            tempURL:'',
            titleArray:[],
            urlArray:[],

            selected: [],
            researcher_list: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.child = React.createRef();

    }
    
    /**
     * On page load, retrieves the full list of Researcher objects.
     */
    componentDidMount() {
        Axios.get('http://localhost:3001/get-all-researchers').then((res)=>{
            this.setState({researcher_list: res.data});      
        });
    }

    /**
     * Returns the list of Researcher names from the list of Researcher objects.
     */
    getNames() {
        const names = []
        Array.from(this.state.researcher_list).forEach(r => 
            names.push(r.fName + " " + r.lName)   
        );
        return names;
    }

    /**
     * Converts the selected list of Researcher names into a list of Rearcher IDs and saves them to the Create’s state.
     */
    convertNamesToIds() {
        const Researchers = this.state.Researchers
        Array.from(this.state.selected).forEach(s =>
            Array.from(this.state.researcher_list).forEach(r =>
              {if (r.fName + " " + r.lName == s) {
                Researchers.push(r._id);
                console.log(r._id);
              }  
            })
        );
        this.setState({Researchers: Researchers});
    }

    /**
     * Calls convertNamesToIds. Posts to the Node/Express.js insert route all the data entered into the form. Alerts the user that the Research was added to the database.
     */
    addResearch() {
        this.convertNamesToIds();
        console.log(this.state.Research_Outputs);
        Axios.post('http://localhost:3001/insert', {

            Industry: this.state.Industry,
            Company: this.state.Company,
            Problem_Statement:this.state.Problem_Statement,
            Methods:this.state.Methods,
            Start_Date: this.state.Start_Date,
            End_Date: this.state.End_Date,
            Location: this.state.Location,
            Creator: this.state.Creator,
            Researchers: this.state.Researchers,
            Research_Outputs: this.state.Research_Outputs,
            Project_Name: this.state.Project_Name,
            Key_Insights: this.state.Key_Insights,
            Findings: this.state.Findings,
            Sample_Size: this.state.Sample_Size

        }).then(() => {
            alert('Research added successfully.');
            window.location.href = "http://localhost:3000";
        });
    }

    /**
     * Handles the Methods state whenever the user checks or unchecks a method option on the form.
     * @param {Event} e 
     */
    methodChange(e) {
        // current array of methods
        console.log("Called " + e.target.value);
        const Methods = this.state.Methods
        let index

        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to methods array
            console.log("push " + e.target.value);
            Methods.push(e.target.value)
        } else {
            // or remove the value from the unchecked checkbox from the array
            console.log("indexoF");
            index = Methods.indexOf(e.target.value)
            Methods.splice(index, 1)
        }

        // update the state with the new array of methods
        this.setState({ Methods: Methods })
    }

    /**
     * Saves the currently entered Output information as an Object to the Research_Outputs state. Clears the associated fields.
     * @param {Event} e 
     */
    addURL = (e) => {
        this.state.Research_Outputs.push({ Title: this.state.tempTitle, URL: this.state.tempURL });
        this.child.current.populateData(this.state.Research_Outputs);
        this.setState({tempTitle: '', tempURL: ''});
    }

    /**
     * Renders the Create component. This renders the entire create page, with all input fields. Includes a URLLabels component.
     */
    render() {
        return (<div className="container">
             <Row className="mt-4 mx-2">
                <h1>Add UX Research</h1>
            </Row>
            <Row className="mt-2">
                <Breadcrumb className="mx-4">
                    {/* Link not routing yet  */}
                <Breadcrumb.Item><Link to="/">UX Research Repository</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Add Research</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            <Form className="margin-5">

                <FormGroup className="text-left">
                    <Row>

                        <Col sm={2}>
                            <label for="Company">Company</label>
                        </Col>
                        <Col sm={4} id="Company">
                            <Form.Control htmlFor="Company" onChange={event => this.setState({ Company: event.target.value })} type="text" className="form-control glob-input" id="Company" />
                        </Col>
                        <Col sm={2}>
                            <label for="Location">Location</label>
                        </Col>
                        <Col sm={4} id="Location">

                            <select onChange={event => this.setState({ Location: event.target.value })} componentClass="select" type="text" className="form-control glob-input" id="dropdown-basic-button">

                                <option value="null"></option>
                                <option value="Australia">Australia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="United States">United States</option>
                                <option value="Singapore">Singapore</option>
                                <option value="United Kingdom">United Kingdom</option>

                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <label for="Industry">Industry</label>
                        </Col>
                        <Col sm={4} id="Industry">

                            <select onChange={event => this.setState({ Industry: event.target.value })} componentClass="select" type="text" className="form-control glob-input" id="dropdown-basic-button">

                                <option value="null"></option>
                                <option value="Agriculture, Forestry and Fishing">Agriculture, Forestry and Fishing</option>
                                <option value="Mining">Mining</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Electricity, Gas, Water and Waste Services">Electricity, Gas, Water and Waste Services</option>
                                <option value="Construction">Construction</option>
                                <option value="Wholesale Trade">Wholesale Trade</option>
                                <option value="Retail Trade">Retail Trade</option>
                                <option value="Accommodation and Food Services">Accommodation and Food Services</option>
                                <option value="Transport, Postal and Warehousing">Transport, Postal and Warehousing</option>
                                <option value="Information Media and Telecommunications">Information Media and Telecommunications</option>
                                <option value="Financial and Insurance Services">Financial and Insurance Services</option>
                                <option value="Rental, Hiring and Real Estate Services">Rental, Hiring and Real Estate Services</option>
                                <option value="Professional, Scientific and Technical Services">Professional, Scientific and Technical Services</option>
                                <option value="Administrative and Support Services">Administrative and Support Services</option>
                                <option value="Public Administration and Safety">Public Administration and Safety</option>
                                <option value="Education and Training">Education and Training</option>
                                <option value="Health Care and Social Assistance">Health Care and Social Assistance</option>
                                <option value="Arts and Recreation Services">Arts and Recreation Services</option>
                                <option value="Other Services">Other Services</option>

                            </select>
                        </Col>
                        <Col sm={2}>
                            <label for="Start_Date">Start Date</label>
                        </Col>
                        <Col sm={4} id="Start_Date">
                            <Form.Control htmlFor="Start_Date" onChange={event => this.setState({ Start_Date: event.target.value })} type="date" className="form-control glob-input" id="Start_Date" />
                        </Col>
                    </Row>
                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                                <label for="Project_Name">Project Name</label>
                            </Col>
                            <Col sm={4} id="Project_Name">
                                <Form.Control htmlFor="Project_Name" onChange={event => this.setState({ Project_Name: event.target.value })} type="text" className="form-control glob-input" id="Project_Name" />
                            </Col>
                            <Col sm={2}>
                                <label for="End_Date">End Date</label>
                            </Col>
                            <Col sm={4} id="End_Date">
                                <Form.Control htmlFor="End_Date" onChange={event => this.setState({ End_Date: event.target.value })} type="date" className="form-control glob-input" id="End_Date" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <label for="Creator">Created By</label>
                            </Col>
                            <Col sm={4} id="Creator">
                                <Form.Control htmlFor="Creator" onChange={event => this.setState({ Creator: event.target.value })} type="text" className="form-control glob-input" id="Creator" />
                            </Col>
                        </Row>
                        <Row>
                            
                        <Col sm={12}>
                                <label for="Addmembers">Add Members</label>
                                <Typeahead 
                                    className="glob-input"
                                    id="basic-typeahead-multiple"
                                    labelKey="name"
                                    multiple
                                    onChange={(selected) => this.setState({selected})}
                                    options={this.getNames()}
                                    placeholder="Choose contributors..."
                                    selected={this.state.selected}
                                />
                            </Col>

                        </Row>

                    </FormGroup>


                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                                <label for="Sample_Size">Number of interviewees</label>
                            </Col>
                            <Col sm={1} id="Sample_Size">
                                <Form.Control htmlFor="Sample_Size" onChange={event => this.setState({ Sample_Size: event.target.value })} type="number" min={0} className="form-control glob-input" id="Sample_Size" />
                            </Col>
                        </Row>
                    </FormGroup>
         
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Problem Statement</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={event => this.setState({ Problem_Statement: event.target.value })} className="glob-input" />
                        <Form.Group controlId="formBasicCheckbox">

                    <Row className="spacer"></Row>
                    
                        </Form.Group>
                        <Form>
                            <Col>
                                <Form.Label for="Tags">UX Methods</Form.Label>
                            
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check inline label="Agile" type={type} id={`inline-${type}-1`} value="Agile" onChange={(e) => this.methodChange(e)} />
                                    <Form.Check inline label="Garage" type={type} id={`inline-${type}-2`} value="Garage" onChange={(e) => this.methodChange(e)} />
                                    <Form.Check inline label="Lean Startup" type={type} id={`inline-${type}-2`} value="Lean Startup" onChange={(e) => this.methodChange(e)} />
                                    <Form.Check inline label="Design Thinking" type={type} id={`inline-${type}-2`} value="Design Thinking" onChange={(e) => this.methodChange(e)} />

                                </div>
                            ))}
                            </Col>
                        </Form>
                    </Form.Group>




                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Key Insights</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={event => this.setState({ Key_Insights: event.target.value })} className="glob-input" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Findings</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={event => this.setState({ Findings: event.target.value })} className="glob-input" />
                    </Form.Group>

                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                                <label for="Links">Research Outputs</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <label for="Label">Output Title</label>
                            </Col>

                            <Col sm={4} id="URL_LABEL">
                                <Form.Control htmlFor="Title" type="text" value={this.state.tempTitle} onChange={event => this.setState({ tempTitle: event.target.value })} className="form-control glob-input" id="Research_Outputs" />
                            </Col>
                            <Col sm={1}>
                                <label for="URL">URL</label>
                            </Col>
                            <Col sm={4} id="URL">
                                <Form.Control htmlFor="URL" type="text" value={this.state.tempURL} onChange={event => this.setState({ tempURL: event.target.value })} className="form-control glob-input" id="Research_Outputs" />
                            </Col>
                            <Col sm={1}>
                                <Button id="AddLinks" variant="primary" onClick={() => this.addURL()}>+</Button>{' '}

                            </Col>

                        </Row>

                        <URLLabels ref={this.child} />

                    </FormGroup>


                </FormGroup>

            </Form>
            
            <Row className="spacer mx-1">
                <button onClick={() => this.addResearch()} className="btn btn-primary">Submit</button>
            </Row>
        </div>);
    }
}

/**
 * Component which renders entered Research_Outputs as hyperlinks to external sources.
 */
export default class URLLabels extends React.Component {
    constructor(props) {
        super(props);
        this.state = { URL: '' }
    }

    /**
     * sets the URL state equal to the given outputs object.
     * @param {Object} output 
     */
    populateData(output) {
        console.log(output);
        this.setState({ URL: output });
    }

    /**
     * Maps each Output into a table of hyperlinks to be rendered from the Create component.
     */
    render() {
        return (
            <div>

                {Array.from(this.state.URL).map((val) => {
                    return (


                        <tr>
                            <td><a href={val.URL}>{val.Title}</a></td>
                        </tr>

                    )
                })}

            </div>
        )
    }
}