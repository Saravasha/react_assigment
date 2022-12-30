import './App.css';
import Header from './Layout/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Layout/Footer';
import PeopleList from './components/PeopleList';
import RemovePerson from './components/RemovePerson';
import React from 'react';
import AddPerson from './components/AddPerson'

import SortPeopleList from './components/SortPeopleList';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<PeopleList/>}/> */}
        <Route path="/" element={<PeopleList/>}/>
        {/* <Route path="/" element={<SortPeopleList/>}/> */}
        <Route path="/create" element={<AddPerson/>}/>
        </Routes>


      <Header/>
      {/* <PeopleList/> */}
      <Footer/>
      </BrowserRouter>
    </div>
  );
}