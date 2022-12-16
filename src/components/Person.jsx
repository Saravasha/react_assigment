import React from 'react';
import axios from 'axios';
import PersonDetails from './PersonDetails';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export function Person(props) {

    const person = props.person

    async function DeletePerson(props) {

        console.log("props = ", props);

        await axios.delete(`https://localhost:7094/api/react/${props}`)
            .then(response => response.data)

    }

    let mounted = true
    const [cities, setCities] = useState([]);
    useEffect(() => {
        function getData() {
            axios.get(`https://localhost:7094/api/react/PersonDetails`)
            .then(result => {
                setCities(result.data);
                console.log("cities = ",cities)
            })
        }
        getData();
        return () => (mounted = false)
    },[])



    return (
        <tr>
            <td>
                <p>{person.name}</p>
            </td>
            <td>
                <p>{person.phoneNumber}</p>
            </td>
            <td>
                <Link className='btn btn-primary' to={`/PersonDetails/${person.id}`}   key={person.id} person={person}>{person.name} </Link>
                <button onClick={() => DeletePerson(person.id)}>Delete</button>
            </td>
        </tr>
    )

}
