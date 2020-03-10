// Import Libraries
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Import Components
import {Cocktail} from './styled components/Cocktail';

export default function CocktailList(props) {

  // STATE
  const [dataObtained, setDataObtained] = useState(false);
  const [cocktailsData, setCocktailsData] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:8000/cocktailList')
      .then( res => {
          setCocktailsData(res.data)
          setDataObtained(true);
          // console.log(res.data);
      })
  }, [])

  // useEffect(()=> {
  //   console.log(cocktailsData);
  // }, [cocktailsData]);

  return (
    <div>
      { 
        dataObtained ?
        <div> 
          <Cocktail>{cocktailsData[0].name}</ Cocktail>
          <Cocktail>{cocktailsData[1].name}</Cocktail>
        </div>
        : null
      }
    </div>
  )
}
{/* 
 */}