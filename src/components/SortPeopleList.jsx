import React from "react";
import { useState } from "react";
import Person from "./Person";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import PeopleList from "./PeopleList";
import { propTypes } from "react-bootstrap/esm/Image";

export default function SortPeopleList(props) {


    const [person, setPerson] = useState([]);

    const [sortedData, setSortedData] = useState({ searchParam: "" });
    console.log(props);

    // componentDidMount() {
    //     axios.get('https://localhost:7094/api/react/person/').then(result => {
    //         const people = result.data;
    //         this.setState({ people });
    //         console.log("people = ", people);
    //     })


    // }

    
        const handleChange = (event) => {
            setSortedData({ ...sortedData, [event.target.name]: event.target.value });
            sortedData.searchParam.toLowerCase();
            console.log(sortedData.searchParam);
            console.log("person = ", sortedData);
        };

    let mounted = true
    useEffect(() => {
        async function getData() {
            await axios.get(`https://localhost:7094/api/react/person`)
                .then(result => {
                    const person = result.data
                    setPerson(person);
                    console.log(person);
                })
                person.filter(value => value.name.toLowerCase().includes(sortedData.toLowerCase()))
                setPerson(person)
            

        }
        getData();

        return () => (mounted = false)
    }, [sortedData])

    // const person = props.person

    return (
        <div >
            <h1>{sortedData.searchParam}</h1>
            <h1>Sort by Name</h1>
            {/* <form>
                </form> */}
            <input type="text"
                placeholder="Person Name"
                method="post"
                name="searchParam"
                // required="false"
                onChange={handleChange}
            />
            <PeopleList><Person person></Person></PeopleList>
        </div>
    )
}
