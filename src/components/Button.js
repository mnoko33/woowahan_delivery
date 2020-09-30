import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  all: unset;
  width: ${props => props.style.width || '30px'};
  height: ${props => props.style.height || '30px'};
  color: ${props => props.style.color || null};
  border: ${props => props.style.border || null};
  border-radius: ${props => props.style.borderRadius || null};
  background-color: ${props => props.style.backgrouncColor || null};
  font-size: ${props => props.style.fontSize || null};
  &:hover {
    cursor: pointer;
  }
`;

function Button({ options, onClick }) {
  const { icon, title, style } = options;

  return (
    <CustomButton style={style || {}} onClick={onClick}>
      { icon } { title }
    </CustomButton>
  )
}

export default Button;