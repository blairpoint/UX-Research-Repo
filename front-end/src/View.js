import React from 'react';
import Axios from 'axios';

export class View extends React.Component {
    constructor(props) {
        super(props);
        this.state={data:''};
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    //This will be executed on page load
    componentDidMount() {
        Axios.get('http://localhost:3001/get-all').then((res)=>{
           this.setState({data: res.data});
        });
    }

    viewCreate() {
        this.props.history.push('create');
    }

    delete(id) {
        Axios.post('http://localhost:3001/delete',{
            id:id
        }).then(()=>{
            const val = this.state.data.filter((val)=>{
                return val.ResearchID != id;
            });
            this.setState({data:val});
        });
    }

    render() {
        return(<div className="container">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                        <th>ResearchID</th>
                        <th>Company</th>
                        <th>ProjectName</th>
                        <th>IndustryName</th>
                        <th>Status</th>
                        <th>Privacy_Level</th>
                        <th>Problem_Statement</th>
                        <th>Date</th>
                        <th>ResearcherID</th>
                        <th>Time_Length</th>
                        <th>KeyInsight</th>
                        <th>KeyPainPoint</th>
                        <th>SampleSize</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(this.state.data).map((val)=>{
                            return(
                                <tr>
                                    <td>{val.ResearchID}</td>
                                    <td>{val.Company}</td>
                                    <td>{val.ProjectName}</td>
                                    <td>{val.Industry}</td>
                                    <td>{val.Status}</td>
                                    <td>{val.Privacy_Level}</td>
                                    <td>{val.Problem_Statement}</td>
                                    <td>{val.Date}</td>
                                    <td>{val.ResearcherID}</td>
                                    <td>{val.Time_length}</td>
                                    <td>{val.KeyInsight}</td>
                                    <td>{val.KeyPainPoint}</td>
                                    <td>{val.SampleSize}</td>
                                    <td><button onClick={()=>this.delete(val._id)}className="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>);
    }
}