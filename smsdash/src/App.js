import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("https://nothatbrian.pythonanywhere.com/dashboard")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result["results"]);
          setEntries(result["results"]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("ERROR Fetch failed");
          setEntries([]);
        }
      )
    }, [])

  const 
  return (
    <div className="App">

      <body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {Object.keys(entries[0]).map((key, index) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
              {entries.map((obj, index) => (
                <tr>
                  <td>{index}</td>
                  {Object.keys(entries[0]).map((key, index) => (
                    <td>{obj[key]}</td>
                  ))}
                </tr>
              ))}
          </tbody>


        
        </Table>
      </body>
    </div>
  );
}

export default App;
