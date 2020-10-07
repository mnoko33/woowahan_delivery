import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CartModal from '../../components/CartModal';
import CartBtn from './CartBtn';

function Cart() {
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const handleCartBtnClick = () => {
    setIsCartModalVisible(true);
  }
  const loaction = useLocation()
  const isCartShowed = loaction.pathname.startsWith('/restaurants')
  
  if (isCartShowed) {
    return (
      <Wrapper onClick={handleCartBtnClick}>
        { isCartModalVisible && <CartModal visible={isCartModalVisible} setVisible={setIsCartModalVisible} />}
        <CartBtn />
      </Wrapper>
    )
  } else {
    return null;
  }
}

export default Cart;

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;