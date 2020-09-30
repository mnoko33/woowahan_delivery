import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RestaurantInfo from '../containers/Detail/RestaurantInfo';
import { getRestaurantInfo, setRestaurantInfo } from '../modules/restaurant';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #FAFAFA;
  padding: 20px;
  min-height: calc(100vh - 70px);
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
      <Wrapper>
        <RestaurantInfo restaurantInfo={restaurantInfo} />
      </Wrapper>
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