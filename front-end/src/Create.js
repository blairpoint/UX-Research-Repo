import React from 'react';
import Axios from 'axios';
import { Form, FormGroup, Breadcrumb, FormControl, Row, Col, label, Switch, Container, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap'
import { Token, Typeahead } from 'react-bootstrap-typeahead';

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
            End_Date:'',  
            Start_Date:'',                
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

    componentDidMount() {
        Axios.get('http://localhost:3001/get-all-researchers').then((res)=>{
            this.setState({researcher_list: res.data});      
        });
    }

    getNames() {
        const names = []
        Array.from(this.state.researcher_list).forEach(r => 
            names.push(r.fName + " " + r.lName)   
        );
        return names;
    }

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

    addResearch() {
        this.convertNamesToIds();
        console.log(this.state.Researchers);
        Axios.post('http://localhost:3001/insert', {

            Industry: this.state.Industry,
            Company: this.state.Company,
            Problem_Statement:this.state.Problem_Statement,
            Methods:this.state.Methods,
            Tags:this.state.Tags,
            // Creation_Date:this.start.Creation_Date,
            Start_Date: this.state.Start_Date,
            End_Date: this.state.End_Date,
            Research_ID: this.state.Research_ID,
            Location: this.state.Location,
            Creator: this.state.Creator,
            Researchers: this.state.Researchers,
            Research_Outputs: this.state.Research_Outputs,
            Project_Name: this.state.Project_Name,
            Key_Insights: this.state.Key_Insights,
            Findings: this.state.Findings,
            Sample_Size: this.state.Sample_Size

        }).then(() => {
            alert('Research added successfully!!!');
            window.location.href = "http://localhost:3000";
        });
    }

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

    inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            this.setState({ Tags: [...this.state.Tags, val] });
            this.tagInput.value = null;
        }
    }

    addURL = (e) => {
        console.log("add url");
        let outputs = new Map();
        outputs["Title"] = this.state.tempTitle;
        outputs["URL"] = this.state.tempURL;
        this.state.Research_Outputs.push(outputs);
        // console.log(this.state.Research_Outputs);
        // console.log(this.state.tempTitle);
        // console.log(this.state.tempURL);
        this.state.urlArray.push({ title: this.state.tempTitle, url: this.state.tempURL });
        this.child.current.populateData(this.state.urlArray);
    }

    removeTag = (i) => {
        const newTags = [...this.state.Tags];
        newTags.splice(i, 1);
        this.setState({ Tags: newTags });
    }
    insertLinks() {
        const links = this.state.Research_Outputs.map((link, index) => {
            return (<a href={link["URL"]}>{link["Title"]}</a>)
        })
        return links;
    }

    render() {
        return (<div className="container">
             <Row className="mt-4 mx-2">
                <h4>Add UX Research</h4>
            </Row>
            <Row className="mt-2">
                <Breadcrumb className="mx-4">
                    {/* Link not routing yet  */}
                <Breadcrumb.Item href="/..">UX Research Repository</Breadcrumb.Item>
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
                                <option value="Technology">Technology</option>
                                <option value="Finance">Finance</option>
                                <option value="Government">Government</option>
                                <option value="Education">Education</option>
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
                            <Form.Control htmlFor="Start_Date" onChange={event => this.setState({ Date: event.target.value })} type="text" className="form-control glob-input" id="Start_Date" />
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
                                <Form.Control htmlFor="End_Date" onChange={event => this.setState({ Date: event.target.value })} type="text" className="form-control glob-input" id="End_Date" />
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
                                <Form.Control htmlFor="Sample_Size" onChange={event => this.setState({ Sample_Size: event.target.value })} type="text" className="form-control glob-input" id="Sample_Size" />
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
                                <label for="Label">Label URL</label>
                            </Col>

                            <Col sm={4} id="URL_LABEL">
                                <Form.Control htmlFor="Title" type="text" onChange={event => this.setState({ tempTitle: event.target.value })} className="form-control glob-input" id="Research_Outputs" />
                            </Col>
                            <Col sm={1}>
                                <label for="URL">URL</label>
                            </Col>
                            <Col sm={4} id="URL">
                                <Form.Control htmlFor="URL" type="text" onChange={event => this.setState({ tempURL: event.target.value })} className="form-control glob-input" id="Research_Outputs" />
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

export default class URLLabels extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: '' }
    }

    populateData(uArray) {
        console.log(uArray);
        this.setState({ url: uArray });
    }

    render() {
        return (
            <div>

                {Array.from(this.state.url).map((val) => {
                    return (


                        <tr>
                            <td><a href={val.url}>{val.title}</a></td>
                        </tr>

                    )
                })}

            </div>
        )
    }
}