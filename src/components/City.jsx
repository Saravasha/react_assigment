import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


export default function CityList() {


    axios.get(`https://localhost:7094/api/react/`).then(result => {
        var cities = result.data
        this.setCity({cities});
        console.log("cities = ",cities);  
    })


    function SelectCityList() {
        
    
        const [city, setCity] = useState([]);
        useEffect(() => {
            loadData();
        }, []);
        
        function loadData(){
            setCity(this.cities);   
        }
    }

}
