import React from 'react';
import axios from 'axios';
import PersonDetails from './PersonDetails';
import { Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function Person(props) {

    const navigate = useNavigate()
    const person = props.person

    async function DeletePerson(props) {

        console.log("props = ", props);

        await axios.delete(`https://localhost:7094/api/react/${props}`)
            .then(response => response.data).then(getData())

    }

    function getData() {
        axios.get(`https://localhost:7094/api/react/person`)
            .then(result => {
                setCities(result.data);
                console.log("cities = ", cities)
            })
    }

    let mounted = true
    const [cities, setCities] = useState([]);
    useEffect(() => {
        // function getData() {
        //     axios.get(`https://localhost:7094/api/react/person`)
        //         .then(result => {
        //             setCities(result.data);
        //             console.log("cities = ", cities)
        //         })
        // }
        getData();
        return () => (mounted = false)
    }, [])



    return (
        <div className='container'>
            <div className='row'>
                <b className='col'>Name</b>
                <b className='col'>Phone Number</b>
                <b className='col'>Residence (City)</b>
                <b className='col'>Country</b>
                <b className='col'>w</b>
                <b className='col'>d</b>
            </div>
            <div className='row'>
                <div className='col'>
                    <p>{person.name}</p>
                </div>
                <div className='col'>
                    <p>{person.phoneNumber}</p>
                </div>
                <div className='col'>
                    <p>{person.cityId}</p>
                </div>
                <div className='col'>
                    <Link  to={`/PersonDetails/${person.id}`} key={person.id} person={person}>{person.name}</Link>
                </div>
                <div className='col'></div>
                <div className='col'>
                    <button className="btn btn-danger" onClick={() => DeletePerson(person.id)}>Delete</button>
                </div>
            </div>
        </div>
    
    )

}
