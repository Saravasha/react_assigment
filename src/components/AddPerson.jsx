import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import City from './City';



export default function AddPerson() {
    
    const navigate = useNavigate()
    const [person, setPerson] = useState({
        name: '', 
        age: '',
        phoneNumber: '',
        emailAdress: '',
        
    });
    
    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
    };
          
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(person);
        setPerson({
            name: this.state.name,
            age: this.state.age,
            phoneNumber: this.state.phoneNumber,
            emailAdress: this.state.emailAdress,
            city: this.state.city
        });
    }


    function CreatePerson() {
        axios.post(`https://localhost:7094/api/react/`,person).then(response => response.status)
        navigate('/')
    };

    const [city, setCity] = useState();
    function CityList() {

        // this.state.people.map((person) 
        
        axios.get(`https://localhost:7094/api/react/`).then(result => {
            const cities = result.data
            setCity(cities)
            console.log("cities = ", cities);  
        })
    }
        
        
    return (
        <div className='container'>
            <h3>Add Dudes Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    <input  type="text" name="name" placeholder="Name" onChange={handleChange} required />
                </label>
                <label htmlFor='age'>
                    <input type="number" steps="any" name="age" placeholder='Age' onChange={handleChange} required />
                </label>
                <label htmlFor='emailAdress'>
                    <input type="email" name="emailAdress" placeholder="Email Adress" onChange={handleChange} required />
                </label>
                <select htmlFor='city' type="text" name="city" placeholder="City" onClick={CityList} required>
                    <option className="col" value="" disabled>Select City</option>            
                    {this.cities.map((city) <City key={city.id} city={city}></City>)}
                </select>
                <label>
                    <button onClick={()=>CreatePerson()}>Create Person</button>
                </label>
            </form>
        </div>
    );
}
