// Import Libraries
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Import Components
import {Title} from '../components/styled components/Title';
import {Cocktail} from './styled components/Cocktail';
import {CocktailName} from './styled components/CocktailName';
import {Ingredients} from './styled components/Ingredients';

// Import helper functions
import randomColor from '../helper functions/randomColor';
import changeStateArray from '../helper functions/changeStateArray';

export default function CocktailList(props) {

  // STATE
  const [dataObtained, setDataObtained] = useState(false);
  const [cocktailComponents, setCocktailComponents] = useState(null);
  const [displayIngredients, setDisplayIngredients] = useState([]);

  // CLICK HANDLER
  // When we click on a cocktail, we want to only display it's ingredients.
  // We use the helper function 'changeStateArray' to only change the particular value
  // for that given cocktail. 
  function handleClick(index) {
    setDisplayIngredients(prev => {
      return changeStateArray(prev, [index], [!prev[index]])
    })
  }

  useEffect(()=> {
    axios.get('http://localhost:8000/cocktailList')
      .then( res => {
          
          // Once we have received a result from our back-end,
          // we will start creating components and storing them in the array 'cocktailComponentsArray'.
          const cocktailComponentsArray = [];
          setDisplayIngredients(Array(res.data.length).fill(false));

          // Our result is an array, with each member of the array an object with a cocktail name,
          // and an array of ingredient names. Let's iterate through each member. 
          for (let i = 0 ; i < res.data.length ; i++) {

            // For each member's array of ingredient names, we'll create a list element, and push
            // them into the array 'ingredients'
            const ingredients = [];
            for (let j = 0 ; j < res.data[i].ingredients.length; j++) {
              ingredients.push(<li key={j}>{res.data[i].ingredients[j]}</li>);
            }

            // Not it's time to place a component into our 'cocktailComponentsArray'
            cocktailComponentsArray.push(
              <Cocktail 
                key={i} 
                color={randomColor()}
                onClick={()=> handleClick(i)}
              >
                <CocktailName>{res.data[i].name}</CocktailName>
                <Ingredients displayIngredients={displayIngredients[i]}>{ingredients}</Ingredients>
              </Cocktail>
            );
          }
          setCocktailComponents(cocktailComponentsArray);
          setDataObtained(true);
      })
  }, [])

  useEffect(()=> {
    console.log(displayIngredients)
  }, [displayIngredients]);

  return (
    <div>
      <Title>COCKTAILS</Title>
      { 
        dataObtained ?
        <div> 
          {cocktailComponents}
        </div>
        : null
      }
    </div>
  )
}
