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
        ProjectName:'',  

        Problem_Statement:'',
        Tags:'',
        KeyInsight:'',
        KeyPainPoint:'',
        SampleSize:'',          
        Methods:'',
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
        Axios.post('http://localhost:3001/insert', {
            Date: this.state.Date,                      
            Privacy_Level: this.state.Checked,
            ResearchID: this.state.ResearchID,          Country: this.state.Country,
            ResearcherID:this.state.ResearcherID,
            ProjectName: this.state.ProjectName,
            Problem_Statement:this.state.Problem_Statement,
            Tags:this.state.Tags,
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
    render() {
        return(<div className="container">
          <Form>
              
              <FormGroup className="text-left">
                <Row>
                    <Col sm={2}>
                        <label for="Startdate">Start Date</label>
                    </Col>
                    <Col sm={4} id="Date">
                        <Form.Control htmlFor="Date" onChange={event=>this.setState({Date:event.target.value})} type="text" className="form-control" id="Date"/>
                    </Col>
                    
                    {/* <Col sm={4}>
                        <Form.Check onChange={event=>this.setState({Checked:event.target.value})} className="form-control" id="Privacy_Level"
                        type="switch" 
                        id="Privacy_Level"
                        label="Security" 
                    />
                    </Col> */}
                    <Col sm={4}>
                        <Form.Check onChange={event=>this.setState({Privacy_Level:event.target.value})}
                        type="switch" 
                        id="Privacy_Level"
                        label="Security"
                    />
                    </Col>
                </Row>
                </FormGroup>
                <FormGroup className="text-left">
                <Row>
                    <Col sm={2}>
                        <label for="ResearchID">Research ID</label>
                    </Col>
                    <Col sm={4} id="ResearchID">
                        <Form.Control htmlFor="ResearchID" onChange={event=>this.setState({ResearchID:event.target.value})} type="text" className="form-control" id="ResearchID" />
                    </Col>
                    <Col sm={2}>
                        <label for="Location">Location</label>
                    </Col>
                    <Col sm={4} id="Location">
                    {/* <DropdownButton id="dropdown-basic-button" componentClass="select" title="Select Country" htmlFor="Location" onChange={event=>this.setState({Location:event.target.value})} type="text" >
                        <Dropdown.Item value="Australia">Australia</Dropdown.Item>
                        <Dropdown.Item value="New Zealand">New Zealand</Dropdown.Item>
                        
                    </DropdownButton> */}
                    <select onChange={event=>this.setState({Country:event.target.value})} componentClass="select" type="text" className="form-control" id="dropdown-basic-button">

                <option value="null"></option>
                <option value="Austrlia">Australia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="United States">United States</option>
                <option value="Singapore">Singapore</option>
                <option value="United Kingdom">United Kingdom</option>

                </select>
                    </Col>
            
                </Row>
                <FormGroup className="text-left">
                    <Row>
                        <Col sm={2}>
                        <label for="Name">Name</label>
                        </Col>
                        <Col sm={4} id="ResearcherID">
                        <Form.Control htmlFor="ResearcherID" onChange={event=>this.setState({ResearcherID:event.target.value})} type="text" className="form-control" id="ResearcherID" />
                        </Col>
                    </Row>
                    <Row>
                    <Col sm={2}>
                        <label for="ProjectName">Project Name</label>
                    </Col>
                    <Col sm={4} id="ProjectName">
                    <Form.Control htmlFor="ProjectName" onChange={event=>this.setState({ProjectName:event.target.value})} type="text" className="form-control" id="ProjectName" />
                    </Col>
                    </Row>
                </FormGroup>
                <FormGroup className="text-left">
                    <Row>
                    <Col sm={2}>
                        <label for="Problem">Problem</label>
                    </Col>
                    <Col sm={4} id="Problem">
                    <Form.Control htmlFor="Problem" onChange={event=>this.setState({Problem:event.target.value})} type="text" className="form-control" id="Problem" />
                    </Col>
                    </Row>
                    </FormGroup>
                    <FormGroup className="text-left">
                <Row>
                    {/* <Col sm={2}>
                        <label for="TagsLn1">Suggested Tags</label>
                    </Col>
                    <Col sm={2} id="Tag1">
                        <Form.Control placeholder="#" />
                    </Col>
                    <Col sm={2} id="Tag2">
                        <Form.Control placeholder="#" />
                    </Col>
                </Row>
                </FormGroup>
                <FormGroup className="text-left">
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={2} id="Tag3">
                        <Form.Control placeholder="#" />
                    </Col>
                    <Col sm={2} id="Tag4">
                        <Form.Control placeholder="#" />
                    </Col>
                </Row>
                </FormGroup>
                <FormGroup className="text-left">
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={2} id="Tag5">
                        <Form.Control placeholder="#" />
                    </Col>
                    <Col sm={2} id="Tag6">
                        <Form.Control placeholder="#" />
                    </Col>
                </Row>
                </FormGroup>
                <FormGroup className="text-left">
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={2} id="Tag7">
                        <Form.Control placeholder="#" />
                    </Col>
                    <Col sm={2} id="Tag8">
                        <Form.Control placeholder="#" />
                    </Col> */}
                {/* </Row>
                </FormGroup>
                <FormGroup className="text-left">
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={2} id="Tag9">
                        <Form.Control placeholder="#" />
                    </Col>
                    <Col sm={2} id="Tag10">
                        <Form.Control placeholder="#" />
                    </Col> */}
                </Row>
                </FormGroup>
                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                            <label for="KeyInsights">Key Insights</label>
                            </Col>
                            <Col sm={4} id="KeyInsight">
                            <Form.Control htmlFor="KeyInsight" onChange={event=>this.setState({KeyInsight:event.target.value})} type="text" className="form-control" id="KeyInsight" />
                            </Col>
                            <Col sm={1}>
                            <Button id="AddLinks" variant="primary">+</Button>{' '}

                            </Col>
                            
                        </Row>
                    </FormGroup>
                    <FormGroup className="text-left">
                        <Row>
                            <Col sm={2}>
                            <label for="KeyPainPoint">Key Pain Point</label>
                            </Col>
                            <Col sm={4} id="KeyPainPoint">
                            <Form.Control htmlFor="KeyPainPoint" onChange={event=>this.setState({KeyPainPoint:event.target.value})} type="text" className="form-control" id="KeyPainPoint" />
                            </Col>
                            <Col sm={1}>
                            <Button id="AddLinks" variant="primary">+</Button>{' '}

                            </Col>
                            
                        </Row>
                    </FormGroup>
                    <FormGroup className="text-left">
                <Row>
                    <Col sm={2}>
                        <label for="SampleSize">Sample Size</label>
                    </Col>
                    <Col sm={1} id="SampleSize">
                    <Form.Control htmlFor="SampleSize" onChange={event=>this.setState({SampleSize:event.target.value})} type="text" className="form-control" id="SampleSize" />
                    </Col>
                </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                    <Col sm={2}>
                        <label for="Methods">Methods</label>
                    </Col>
                    <Col sm={4}>
                        <InputGroup>
                            <FormControl 
                                id="Methods"
                                placeholder="Click all that apply"
                                aria-label="Click all that apply"
                                aria-describedby="basic-addon2"
                                />
                            <DropdownButton
                                as={InputGroup.Append}
                                variant="outline-secondary"
                                title=''
                                id="input-group-dropdown-2"
                                >
                                <Dropdown.Item href="#">Method1</Dropdown.Item>
                                <Dropdown.Item href="#">Method2</Dropdown.Item>
                                <Dropdown.Item href="#">Method3</Dropdown.Item>
                                </DropdownButton>
                        </InputGroup>
                    </Col>
                </Row>
            </FormGroup>

            <FormGroup>
                    <Row>
                    <Col sm={2}>
                        <label for="Industry">Industry</label>
                    </Col>
                    <Col sm={4}>
                        <InputGroup>
                            <FormControl 
                                id="Industry"
                                placeholder="Click all that apply"
                                aria-label="Click all that apply"
                                aria-describedby="basic-addon2"
                                />
                            <DropdownButton
                                as={InputGroup.Append}
                                variant="outline-secondary"
                                title=''
                                id="input-group-dropdown-2"
                                >
                                <Dropdown.Item href="#">Industry1</Dropdown.Item>
                                <Dropdown.Item href="#">Industry2</Dropdown.Item>
                                <Dropdown.Item href="#">Industry3</Dropdown.Item>
                                </DropdownButton>
                        </InputGroup>
                    </Col>
                </Row>
            </FormGroup>

            <FormGroup className="text-left">
                    <Row>
                        <Col sm={2}>
                        <label for="Company">Company</label>
                        </Col>
                        <Col sm={4} id="Company">
                        <Form.Control htmlFor="Company" onChange={event=>this.setState({Company:event.target.value})} type="text" className="form-control" id="Company" />
                        </Col>
                    </Row>
                    </FormGroup>

                    <FormGroup className="text-left">
                    <Row>
                        <Col sm={2}>
                        <label for="Links">Links</label>
                        </Col>
                        <Col sm={4} id="URL_ID">
                        <Form.Control htmlFor="URL_ID" onChange={event=>this.setState({URL_ID:event.target.value})} type="text" className="form-control" id="URL_ID" />
                        </Col>
                        <Col sm={1}>
                        <Button id="AddLinks" variant="primary">+</Button>{' '}

                        </Col>
                    </Row>
                    </FormGroup>


                </FormGroup>

            </Form>
            <button onClick={()=>this.addResearch()} className="btn btn-primary">Submit</button>

            </div>);
    }
}