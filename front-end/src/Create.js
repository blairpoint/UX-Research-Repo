import React from 'react';
import Axios from 'axios';
import { Form, FormGroup, FormControl, Row, Col, label, Switch, Container, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap'

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state={        

        Date:'',                
        
                                    Checked: false, 
        ResearchID:'',          Country:'',
        ResearcherID:'', 
        // members: [],
        ProjectName:'',  

        Problem_Statement:'',
        tags:[],
        KeyInsight:'',
        KeyPainPoint:'',
        SampleSize:'',          
        Methods:[],
        IndustryName:'',
        Company:'',
        URL_ID:'',

        // Time_in_days:'',
        // Status:'',
        // Privacy_Level:'',
        // Demographic:'',
        // Commentary:'',}
        };
    
    this.handleChange = this.handleChange.bind(this);

}

handleChange(checked) {
    this.setState({ checked });
  };
  handleSelect = (evtKey, evt) => {
    // Get the selectedIndex in the evtKey variable
}
    addResearch() {
        console.log(this.state.tags);
        Axios.post('http://localhost:3001/insert', {
            Date: this.state.Date,                      
            Privacy_Level: this.state.Checked,
            ResearchID: this.state.ResearchID,          Country: this.state.Country,
            ResearcherID:this.state.ResearcherID,
            ProjectName: this.state.ProjectName,
            Problem_Statement:this.state.Problem_Statement,
            Tags:this.state.tags,
            KeyInsight:this.state.KeyInsight,
            KeyPainPoint: this.state.KeyPainPoint,
            SampleSize:this.state.SampleSize,         
            Methods: this.state.Methods,
            IndustryName: this.state.IndustryName,
            Company: this.state.Company,
            URL_ID:this.state.URL_ID,
            
            
            // Time_in_days: this.state.Time_Length,
            // Demographic: this.state.Demographic,
            // Status:this.state.Status,
            // 
            // Commentary: this.state.Commentary,
        }).then(()=>{
            alert('Research added successfully!!!');
            window.location.href = "http://localhost:3000";
        });
    }

    
    inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            this.setState({ tags: [...this.state.tags, val] });
            this.tagInput.value = null;
        }
    }

    removeTag = (i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({ tags: newTags });
    }

    render() {
        return(<div className="container">
            <Form>

                <FormGroup className="text-left">
                    <Row>




                    </Row>
                </FormGroup>
                <FormGroup className="text-left">
                    <Row>
                        <Col sm={2}>
                            <label for="ResearchID">Research ID</label>
                        </Col>
                        <Col sm={4} id="ResearchID">
                            <Form.Control htmlFor="ResearchID" onChange={event => this.setState({ ResearchID: event.target.value })} type="text" className="form-control" id="ResearchID" />
                        </Col>
                        <Col sm={2}>
                            <label for="Company">Company</label>
                        </Col>
                        <Col sm={4} id="Company">
                            <Form.Control htmlFor="Company" onChange={event => this.setState({ Company: event.target.value })} type="text" className="form-control" id="Company" />
                        </Col>
                        <Col sm={2}>
                            <label for="Location">Location</label>
                        </Col>
                        <Col sm={4} id="Location">

                            <select onChange={event => this.setState({ Country: event.target.value })} componentClass="select" type="text" className="form-control" id="dropdown-basic-button">

                                <option value="null"></option>
                                <option value="Austrlia">Australia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="United States">United States</option>
                                <option value="Singapore">Singapore</option>
                                <option value="United Kingdom">United Kingdom</option>

                            </select>
                        </Col>
                        <Col sm={2}>
                            <label for="Industry">Industry</label>
                        </Col>
                        <Col sm={4} id="Industry">

                            <select onChange={event => this.setState({ IndustryName: event.target.value })} componentClass="select" type="text" className="form-control" id="dropdown-basic-button">

                                <option value="null"></option>
                                <option value="Technology">Technology</option>
                                <option value="Finance">Finance</option>
                                <option value="Government">Government</option>
                                <option value="Education">Education</option>

                            </select>
                        </Col>
                    </Row>
                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                                <label for="ProjectName">Project Name</label>
                            </Col>
                            <Col sm={4} id="ProjectName">
                                <Form.Control htmlFor="ProjectName" onChange={event => this.setState({ ProjectName: event.target.value })} type="text" className="form-control" id="ProjectName" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <label for="Name">Created By</label>
                            </Col>
                            <Col sm={4} id="ResearcherID">
                                <Form.Control htmlFor="ResearcherID" onChange={event => this.setState({ ResearcherID: event.target.value })} type="text" className="form-control" id="ResearcherID" />
                            </Col>
                            <Col sm={2}>
                                <label for="Startdate">Start Date</label>
                            </Col>
                            <Col sm={4} id="SDate">
                                <Form.Control htmlFor="SDate" onChange={event => this.setState({ Date: event.target.value })} type="text" className="form-control" id="SDate" />
                            </Col>
                            <Col sm={2}>
                                <label for="Addmembers">Add Members</label>
                            </Col>

                            <Col>


                                {/* <div className="input-tag">
                        <ul className="input-tag__tags">
                            {this.state.tags.map((tag, i) => (
                                <li key={tag}>
                                    {tag}
                                    <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
                                </li>
                            ))}
                            <li className="input-tag__tags__input"><input type="text" onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
                        </ul>
                    </div> */}
                            </Col>
                            <Col sm={2}>
                                <label for="Enddate">End Date</label>
                            </Col>
                            <Col sm={4} id="EDate">
                                <Form.Control htmlFor="EDate" onChange={event => this.setState({ Date: event.target.value })} type="text" className="form-control" id="EDate" />
                            </Col>
                        </Row>
                        <Row>

                        </Row>

                    </FormGroup>








                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                                <label for="SampleSize">Number of interviewees</label>
                            </Col>
                            <Col sm={1} id="SampleSize">
                                <Form.Control htmlFor="SampleSize" onChange={event => this.setState({ SampleSize: event.target.value })} type="text" className="form-control" id="SampleSize" />
                            </Col>
                        </Row>
                    </FormGroup>
                    {/* <FormGroup className="text-left">
                    <Row>
                    <Col sm={2}>
                        <label for="Problem">Problem</label>
                    </Col>
                    <Col sm={4} id="Problem">
                    <Form.Control htmlFor="Problem" onChange={event=>this.setState({Problem_Statement:event.target.value})} type="text" className="form-control" id="Problem_Statement" />
                    </Col>
                    </Row>
                    
                    </FormGroup> */}
                    <Form.Group controlId="exampleForm.ControlTextarea1" onChange={event => this.setState({ Problem_Statement: event.target.value })}>
                        <Form.Label>Problem Statement</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={event => this.setState({ Problem_Statement: event.target.value })} />
                        
                           
                        
                        <Form.Group controlId="formBasicCheckbox">
                        <Col>
                        <label for="Tags">UX Methods </label>
                        </Col>
 


                        </Form.Group>
                        <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Agile" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="Garage" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Lean Startup" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Design Thinking" type={type} id={`inline-${type}-2`} />


  
    </div>
  ))}
