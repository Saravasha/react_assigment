import TableBuilder from '../components/TableBuilder';
import Form from '../components/CreatePerson';
import React, {useState} from 'react';



export default function ShowTable() {
  
  const [state, setState] = useState({characters: []}); 

  const removeCharacter = (index) => {
      const { characters } = state;
  
      setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
  }

  const handleSubmit = (character) => {
    setState({characters: [...state.characters, character]})  
  }


      const {characters} = state;
      
    const empty = 0;
    
    if (characters.length !== empty) {
      return (
          <div>
            <div className="container">
              <p>List ov dudes app.</p>
              <TableBuilder
                
                characterData={characters}
                removeCharacter={removeCharacter} /> 
              <h4>Add more Dudes</h4>
              <Form handleSubmit={handleSubmit} />
          </div>
        </div>
      )} 
      else { 
        return ( 
          <div>
            <div className="container">
              <p>There are no dudes, please add some if you wish to view them on the table.</p>
              <h4>Add a new Dude</h4>
              
              <Form handleSubmit={handleSubmit} />
          </div>
        </div>
        )
      }
    }
  