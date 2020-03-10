// Import Libraries
import React, {useState} from 'react';
import styled from 'styled-components';

import randomColor from '../../helper functions/randomColor';

const rgbString = randomColor();

export const Cocktail = styled.div`
  color: rgb(${rgbString});
`






