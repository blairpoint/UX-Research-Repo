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
                return val._id != id;
            });
            this.setState({data:val});
        });
    }

    render() {
        return(<div className="container">
            <div className="table-responsive">
            <button onClick={()=>this.viewCreate()} className="btn btn-success">Create</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Degree</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(this.state.data).map((val)=>{
                            return(
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.degree}</td>
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