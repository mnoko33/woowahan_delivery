import React from 'react';
import styled, { css } from 'styled-components';

const CustomButton = styled.button`
  all: unset;
  &:hover {
    cursor: pointer;
  }
  ${(props) => 
    props.style && css`
      ${props.style}
    `
  }
`;

function Button({ options, onClick }) {
  const { preIcon, postIcon, title, style } = options;
  return (
    <CustomButton style={style} onClick={onClick}>
      { preIcon } { title } { postIcon }
    </CustomButton>
  )
}

export default Button;