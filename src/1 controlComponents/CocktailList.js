// Import Libraries
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Import control components
import Cocktail from './Cocktail';

// Import styled components
import {Title} from '../2 styledComponents/Title';

// Import helper functions
import randomColor from '../3 helper functions/randomColor';

export default function CocktailList() {

  // STATE
  const [cocktailComponents, setCocktailComponents] = useState(null);
  const [dataObtained, setDataObtained] = useState(false);

  useEffect(()=> {
    axios.get('http://localhost:8000/cocktailList')
      .then( res => {

        // Once we have received a result from our back-end,
        // we will start creating components and storing them in the array 'cocktailComponentsArray'.
        const cocktailComponentsArray = [];

        // Our result is an array, with each member of the array an object with a cocktail name,
        // and an array of ingredient names. Let's iterate through each cocktail. 
        for (let i = 0 ; i < res.data.length ; i++) {

          // We're going to display the ingredients in an unordered list, so let's store each ingredient
          // for a given cocktail in an array and we'll pass it down as props. 
          const ingredients = [];
          for (let j = 0 ; j < res.data[i].ingredients.length ; j++) {
            ingredients.push(<li key={j}>{res.data[i].ingredients[j]}</li>)
          }
          cocktailComponentsArray.push(
            <Cocktail 
              key={i} 
              name={res.data[i].name}
              color={randomColor()} 
              ingredients={ingredients} 
            />
          )
        }        
        setCocktailComponents(cocktailComponentsArray);
        setDataObtained(true);        
      })
  }, [])

  return (
    <div>
      <Title>COCKTAILS</Title>
      {
        dataObtained ?
          cocktailComponents :
          null
      }
    </div>
  )
}