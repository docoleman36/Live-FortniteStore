import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';



function App(props) {
  const [info, setInfo] = useState([]);

  require('dotenv').config()
  const api_key = process.env.API_KEY

  const headers = {
    headers: {
      "x-api-key": api_key
    }
  }

  useEffect(() => {
    axios
      .get(`https://fnbr.co/api/stats`, headers)
      .then(response => {
        console.log(response);
      })
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
