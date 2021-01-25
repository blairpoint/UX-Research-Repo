import React from 'react';
import Axios from 'axios';

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state={name:'',degree:''};
    }

    addStudent() {
        Axios.post('http://localhost:3001/insert', {
            name: this.state.name,
            degree:this.state.degree
        }).then(()=>{
            alert('Student added successfully!!!');
        });
    }

    render() {
        return(<div className="container">
            <div className="form-group">
                <label htmlFor="name">Student Name:</label>
                <input onChange={event=>this.setState({name:event.target.value})} type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="degree">Degree:</label>
                <input onChange={event=>this.setState({degree:event.target.value})} type="text" className="form-control" id="degree"/>
            </div>
            <button onClick={()=>this.addStudent()} className="btn btn-warning">Submit</button>
        </div>);
    }
}