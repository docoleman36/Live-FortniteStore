import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const APP_KEY = 'b1ba78d0-e79b-4b02-a529-3bf0b1a75eb4';

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fnbr.co/api/images`)
      .then(response => {
        console.log(response);
      })
  }, []);

  return (
    <div className="App">
      <h1>Good Evening</h1>
    </div>
  );
}

export default App;
