import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


export default function CitiesList() {


    const [cities, setCities] = useState([]);
    axios.get(`https://localhost:7094/api/react/create`).then(result => {
        const city = result.data
        setCities({city});
        console.log("city = ",city);  
    })

    return (
        <select name="cities">
            <option value="" selected disabled/>
            {
             this.city.map(cities => {<option value={cities.text}></option>}
             )}  
        </select>
    )
}
