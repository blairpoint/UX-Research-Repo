import React from 'react';
import Axios from 'axios';
import { Form, Card, FormGroup, FormControl, Row, Col, label, Switch, Container, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap'

export class Viewcard extends React.Component {
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

getResearch() {
    Axios.get('http://localhost:3001/get-all').then((res)=>{
        this.setState({data: res.data});      
    });
}
    componentDidMount() {     
        Axios.get('http://localhost:3001/get-all').then((res)=>{
            this.setState({data: res.data});      
        });
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
        });
    }
    render() {
        return(<div className="container">
            <div class="card-columns"></div>
            <Card>
                <Card.Header>
                <FormGroup className="text-left">
                <Row>
                    <Col sm={3}>
                        <label for="ResearchID">Research ID</label>
                        <FormControl readOnly type="text"/>
                    </Col>
                    <Col sm={2}>
                        <label for="SampleSize">Sample Size</label>
                        <FormControl readOnly type="text"/>
                    </Col>
                    <Col sm={3}>
                        <label for="Location">Location</label>
                        <FormControl readOnly type="text"/>
                    </Col>
                    <Col sm={3}>
                        <label for="Name">Team Members</label>
                        <FormControl readOnly type="text"/>
                        </Col>
                    {/* <Col sm={1}>
                        <label for="Startdate">Start Date</label>
                    </Col>
                    <Col sm={1} id="Date">
                    <FormControl readOnly type="text"/>
                    </Col>
                    <Col sm={1}>
                        <label for="ProjectName">Project Name</label>
                    </Col>
                    <Col sm={2} id="ProjectName">
                    <FormControl readOnly type="text"/>
                    </Col>
                    
                    
                     */}
                </Row>
                </FormGroup>
                </Card.Header>

                <Card.Body>
                    <Card.Title>Title</Card.Title>
                        <Card.Text>
                            <Form>
                                <FormGroup className="text-left">
                                
                                    <Row>
                                        <Col sm={2}>
                                        <label for="Problem">Problem Statement</label>
                                        </Col>
                                        <Col sm={4} id="Problem">
                                        <FormControl readOnly type="text"/>
                                        </Col>
                                        <Col sm={2}>
                                        <label for="KeyInsights">Key Insights</label>
                                        </Col>
                                        <Col sm={4} id="KeyInsight">
                                        <FormControl readOnly type="text"/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup className="text-left">
                                    <Row>
                                        <Col sm={2}>
                                        <label for="Problem">Problem Statement</label>
                                        </Col>
                                        <Col sm={4} id="Problem">
                                        <FormControl readOnly type="text"/>
                                        </Col>
                                        <Col sm={2}>
                                        <label for="Methods">Methods</label>
                                        </Col>
                                        <Col sm={4}>
                                        <FormControl readOnly type="text"/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup className="text-left">
                                    <Row>
                                        <Col sm={2}>
                                        <label for="Links">Links</label>
                                        </Col>
                                        <Col sm={10} id="URL_ID">
                                        <FormControl readOnly type="text"/>
                                        </Col>  
                                    </Row>
                                </FormGroup>
                        
                            </Form>
                              
                </Card.Text> 
                    
            </Card.Body>
        </Card>
            {/* <button onClick={()=>this.addResearch()} className="btn btn-primary">Submit</button> */}
            </div>);
    }
}