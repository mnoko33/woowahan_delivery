import React from 'react';
import styled from 'styled-components';

function EmptyCart() {
  return (
    <Wrapper>
      <EmptyCartImg src={require('../../../assets/images/emptyCart.png')} alt="emptyCartImg" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
`;

const EmptyCartImg = styled.img`
  width: 100%;
  height: 390px;
`;

export default EmptyCart;