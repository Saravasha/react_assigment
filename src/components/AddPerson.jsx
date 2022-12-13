import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function AddPerson() {

    const [person, setPerson] = useState({
        name: '', 
        age: '',
        phoneNumber: '',
        emailAdress: '',
        city: ''
    });
 
    const navigate = useNavigate()


    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
    };
          
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(person);
            setPerson(person);
        
        handleSubmit(person);
        }

    function CreatePerson() {
        axios.post(`https://localhost:7094/api/react/`,person).then(response => response.status)
        navigate('/')
    }
        
    return (
        <div className='container'>
            <h3>Add Dudes Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        value={person.name}
                        placeholder="Name"
                        onChange={handleChange}
                        required />
                </label>
                <label htmlFor='age'>
                    <input 
                        type="number"
                        steps="any"
                        name="age"
                        id="age"
                        value={person.age}
                        placeholder='Age'
                        onChange={handleChange}
                        required />
                </label>
                <label htmlFor='emailAdress'>
                    <input 
                        type="email"
                        name="emailAdress"
                        id="emailAdress"
                        value={person.emailAdress}
                        placeholder="Email Adress"
                        onChange={handleChange}
                        required />
                </label>
                <label>
                    </label>
                    <select htmlFor='city'
                        type="text"
                        name="city"
                        id="city"
                        value={person.city}
                        placeholder="City"
                        onChange={handleChange}
                        required>
                        <option class="col" value="" selected disabled>Select City</option>            
                    </select>
                <label>
                <button onClick={handleSubmit}>Create</button>
                </label>
            </form>
        </div>
    );
}
