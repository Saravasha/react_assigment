import React from 'react';
import axios from 'axios';

export function Person(props) {

    const person = props.person
    
    async function DeletePerson(props) {

        console.log(props);

        await axios.delete(`'https://localhost:7094/api/react'/${props}`)
        .then(response => response.data)

    }

    return (
        <tr>
            <td>
                <p>{props.name}</p>
            </td>
            <td>
                <p>{person.age}</p>
            </td>
            <td>
                <button onClick={() => DeletePerson(person.id)}>Delete</button>
            </td>
        </tr>
    )

}
