import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CartModal from './cartModal/CartModal';
import CartBtn from './CartBtn';

function Cart({ restaurantInfo }) {
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const handleCartBtnClick = () => {
    setIsCartModalVisible(true);
  }
  const loaction = useLocation()
  const isCartShowed = loaction.pathname.startsWith('/restaurants')
  if (isCartShowed && restaurantInfo) {
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

export default connect(
  state => ({
    restaurantInfo: state.cartReducer.restaurantInfo,
  })
)(Cart);

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;