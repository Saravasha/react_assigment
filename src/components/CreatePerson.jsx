import React, { useState} from 'react';

export default function Form({handleSubmit}) {

    const [state, setState] = useState({name: '', age: '', emailAdress: '', city: '', country: '',});
 

        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.value });
            
          };
          
        const onFormSubmit = (event) => {
            event.preventDefault();
            console.log(state);
        
            handleSubmit(state);
            setState(state);
        }
        
       

        return (
            <div className='container'>
                {/* <h1>Add Dudes Form</h1> */}
                <form  onSubmit={onFormSubmit}>
                <label htmlFor='name'>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        value={state.name}
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
                        value={state.age}
                        placeholder='Age'
                        onChange={handleChange}
                        required />
                </label>
                <label htmlFor='emailAdress'>
                    <input 
                        type="email"
                        name="emailAdress"
                        id="emailAdress"
                        value={state.emailAdress}
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
                        value={state.city}
                        placeholder="City"
                        onChange={handleChange}
                        required>
                        <option class="col" value="" selected disabled>Select City</option>            
                    </select>
                <label htmlFor='country'>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        value={state.country}
                        placeholder="Country"
                        onChange={handleChange}
                        disabled/>
                </label>
                <label>
                <input type="submit" value="Submit" />
                </label>
            </form>
        </div>
        );
    }
