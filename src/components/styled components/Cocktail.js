// Import Libraries
import styled, {css} from 'styled-components';

export const Cocktail = styled.div`
  ${props => props.color && css`
    color: rgb(${props.color});
    border: 1px solid rgb(${props.color});
    cursor: pointer;
    margin: 20px;
  `}
`






