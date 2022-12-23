import React from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import PeopleList from './PeopleList';

export default function Person(props) {

    const person = props.person
    // const navigate = useNavigate();

    async function DeletePerson(props) {

        console.log("props = ", props);

        await axios.delete(`https://localhost:7094/api/react/${props}`)
            .then(response => response.data)

    }

    const [cities, setCities] = useState([]);
    let mounted = true
    useEffect(() => {
        function getData() {
            axios.get(`https://localhost:7094/api/react/person`)
            .then(result => {
                const cities = result.data
                setCities(cities);
            })
        }
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
                <b className='col'></b>
            </div>
            <div className='row'>
                <div className='col'>
                    <p>{person.name}</p>
                </div>
                <div className='col'>
                    <p>{person.phoneNumber}</p>
                </div>
                <div className='col'>
                    <p>{person.city.name}</p>
                </div>
                <div className='col'>
                    <p>{person.city.country.name}</p>
                </div>
                <div className='col'>
                    <button className="btn btn-danger btn-sm" onClick={() => DeletePerson(person.id)}>Delete</button>
                </div>
            </div>
        </div>
    
    )

}
