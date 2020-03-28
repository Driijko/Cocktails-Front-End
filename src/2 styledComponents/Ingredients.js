// Import Libraries
import styled, {css} from 'styled-components';

export const Ingredients = styled.ul`
  font-size: 3.5vw;
  ${props => css`
  border: 1px solid rgb(${props.color});
  `}  
`