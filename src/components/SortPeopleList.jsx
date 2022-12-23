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
    

    // console.log(props);

    const [sortedData, setSortedData] = useState([]);

    
    
    // componentDidMount() {
    //     axios.get('https://localhost:7094/api/react/person/').then(result => {
    //         const people = result.data;
    //         this.setState({ people });
    //         console.log("people = ", people);
    //     })
        
        
    // }
  

    const handleChange = (event) => {
        setSortedData({ ...sortedData, [event.target.name]: event.target.value });
        
        console.log("person = ", sortedData);
    };
    
    // const person = props.person

    return (
            <div >
            <h1>Sort by Name</h1>
            <form>
                <input type="text" placeholder="Person Name" method="post" name="name" required onChange={handleChange}/>
            </form>

        </div>
    )
}
