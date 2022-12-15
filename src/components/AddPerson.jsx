import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import CitiesList from './CitiesList';
import Async, {useAsync} from 'react-select/async';



export default function AddPerson() {
    
    const navigate = useNavigate()
    const [person, setPerson] = useState({
        name: '', 
        phonenumber: '',
        cityid: ''
    });
    
    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
    };
          
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(person);
        setPerson({
            name: this.state.name,
            phonenumber: this.state.phonenumber,
            cityid: this.state.cityid
        });
    }


    function CreatePerson() {
        console.log(person)
        axios.post(`https://localhost:7094/api/react/create`,person).then(response => response.status
        )
        navigate('/')
    }
        
    return (
        <div className='container'>
            <h3>Add Dudes Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input  type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <label>Phone Number: </label>
                <input type="text" name="phonenumber" placeholder='Phone Number' onChange={handleChange} required />
                <label>City Id: </label>
                <input type="text" name="cityid" placeholder='City Id' onChange={handleChange} required />
                <CitiesList/>
                <button type="submit" onClick={()=>CreatePerson()}>Create Person</button>
            </form>
        </div>
    );
}
