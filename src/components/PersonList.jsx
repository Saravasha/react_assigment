import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
    state = {
        people: []
    }

    componentDidMount(){
        axios.get('https://localhost:7094/api/react').then(result => {
            const people = result.data;
            this.setState({people});
        })
    }

    render() { 
        

        return( 
        <ul>
            <h1>People</h1>
            {
                this.state.people.map((person => 
                <li key={person.id}>{person.name} <h6>{person.id}</h6></li>
                ))
            }
            </ul>
        
        
    ) }
}