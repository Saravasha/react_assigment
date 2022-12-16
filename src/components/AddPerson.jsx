import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Async, {useAsync} from 'react-select/async';

export default function AddPerson() {
    
    const navigate = useNavigate()
    const [cities, setCities] = useState([]);
    const [person, setPerson] = useState({
        name: "",
        phonenumber: "",
        cityid: 0,
    });
    let mounted = true
    useEffect(() => {
        function getData() {
            axios.get(`https://localhost:7094/api/react/create`)
            .then(result => {
                setCities(result.data);
                console.log("cities = ",cities)
            })
        }
        getData();
        return () => (mounted = false)
    },[])

    
    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
        console.log("person = ", person);
    };
          
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(person);
        setPerson({
            name: this.state.name,
            phonenumber: this.state.phonenumber,
            cityid: this.state.city.value
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
                {/* <input type="text" name="cityid" placeholder='City Id' onChange={handleChange} required /> */}
                <select type="text" name="cityid" required defaultValue={"default"} onChange={handleChange}>
                    <option disabled value={"default"}>Select City</option>
                    {cities.map((city) => <option key={city.value} value={city.value}>{city.text}</option>)}  
                </select>
                <button type="submit" onClick={()=>CreatePerson()}>Create Person</button>
            </form>
        </div>
    );
}
