import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Counter from './Counter';
import { RiShoppingBasketLine } from 'react-icons/ri';

function CartBtn({ items }) {
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

  return (
    <>
      <Button options={options} />
      <Counter cnt={items.length} />
    </>
  )
}

export default connect(
  state => ({
    items: state.cartReducer.items
  })
)(CartBtn);