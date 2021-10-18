import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

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

  return (
    <div className="App">

      <body>
        {entries.map((obj, index) => (
          <p>{JSON.stringify(obj)}</p>
        ))}
      </body>
    </div>
  );
}

export default App;
