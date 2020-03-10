// Import Libraries
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Import Components
import {Cocktail} from './styled components/Cocktail';

export default function CocktailList(props) {
  const [cocktailsData, setCocktailsData] = useState(["Dark and Stormy"])

  useEffect(()=> {
    axios.get('http://localhost:8000/cocktailList')
      .then( res => {
          setCocktailsData([res.data])
          console.log(res);
      })
  }, [])

  return (
    <div>
      <Cocktail>Margarita</ Cocktail>
    </div>
  )
}