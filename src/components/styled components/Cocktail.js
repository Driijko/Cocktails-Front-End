// Import Libraries
import React, {useState} from 'react';
import styled, {css} from 'styled-components';

export const Cocktail = styled.div`
  ${props => props.color && css`
    color: rgb(${props.color});
  `}
`