</Form>
                    </Form.Group>

                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                                <label for="Tags">Tags #</label>
                            </Col>
                            <Col sm={1} id="Tags">
                            </Col>
                        </Row>

                    </FormGroup>
                    <div className="input-tag">
                        <ul className="input-tag__tags">
                            {this.state.tags.map((tag, i) => (
                                <li key={tag}>
                                    {tag}
                                    <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
                                </li>
                            ))}
                            <li className="input-tag__tags__input"><input type="text" onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
                        </ul>
                    </div>


                    <Form.Group controlId="exampleForm.ControlTextarea1" onChange={event => this.setState({ Problem_Statement: event.target.value })}>
                        <Form.Label>Key Insights</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={event => this.setState({ KeyInsight: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1" onChange={event => this.setState({ Problem_Statement: event.target.value })}>
                        <Form.Label>Key Findings</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={event => this.setState({ KeyPainPoint: event.target.value })} />
                    </Form.Group>







                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                                <label for="Links">Links</label>
                            </Col>
                            <Row>
                                <Col sm={2}>
                                    <label for="Label">Label URL</label>
                                </Col>
                            </Row>
                            <Col sm={4} id="URL_LABEL">
                                <Form.Control htmlFor="URL_LABEL" type="text" className="form-control" id="URL_ID" />
                            </Col>

                            <Col sm={4} id="URL">
                                <Form.Control htmlFor="URL" type="text" className="form-control" id="URL_ID" />
                            </Col>
                            <Col sm={1}>
                                <Button id="AddLinks" variant="primary" onChange={event => this.setState({ URL_ID: event.target.value })}>+</Button>{' '}

                            </Col>
                        </Row>
                    </FormGroup>


                </FormGroup>

            </Form>
            <button onClick={() => this.addResearch()} className="btn btn-primary">Submit</button>

        </div>);
    }
}