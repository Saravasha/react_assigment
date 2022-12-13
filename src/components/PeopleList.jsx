import React from "react";
import axios from "axios";
import Table from "react-bootstrap";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import PeopleDetails from "./PersonDetails";
import { Person } from "./Person";

export default class PeopleList extends React.Component {
    state = {
        people: []
    }
    
    
    componentDidMount(){
        axios.get('https://localhost:7094/api/react').then(result => {
            const people = result.data;
            this.setState({people});
            console.log("people = ",people);
        })
    }

    handleChange = (event) => {

        axios.get(`https://localhost:7094/api/react/`)
        .then(result => {
            console.log(this.person.id); 
            console.log(result.data[1]);
            event.preventDefault();
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
                        <Person key={person.id}/>
                        <p className="col" value={person.id}>{person.id}</p>
                        <p className="col">{person.name}</p>
                        <div className="col">
                            <Link className="btn btn-primary btn-sm" 
                                  to={`/PersonDetails/${person.id}`} 
                                  onClick={this.handleChange(person.id)}>Details
                            </Link> 
                            <Link to="/Create"></Link>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        ) 
    }
}
