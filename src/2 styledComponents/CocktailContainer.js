// Import Libraries
import styled, {css} from 'styled-components';

export const CocktailContainer = styled.div`
  ${props => props.color && css`
    color: rgb(${props.color});
    border: 1px solid rgb(${props.color});
    cursor: pointer;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`






