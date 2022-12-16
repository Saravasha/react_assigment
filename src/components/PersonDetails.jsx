import React from "react";
import axios from "axios";
import { PeopleList } from "./PeopleList";
import { Person } from "./Person";


export default class PersonDetails extends React.Component {
    state = {
        person: []
    }

    componentDidMount() {
        var id = this.state.person.id 
        axios.get(`https://localhost:7094/api/react/PersonDetails`,id).then(result => {
            // console.log(id);
            const person = result.data;
            this.setState({ person });
            // console.log(people)
        })
    }

    render() {

        return (
            <div>

                <h1>PersonDetails</h1>
                {
                    this.state.person.map((person =>
                        <div className="row" key={person.id}>
                            <p className="col" value={person.id}>{person.id}</p>
                            <p className="col">{person.name}</p>
                            <div className="col">

                            </div>
                        </div>
                    ))
                }

            </div>

        )
    }

}
