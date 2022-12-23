import React from 'react';
import axios from 'axios';
import PersonDetails from './PersonDetails';
import { Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function Person(props) {

    const person = props.person
    const navigate = useNavigate()

    async function DeletePerson(props) {

        console.log("props = ", props);

        await axios.delete(`https://localhost:7094/api/react/${props}`)
            .then(response => response.data)

    }

    // const [zigiplz, setZigiplz] = useState([])
    // const [personList, setPersonList] = useState([])
    const [cities, setCities] = useState([]);
    axios.get(`https://localhost:7094/api/react/person`)
    .then(result => {
        const cities = result.data
        // setZigiplz(zigiplz);
        setCities(cities);
        console.log("cities = ", cities)
        // setPersonList(person)
        // console.log("personList = ", personList)
        
        //     setPersonList({zigiplz, ...personList, ...cities})
        //     console.log("plist", personList);
    })
    
    
        
    // useEffect(() => {
        // function getData() {
            // let mounted = true
            
        //     getData();
        //     return () => (mounted = false)
        // }, [])
        
    // setPersonList({
    //     name: this.state.name,
    //     phonenumber: this.state.phonenumber,
    //     cityid: this.state.city.value
    // });

    
            
        
        // console.log("zigiplzwww = ",zigiplz);
    // console.log("citieswww = ",cities);
    // console.log("personwww = ",person);
    
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
                    {/* <div>{cities.countryName}</div> */}
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
