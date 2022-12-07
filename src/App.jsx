import logo from './logo.svg';
import './App.css';
import TableBuilder from './components/TableBuilder';
import PersonTable from './components/PersonTable';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import SortTable from './components/SortTable';
import PersonList from './components/PersonList';
import RemovePerson from './components/RemovePerson';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <PersonTable /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header> */}
      <PersonList/>
      <RemovePerson/>
      {/* <SortTable/> */}
      <Footer/>
    </div>
  );
}

export default App;
