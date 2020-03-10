import React from 'react';
import './App.css';
import {Title} from '../components/styled components/Title';
import CocktailList from '../components/CocktailList';

function App() {
  return (
    <div className="App">
      <Title>COCKTAILS</Title>
      <CocktailList/>
    </div>
  );
}

export default App;
