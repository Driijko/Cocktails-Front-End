// Import Libraries
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Import Components
import {Cocktail} from './styled components/Cocktail';
import {Title} from '../components/styled components/Title';

// Import helper functions
import randomColor from '../helper functions/randomColor';

export default function CocktailList(props) {

  // STATE
  const [dataObtained, setDataObtained] = useState(false);
  const [cocktailsData, setCocktailsData] = useState([]);
  const [cocktailComponents, setCocktailComponents] = useState(null);

  useEffect(()=> {
    axios.get('http://localhost:8000/cocktailList')
      .then( res => {
          setCocktailsData(res.data);
          const cocktailComponentsArray = [];
          for (let i = 0 ; i < res.data.length ; i++) {
            cocktailComponentsArray.push(<Cocktail key={i} color={randomColor()}>{res.data[i].name}</Cocktail>);
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
          {/* <Cocktail color={randomColor()}>{cocktailsData[0].name}</ Cocktail>
          <Cocktail color={randomColor()}>{cocktailsData[1].name}</Cocktail> */}
          {cocktailComponents}
        </div>
        : null
      }
    </div>
  )
}
