import React from 'react';
import Axios from 'axios';
import Switch from "react-switch";

// function Example() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
// }
const optPrivacy_Level = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];
  

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        Checked: false, ResearchID:'',Company:'',ProjectName:'',IndustryName:'',Status:'',
        Privacy_Level:'',Country:'',Problem_Statement:'',Tags:'',Date:'',ResearcherID:'',Time_in_days:'',
        KeyInsight:'',KeyPainPoint:'',SampleSize:'',Methods:'',URL_ID:'',Demographic:'',Commentary:'',};
        
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(checked) {
        this.setState({ checked });
      };
    addResearch() {
        Axios.post('http://localhost:3001/insert', {
            ResearchID: this.state.ResearchID,
            ProjectName: this.state.ProjectName,
            Demographic: this.state.Demographic,
            Country: this.state.Country,
            IndustryName: this.state.IndustryName,
            Company: this.state.Company,
            Status:this.state.Status,
            Privacy_Level: this.state.Checked,
            Problem_Statement:this.state.Problem_Statement,
            Date: this.state.Date,
            KeyInsight:this.state.KeyInsight,
            KeyPainPoint: this.state.KeyPainPoint,
            Methods: this.state.Methods,
            Commentary: this.state.Commentary,
            ResearcherID:this.state.ResearcherID,
            Time_in_days: this.state.Time_Length,
            SampleSize:this.state.SampleSize,
            URL_ID:this.state.URL_ID,
            Tags:this.state.Tags

        }).then(()=>{
            alert('Research added successfully!!!');
        });
    }
    render() {
        const { selectedOption } = this.state;

        return(<div className="container">
            <div className="form-group">
    <label htmlFor="Date">Date:</label>
    <input onChange={event=>this.setState({Date:event.target.value})} type="text" className="form-control" id="Date"/>
</div>
            <div className="form-group">
                <label htmlFor="ResearchID">ResearchID:</label>
                <input onChange={event=>this.setState({ResearchID:event.target.value})} type="text" className="form-control" id="ResearchID"/>
            </div>
            <div className="form-group">
                <label htmlFor="Status">Status:</label>

                <select onChange={event=>this.setState({Status:event.target.value})} type="text" className="form-control" id="Status">

                <option value="null"></option>
                <option value="Completed">Completed</option>
                <option value="On going">On going</option>
                <option value="Pending">Pending</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="Privacy_Level"></label>

                <label>
                     <span>Security Lock </span>
                     <Switch onChange={this.handleChange} checked={this.state.checked} />
                    </label>
            </div>
            <div className="form-group">
                <label htmlFor="Country">Country:</label>

                <select onChange={event=>this.setState({Country:event.target.value})} type="text" className="form-control" id="Country">

                <option value="null"></option>
                <option value="Austrlia">Austrlia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="United States">United States</option>
                <option value="Singapore">Singapore</option>
                <option value="United Kingdom">United Kingdom</option>

                </select>
            </div>
            <div className="form-group">
                <label htmlFor="ResearcherID">ResearcherID:</label>
                <input onChange={event=>this.setState({ResearcherID:event.target.value})} type="text" className="form-control" id="ResearcherID"/>
            </div>
            <div className="form-group">
                <label htmlFor="ProjectName">ProjectName:</label>
                <input onChange={event=>this.setState({ProjectName:event.target.value})} type="text" className="form-control" id="ProjectName"/>
            </div>
            <div className="form-group">
                <label htmlFor="Problem_Statement">Problem_Statement:</label>
                <input onChange={event=>this.setState({Problem_Statement:event.target.value})} type="text" className="form-control" id="Problem_Statement"/>
            </div>
            <div className="form-group">
                <label htmlFor="Tags">Tags:</label>
                <input onChange={event=>this.setState({Tags:event.target.value})} type="text" className="form-control" id="Tags"/>
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
                <label htmlFor="Methods">Methods:</label>
                <input onChange={event=>this.setState({Methods:event.target.value})} type="text" className="form-control" id="Methods"/>
            </div>

            <div className="form-group">
                <label htmlFor="Industry">IndustryName:</label>
                <input onChange={event=>this.setState({IndustryName:event.target.value})} type="text" className="form-control" id="IndustryName"/>
            </div>
            <div className="form-group">
                <label htmlFor="Company">Company:</label>
                <input onChange={event=>this.setState({Company:event.target.value})} type="text" className="form-control" id="Company"/>
            </div>
            <div className="form-group">
                <label htmlFor="URL_ID">URL_ID:</label>
                <input onChange={event=>this.setState({URL_ID:event.target.value})} type="text" className="form-control" id="URL_ID"/>
            </div>

            <div className="form-group">
                <label htmlFor="Time_Length">Time_Length:</label>
                <input onChange={event=>this.setState({Time_Length:event.target.value})} type="text" className="form-control" id="Time_Length"/>
            </div>
            <div className="form-group">
                <label htmlFor="Demographic">Demographic:</label>
                <input onChange={event=>this.setState({Demographic:event.target.value})} type="text" className="form-control" id="Demographic"/>
            </div>
            <div className="form-group">
                <label htmlFor="Commentary">Commentary:</label>
                <input onChange={event=>this.setState({Commentary:event.target.value})} type="text" className="form-control" id="Commentary"/>
            </div>
  
            <button onClick={()=>this.addResearch()} className="btn btn-warning">Submit</button>
        </div>);
    }
    // render2() {
    //     const { selectedOption } = this.state;

    //     return(<div className="container">
    //         <div className="form-group">
    //             <label htmlFor="ResearchID">ResearchID:</label>
    //             <input onChange={event=>this.setState({ResearchID:event.target.value})} type="text" className="form-control" id="ResearchID"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="Company">Company:</label>
    //             <input onChange={event=>this.setState({Company:event.target.value})} type="text" className="form-control" id="Company"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="ProjectName">ProjectName:</label>
    //             <input onChange={event=>this.setState({ProjectName:event.target.value})} type="text" className="form-control" id="ProjectName"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="IndustryName">IndustryName:</label>
    //             <input onChange={event=>this.setState({IndustryName:event.target.value})} type="text" className="form-control" id="IndustryName"/>
    //         </div>

            
    //         <div className="form-group">
    //             <label htmlFor="Status">Status:</label>

    //             <select onChange={event=>this.setState({Status:event.target.value})} type="text" className="form-control" id="Status">

    //             <option value="null"></option>
    //             <option value="Completed">Completed</option>
    //             <option value="On going">On going</option>
    //             <option value="Pending">Pending</option>
    //             </select>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="Privacy_Level"></label>

    //             <label>
    //                  <span>Security Lock </span>
    //                  <Switch onChange={this.handleChange} checked={this.state.checked} />
    //                 </label>
    //         </div>

            
      
    //         <div className="form-group">
    //             <label htmlFor="Problem_Statement">Problem_Statement:</label>
    //             <input onChange={event=>this.setState({Problem_Statement:event.target.value})} type="text" className="form-control" id="Problem_Statement"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="Date">Date:</label>
    //             <input onChange={event=>this.setState({Date:event.target.value})} type="text" className="form-control" id="Date"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="ResearcherID">ResearcherID:</label>
    //             <input onChange={event=>this.setState({ResearcherID:event.target.value})} type="text" className="form-control" id="ResearcherID"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="Time_Length">Time_Length:</label>
    //             <input onChange={event=>this.setState({Time_Length:event.target.value})} type="text" className="form-control" id="Time_Length"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="KeyInsight">KeyInsight:</label>
    //             <input onChange={event=>this.setState({KeyInsight:event.target.value})} type="text" className="form-control" id="KeyInsight"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="KeyPainPoint">KeyPainPoint:</label>
    //             <input onChange={event=>this.setState({KeyPainPoint:event.target.value})} type="text" className="form-control" id="KeyPainPoint"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="SampleSize">SampleSize:</label>
    //             <input onChange={event=>this.setState({SampleSize:event.target.value})} type="text" className="form-control" id="SampleSize"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="LocationID">LocationID:</label>
    //             <input onChange={event=>this.setState({LocationID:event.target.value})} type="text" className="form-control" id="LocationID"/>
    //         </div>
    //         <button onClick={()=>this.addResearch()} className="btn btn-warning">Submit</button>
    //     </div>);
    // }
}