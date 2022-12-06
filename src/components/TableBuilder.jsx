import React from 'react';
import Table from 'react';

const TableHeader = () => { 
    return (
        <thead className='theader'>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email Adress</th>
              <th>City</th>
              <th>Country</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.age}</td>
                <td> {row.emailAdress} </td>
                <td> {row.city}</td>
                <td> {row.country} </td>
                <td><button className="btn btn-danger" onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const TableBuilder = (props) => {

    const { characterData, removeCharacter } = props;
        return (
            <Table striped bordered hover>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </Table>
        );
}

export default TableBuilder;