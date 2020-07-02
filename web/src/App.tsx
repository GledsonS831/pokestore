import React, { useState, useEffect } from 'react';
import api from './services/api';

function App() {
  /* const [pokemon, pokemonState] = useState<string>(); */
  
  useEffect(() =>{
    api.get('ditto').then((res) =>{
      console.log(res.data)
    })
  }, [])

  return (
    <h1>a</h1>
  );
}

export default App;