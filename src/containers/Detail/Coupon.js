import React from 'react';
import Button from '../../components/Button';
import { commaizeNumber } from '../../utils/commaizeNumber';
import { RiDownloadLine } from 'react-icons/ri';

const buttonStyle = {
  'width': '100%',
  'height': '70px',
  'border': '1px solid #DEDEDE',
  'borderRadius': '10px',
  'backgroundColor': '#F5F5F5',
  'margin': '20px auto 0',
  'textAlign': 'center',
  'color': '#FF6F61',
}

function Coupon({ coupon }) {
  const makeCouponTitle = (coupon) => {
    return `최대 ${commaizeNumber(Math.max(...coupon))}원 쿠폰 받기`
  }
  return (
    <Button 
      options={{
        title: makeCouponTitle(coupon),
        style: buttonStyle,
        postIcon: <RiDownloadLine />
      }} 
      onClick={() => {alert('임시: 쿠폰창 열어라')}} 
    ></Button>
  )
}

export default Coupon;