import React from 'react';
import styled, { css } from 'styled-components';

const CustomButton = styled.button`
  all: unset;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    color: #ECECEC;
  }
  ${(props) => 
    props.style && css`
      ${props.style}
    `
  }
`;

function Button({ options, onClick }) {
  if (!options) return null;
  const { preIcon, postIcon, title, style, disabled } = options;
  return (
    <CustomButton style={style} onClick={onClick} disabled={disabled}>
      { preIcon } { title } { postIcon }
    </CustomButton>
  )
}

export default Button;