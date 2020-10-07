import React from 'react';
import styled from 'styled-components';

function Counter({ cnt }) {
  return (
    <Wrapper>
      { cnt }
    </Wrapper>
  )
}

export default Counter;

const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #FFF;
  border: 2px solid #2AC1BC;
  font-size: 12px;
  lign-height: 0px;
  text-align: center;
  color: #2AC1BC;
  position: absolute;
  top: 8px;
  right: 8px;
`;