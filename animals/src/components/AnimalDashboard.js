import React, { useState, useEffect } from "react";

import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";
import {axiosAuth} from './utils/axiosAuth';


export default function AnimalDashboard() {
    
    const [ animals, setAnimals ] = useState([]);
    useEffect(() => {
        axiosAuth()
        .get('animals')
        .then(res => {
            setAnimals(res.data)
        })
        .catch(err => {
            console.log(err.respose)
        })
    }, [])
    
    // How can get fetch the data from the server when the component mounts?
    // How can we capture and set that data to state?

    return(
        <div className="dash">
            <AnimalForm animals={animals} updateAnimals={setAnimals} />
            <AnimalList animals={animals} />
        </div>
    )
}