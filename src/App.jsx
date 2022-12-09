import logo from './logo.svg';
import './App.css';
import TableBuilder from './components/TableBuilder';
import PersonTable from './components/PersonTable';
import Header from './Layout/Header';

import { BrowserRouter, Link, Router,  Switch, Routes, Route } from "react-router-dom";
import Footer from './Layout/Footer';
import SortTable from './components/SortTable';
import PersonList from './components/PersonList';
import RemovePerson from './components/RemovePerson';
import React from 'react';


import PersonDetails from './components/PersonDetails';

export default class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Header/>
        <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<PersonList/>}/>
          <Route exact path="/id:" component={PersonDetails} />
        </Routes>
        </BrowserRouter>
        <RemovePerson/>
        <Footer/>
      </div>
    );
  }
}