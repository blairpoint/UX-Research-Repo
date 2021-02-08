import React from 'react';
import Axios from 'axios';
import { Form, FormGroup, FormControl, Row, Col, label, Switch, Container, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap'

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state={       
            
            Industry:'',
            Company:'',
            Problem_Statement:'',
            Methods:[],
            Tags:[],
            // Creation_Date:'', 
            Research_ID:'',  
            Location:'',
            Project_Name:'',  
            Key_Insights:'',
            Sample_Size:'', 
            End_Date:'',  
            Start_Date:'',                
            Findings:'',
            Creator:'',
            Researchers:'',
            Research_Output:''    

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
        console.log(this.state.Tags);
        Axios.post('http://localhost:3001/insert', {
            
            Industry: this.state.Industry,
            Company: this.state.Company,
            Problem_Statement:this.state.Problem_Statement,
            Methods: this.state.Methods,
            Tags:this.state.Tags,
            // Creation_Date:this.start.Creation_Date,
            Start_Date: this.state.Start_Date,        
            End_Date:this.state.End_Date,              
            Research_ID: this.state.Research_ID,          
            Location: this.state.Location,
            Creator: this.state.Creator,
            Researchers:this.state.Researchers,
            Research_Outputs:this.state.Research_Outputs,
            Project_Name: this.state.Project_Name,
            Key_Insights:this.state.Key_Insights,
            Findings:this.state.Findings,
            Sample_Size:this.state.Sample_Size   
        
        }).then(()=>{
            alert('Research added successfully!!!');
            window.location.href = "http://localhost:3000";
        });
    }

    
    inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            this.setState({ Tags: [...this.state.Tags, val] });
            this.tagInput.value = null;
        }
    }

    removeTag = (i) => {
        const newTags = [...this.state.Tags];
        newTags.splice(i, 1);
        this.setState({ Tags: newTags });
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
                            <label for="Research_ID">Research ID</label>
                        </Col>
                        <Col sm={4} id="Research_ID">
                            <Form.Control htmlFor="Research_ID" onChange={event => this.setState({ Research_ID: event.target.value })} type="text" className="form-control glob-input" id="Research_ID" />
                        </Col>
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

                            </select>
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
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <label for="Creator">Created By</label>
                            </Col>
                            <Col sm={4} id="Creator">
                                <Form.Control htmlFor="Creator" onChange={event => this.setState({ Creator: event.target.value })} type="text" className="form-control glob-input" id="Creator" />
                            </Col>
                            <Col sm={2}>
                                <label for="Start_Date">Start Date</label>
                            </Col>
                            <Col sm={4} id="Start_Date">
                                <Form.Control htmlFor="Start_Date" onChange={event => this.setState({ Date: event.target.value })} type="text" className="form-control glob-input" id="Start_Date" />
                            </Col>
                            <Col sm={2}>
                                <label for="Addmembers">Add Members</label>
                            </Col>

                            <Col>


                                {/* <div className="input-tag">
                        <ul className="input-tag__tags">
                            {this.state.Tags.map((tag, i) => (
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
                                <label for="End_Date">End Date</label>
                            </Col>
                            <Col sm={4} id="End_Date">
                                <Form.Control htmlFor="End_Date" onChange={event => this.setState({ Date: event.target.value })} type="text" className="form-control glob-input" id="End_Date" />
                            </Col>
                        </Row>
                        <Row>

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
                        <Form.Control as="textarea" rows={3} onChange={event => this.setState({ Problem_Statement: event.target.value })} className="glob-input" />
                        
                           
                        
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
                            {this.state.Tags.map((tag, i) => (
                                <li key={tag}>
                                    {tag}
                                    <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
                                </li>
                            ))}
                            <li className="input-tag__tags__input "><input type="text" onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
                        </ul>
                    </div>


                    <Form.Group controlId="exampleForm.ControlTextarea1" onChange={event => this.setState({ Key_Insights: event.target.value })}>
                        <Form.Label>Key Insights</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={event => this.setState({ Key_Insights: event.target.value })} className="glob-input" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1" onChange={event => this.setState({ Findings: event.target.value })}>
                        <Form.Label>Findings</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={event => this.setState({ Findings: event.target.value })} className="glob-input" />
                    </Form.Group>







                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                                <label for="Links">Research Outputs</label>
                            </Col>
                            <Row>
                                <Col sm={2}>
                                    <label for="Label">Label URL</label>
                                </Col>
                            </Row>
                            <Col sm={4} id="URL_LABEL">
                                <Form.Control htmlFor="URL_LABEL" type="text" className="form-control glob-input" id="Research_Outputs" />
                            </Col>

                            <Col sm={4} id="URL">
                                <Form.Control htmlFor="URL" type="text" className="form-control glob-input" id="Research_Outputs" />
                            </Col>
                            <Col sm={1}>
                                <Button id="AddLinks" variant="primary" onChange={event => this.setState({ Research_Outputs: event.target.value })}>+</Button>{' '}

                            </Col>
                        </Row>
                    </FormGroup>


                </FormGroup>

            </Form>
            <button onClick={() => this.addResearch()} className="btn btn-primary">Submit</button>

        </div>);
    }
}