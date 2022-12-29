import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import  Person from "./Person";

import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import SortPeopleList from "./SortPeopleList";


export default class PeopleList extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        axios.get('https://localhost:7094/api/react/person/').then(result => {
            const people = result.data;
            this.setState({ people });
            console.log("people = ", people);
        })


    }

    render() {

        return (
            <div className="container">
                {/* header */}
                <div className="col">
                    <h1>People List</h1>
                </div>
                <div className="row">

                    {this.state.people.map((person) =>
                        <Accordion key={person.id}>
                            <AccordionItem>
                                <AccordionHeader className={`accordion-header col-lg-2 col-md-4 btn border-secondary`}>
                                    <div>{person.name}</div>
                                </AccordionHeader>
                                <AccordionBody className={`accordion-title`}>
                                    <Person key={person.id} person={person}></Person>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    )}
                    <ol>
                    </ol>
                </div>
                <Link className="btn btn-primary" to="/Create">Create New Person</Link>
            </div>
        )
    }
}
