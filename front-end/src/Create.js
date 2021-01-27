import React from 'react';
import Axios from 'axios';

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state={ResearchID:'',Company:'',ProjectName:'',IndustryName:'',Status:'',Privacy_Level:'',Problem_Statement:'',Date:'',ResearcherID:'',Time_Length:'',KeyInsight:'',KeyPainPoint:'',SampleSize:'',LocationID:''};
    }

    addLocation() {
        Axios.post('http://localhost:3001/insert', {
            ResearchID: this.state.ResearchID,
            Company: this.state.Company,
            ProjectName:this.state.ProjectName,
            IndustryName: this.state.IndustryName,
            Status:this.state.Status,
            Privacy_Level: this.state.Privacy_Level,
            Problem_Statement:this.state.Problem_Statement,
            Date: this.state.Date,
            ResearcherID:this.state.ResearcherID,
            Time_Length: this.state.Time_Length,
            KeyInsight:this.state.KeyInsight,
            KeyPainPoint: this.state.KeyPainPoint,
            SampleSize:this.state.SampleSize,
            LocationID:this.state.LocationID
        }).then(()=>{
            alert('Research added successfully!!!');
        });
    }

    render() {
        return(<div className="container">
            <div className="form-group">
                <label htmlFor="ResearchID">ResearchID:</label>
                <input onChange={event=>this.setState({ResearchID:event.target.value})} type="text" className="form-control" id="ResearchID"/>
            </div>
            <div className="form-group">
                <label htmlFor="Company">Company:</label>
                <input onChange={event=>this.setState({Company:event.target.value})} type="text" className="form-control" id="Company"/>
            </div>
            <div className="form-group">
                <label htmlFor="ProjectName">ProjectName:</label>
                <input onChange={event=>this.setState({ProjectName:event.target.value})} type="text" className="form-control" id="ProjectName"/>
            </div>
            <div className="form-group">
                <label htmlFor="IndustryName">IndustryName:</label>
                <input onChange={event=>this.setState({IndustryName:event.target.value})} type="text" className="form-control" id="IndustryName"/>
            </div>
            <div className="form-group">
                <label htmlFor="Status">Status:</label>
                <input onChange={event=>this.setState({Status:event.target.value})} type="text" className="form-control" id="Status"/>
            </div>
            <div className="form-group">
                <label htmlFor="Privacy_Level">Privacy_Level:</label>
                <input onChange={event=>this.setState({Privacy_Level:event.target.value})} type="text" className="form-control" id="Privacy_Level"/>
            </div>
            <div className="form-group">
                <label htmlFor="Problem_Statement">Problem_Statement:</label>
                <input onChange={event=>this.setState({Problem_Statement:event.target.value})} type="text" className="form-control" id="Problem_Statement"/>
            </div>
            <div className="form-group">
                <label htmlFor="Date">Date:</label>
                <input onChange={event=>this.setState({Date:event.target.value})} type="text" className="form-control" id="Date"/>
            </div>
            <div className="form-group">
                <label htmlFor="ResearcherID">ResearcherID:</label>
                <input onChange={event=>this.setState({ResearcherID:event.target.value})} type="text" className="form-control" id="ResearcherID"/>
            </div>
            <div className="form-group">
                <label htmlFor="Time_Length">Time_Length:</label>
                <input onChange={event=>this.setState({Time_Length:event.target.value})} type="text" className="form-control" id="Time_Length"/>
            </div>
            <div className="form-group">
                <label htmlFor="KeyInsight">KeyInsight:</label>
                <input onChange={event=>this.setState({KeyInsight:event.target.value})} type="text" className="form-control" id="KeyInsight"/>
            </div>
            <div className="form-group">
                <label htmlFor="KeyPainPoint">KeyPainPoint:</label>
                <input onChange={event=>this.setState({KeyPainPoint:event.target.value})} type="text" className="form-control" id="KeyPainPoint"/>
            </div>
            <div className="form-group">
                <label htmlFor="SampleSize">SampleSize:</label>
                <input onChange={event=>this.setState({SampleSize:event.target.value})} type="text" className="form-control" id="SampleSize"/>
            </div>
            <div className="form-group">
                <label htmlFor="LocationID">LocationID:</label>
                <input onChange={event=>this.setState({LocationID:event.target.value})} type="text" className="form-control" id="LocationID"/>
            </div>
            <button onClick={()=>this.addLocation()} className="btn btn-warning">Submit</button>
        </div>);
    }
}