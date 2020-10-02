import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RestaurantInfo from '../containers/Detail/RestaurantInfo';
import Coupon from '../containers/Detail/Coupon';
import OrderType from '../containers/Detail/OrderType';
import { getRestaurantInfo, setRestaurantInfo } from '../modules/restaurant';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #FAFAFA;
  padding: 20px;
  min-height: calc(100vh - 70px);
`;

const Wrapper = styled.div`
  max-width: 650px;
  margin: auto;
`;

function DetailPage({ match, restaurantInfo, getRestaurantInfo, setRestaurantInfo }) {
  useEffect(() => {
    const restaurantId = match.params.restaurantId
    getRestaurantInfo(restaurantId);
    return () => {
      setRestaurantInfo(null);
    }
  }, [match])

  if (restaurantInfo) {
    return (
      <Background>
        <Wrapper>
          <RestaurantInfo restaurantInfo={restaurantInfo} />
          { restaurantInfo.coupon.length ? <Coupon coupon={restaurantInfo.coupon} /> : null }
          <OrderType restaurantInfo={restaurantInfo} />
        </Wrapper>
      </Background>
    )
  } else {
    return null;
  }
}

export default connect(
  state => ({
    restaurantInfo: state.restaurantReducer.restaurantInfo
  }),
  { getRestaurantInfo, setRestaurantInfo }
)(DetailPage);