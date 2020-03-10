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

export default function CocktailList(props) {

  // STATE
  const [dataObtained, setDataObtained] = useState(false);
  const [cocktailsData, setCocktailsData] = useState([]);
  const [cocktailComponents, setCocktailComponents] = useState(null);
  const [ingredientsList, setIngredientsList] = useState(null);

  useEffect(()=> {
    axios.get('http://localhost:8000/cocktailList')
      .then( res => {
          setCocktailsData(res.data);
          const cocktailComponentsArray = [];
          for (let i = 0 ; i < res.data.length ; i++) {
            const ingredients = [];
            for (let j = 0 ; j < res.data[i].ingredients.length; j++) {
              ingredients.push(<li key={j}>{res.data[i].ingredients[j]}</li>);
            }
            cocktailComponentsArray.push(
            <Cocktail 
              key={i} 
              color={randomColor()}
              // onClick={()=> alert('click')}
            >
              <CocktailName>{res.data[i].name}</CocktailName>
              <Ingredients>{ingredients}</Ingredients>
            </Cocktail>);
          }
          // console.log(cocktailComponentsArray);
          setCocktailComponents(cocktailComponentsArray);
          setDataObtained(true);
      })
  }, [])

  // useEffect(()=> {
  //   console.log(cocktailComponents);
  //   // console.log(cocktailsData);
  // }, [cocktailComponents]);

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
