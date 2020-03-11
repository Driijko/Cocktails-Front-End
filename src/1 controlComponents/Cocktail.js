// Import libraries
import React, {useState} from 'react';

// Import Styled Components
import {CocktailContainer} from '../2 styledComponents/CocktailContainer';
import {CocktailName} from '../2 styledComponents/CocktailName';
import {Ingredients} from '../2 styledComponents/Ingredients';

export default function Cocktail(props) {

  // State
  const [displayIngredients, setDisplayIngredients] = useState(false);

  function handleClick() {
    setDisplayIngredients(prev => {
      return !prev;
    })
  }
  return (
    <div>
      <CocktailContainer onClick={handleClick} color={props.color}>
        <CocktailName>{props.name}</CocktailName>
        {displayIngredients ? <Ingredients>{props.ingredients}</Ingredients> : null}
      </CocktailContainer>
    </div>
  )
}