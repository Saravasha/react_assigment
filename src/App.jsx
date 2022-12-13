import logo from './logo.svg';
import './App.css';
import TableBuilder from './components/TableBuilder';
import PersonTable from './components/PersonTable';
import Header from './Layout/Header';

import { BrowserRouter, Link, Router,  Switch, Routes, Route } from "react-router-dom";
import Footer from './Layout/Footer';
import SortTable from './components/SortTable';
import PeopleList from './components/PeopleList';
import RemovePerson from './components/RemovePerson';
import React from 'react';
import AddPerson from './components/AddPerson'


import PersonDetails from './components/PersonDetails';

export default function App() {

  return (
    <div className="App">
      
      <Header/>

      <Routes>
        <Route path="/" exact element={<PeopleList/>}/>
        <Route path="/AddPerson" element={<AddPerson/>}/>
        <Route path="/PeopleDetails/id:" component={<PersonDetails/>} />
      </Routes>
      <RemovePerson/>
      <Footer/>
    </div>
  );
}