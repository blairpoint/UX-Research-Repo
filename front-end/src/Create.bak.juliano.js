import React from 'react';
import Axios from 'axios';
import { Form, FormGroup, Row, Col, label, Switch, Container, Dropdown, DropdownButton } from 'react-bootstrap'
export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state={        

        Date:'',                
        
                                    Checked: false, 
        // ResearchID:'',          Country:'',
        // ResearcherID:'',
        // ProjectName:'',  

        // Problem_Statement:'',
        // Tags:'',
        // KeyInsight:'',
        // KeyPainPoint:'',
        // SampleSize:'',          Time_in_days:'',
        // Methods:'',
        // IndustryName:'',
        // Company:'',
        // URL_ID:'',


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
    addResearch() {
        Axios.post('http://localhost:3001/insert', {
            Date: this.state.Date,                      
            Privacy_Level: this.state.Checked,
            // ResearchID: this.state.ResearchID,          Country: this.state.Country,
            // ResearcherID:this.state.ResearcherID,
            // ProjectName: this.state.ProjectName,
            // Problem_Statement:this.state.Problem_Statement,
            // Tags:this.state.Tags,
            // KeyInsight:this.state.KeyInsight,
            // KeyPainPoint: this.state.KeyPainPoint,
            // SampleSize:this.state.SampleSize,         Time_in_days: this.state.Time_Length,
            // Methods: this.state.Methods,
            // IndustryName: this.state.IndustryName,
            // Company: this.state.Company,
            // URL_ID:this.state.URL_ID,
            
            
            // 
            // Demographic: this.state.Demographic,
            // Status:this.state.Status,
            // 
            // Commentary: this.state.Commentary,
        }).then(()=>{
            alert('Research added successfully!!!');
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
                    <Col sm={2}>
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
                        <Form.Control placeholder="" />
                    </Col>
                    <Col sm={2}>
                        <label for="Location">Location</label>
                    </Col>
                    <Col sm={4} id="Location">
                    <DropdownButton id="dropdown-basic-button" title="Select Country">
                        <Dropdown.Item eventKey="Austrlia" href="#/action-1">Australia</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">New Zealand</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">USA</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Singapore</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">China</Dropdown.Item>
                    </DropdownButton>
                    </Col>
                </Row>
                <FormGroup className="text-left">
                    <Row>
                        <Col sm={2}>
                        <label for="Name">Name</label>
                        </Col>
                        <Col sm={4} id="Name">
                        <Form.Control placeholder="" />
                        </Col>
                    </Row>
                    <Row>
                    <Col sm={2}>
                        <label for="ProjectName">Project Name</label>
                    </Col>
                    <Col sm={4} id="ProjectName">
                        <Form.Control placeholder="" />
                    </Col>
                    </Row>
                </FormGroup>

                </FormGroup>

            </Form>
            <button onClick={()=>this.addResearch()} className="btn btn-primary">Submit</button>

            </div>);
    }
}