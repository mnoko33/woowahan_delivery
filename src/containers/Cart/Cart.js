import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import { RiShoppingBasketLine } from 'react-icons/ri';
import Counter from './Counter';
import CartModal from '../../components/CartModal';

function Cart({ items }) {
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const handleCartBtnClick = () => {
    setIsCartModalVisible(true);
  }
  const options = {
    style: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#2AC1BC',
      textAlign: 'center',
      color: '#FFF',
      lineHeight: '20px',
      fontSize: '35px',
    },
    preIcon: <RiShoppingBasketLine />
  }

  const loaction = useLocation()
  const isCartShowed = loaction.pathname.startsWith('/restaurants')
  
  if (items.length > 0 && isCartShowed) {
    return (
      <Wrapper onClick={handleCartBtnClick}>
        { isCartModalVisible && <CartModal visible={isCartModalVisible} setVisible={setIsCartModalVisible} /> }
        <Button options={options} />
        <Counter cnt={items.length} />
      </Wrapper>
    )
  } else {
    return null;
  }
}

export default connect(
  state => ({
    items: state.cartReducer.items,
  })
)(Cart);

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;