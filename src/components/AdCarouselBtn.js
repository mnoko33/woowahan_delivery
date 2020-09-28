import React from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  all: unset;
  color: #FFF;
  text-align: center;
  background-color: #2Ac1BC;
  border-radius: 50%;
  line-height: 30px;
  font-weight: bolder;
  font-size: 15px;
  width: 30px;
  height: 30px;
  position: absolute;
  display: flex;
  z-index: 9999;
  top: 160px;
  left: ${props => props.direction === 'before' ? '30px' : null};
  right: ${props => props.direction === 'next' ? '30px' : null};
  &:hover {
    cursor: pointer;
  }
`

const btnStyle = { all: 'unset', width: '100%' }

function AdCarouselBtn ({ direction }) {
  const button = direction === 'before'
    ? <ButtonWrapper direction={direction}>
        <ButtonBack style={btnStyle}>{'<'}</ButtonBack>
      </ButtonWrapper>
    : <ButtonWrapper direction={direction}>
        <ButtonNext style={btnStyle}>{'>'}</ButtonNext>
      </ButtonWrapper>
  return (
    button
  )
}

export default AdCarouselBtn;