import React from 'react';
import styled from 'styled-components';
import DeliveryInfo from './types/DeliveryInfo';
import PackAndVisitInfo from './types/PackAndVisitInfo';

function OrderType({ restaurantInfo }) {
  const deliveryInfo = restaurantInfo && {
    minimumOrder: restaurantInfo.minimumOrder,
    paymentType: restaurantInfo.paymentType,
    deliveryTime: restaurantInfo.deliveryTime,
    deliveryTip: restaurantInfo.deliveryTip
  }

  const packInfo = restaurantInfo && {
    minimumOrder: restaurantInfo.minimumOrder,
    orderType: restaurantInfo.orderType,
    address: restaurantInfo.address,
    cookingTime: restaurantInfo.cookingTime,
    paymentType: restaurantInfo.paymentType,
  }

  const isDelivery = () => {
    return restaurantInfo.orderType.includes('배달')
  }

  const isPackOrVisit = () => {
    return restaurantInfo.orderType.includes('포장') || restaurantInfo.orderType.includes('방문')
  }

  return (
    <Wrapper>
      { isDelivery && <DeliveryInfo deliveryInfo={deliveryInfo} /> }
      { isPackOrVisit && <PackAndVisitInfo packInfo={packInfo} />}
    </Wrapper>
  )
}

export default OrderType;

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
`;