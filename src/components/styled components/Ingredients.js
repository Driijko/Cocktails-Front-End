// Import Libraries
import styled, {css} from 'styled-components';

export const Ingredients = styled.ul`
  ${props=> props.displayIngredients && css`
    color: white;
  `}
`