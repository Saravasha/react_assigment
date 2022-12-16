import './App.css';
import Header from './Layout/Header';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Layout/Footer';
import PeopleList from './components/PeopleList';
import RemovePerson from './components/RemovePerson';
import React from 'react';
import AddPerson from './components/AddPerson'


import PersonDetails from './components/PersonDetails';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<PeopleList/>}/>
        <Route path="/Create" element={<AddPerson/>}/>
        <Route path="/PersonDetails/:id" element={<PersonDetails/>} />
        </Routes>
      </BrowserRouter>
      
      <Header/>
      <RemovePerson/>
      <Footer/>
    </div>
  );
}