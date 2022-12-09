import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import PersonDetails from "./PersonDetails";

export default class PersonList extends React.Component {
    state = {
        people: []
    }
    
    
    componentDidMount(){
        axios.get('https://localhost:7094/api/react').then(result => {
            const people = result.data;
            this.setState({people});
            console.log(people);
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.get(`https://localhost:7094/api/react/${this.state.id}`)
        .then(result => {
            console.log(result); 
            console.log(result.data);
        })
    }

    render() { 
        

        return( 
        <div className="row">
            <h1>People List</h1>
            <div className="col">
                <b>Id</b>
            </div>
            <div className="col">
                <b>People</b>
            </div>
            <div className="col">
            </div>
            <div>
            {
                this.state.people.map((person => 
                    <div className="row" key={person.id}>
                        <p className="col" value={person.id}>{person.id}</p>
                        <p className="col">{person.name}</p>
                        <div className="col">
                        <button  onClick={this.handleChange} className="btn btn-primary btn-sm" name="id">Details
                            {/* to={`/PersonDetails/${person.id}`}  */}
                        </button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        ) 
    }
}
