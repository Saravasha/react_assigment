import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import PersonDetails from "./PersonDetails";
import { Person } from "./Person";

export default class PeopleList extends React.Component {
    state = {
        people: []
    }


    componentDidMount() {
        axios.get('https://localhost:7094/api/react').then(result => {
            const people = result.data;
            this.setState({ people });
            console.log("people = ", people);
        })
    }



    render() {

        return (
            <div className="container">
                <h1>People List</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((person) => <Person key={person.id} person={person}></Person>)}
                    </tbody>
                </Table>
                <Link to="/Create">
                    <button>Create New Person</button>
                </Link>
            </div>
        )
    }
}
