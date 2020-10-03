import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RestaurantInfo from '../containers/Detail/RestaurantInfo';
import Coupon from '../containers/Detail/Coupon';
import OrderType from '../containers/Detail/OrderType';
import { Route, NavLink, Switch } from 'react-router-dom';
import MenuTab from '../containers/Detail/MenuTab';
import InfoTab from '../containers/Detail/InfoTab';
import ReviewTab from '../containers/Detail/ReviewTab';
import { getRestaurantInfo, setRestaurantInfo } from '../modules/restaurant';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #FAFAFA;
  padding-top: 30px;
  min-height: calc(100vh - 70px);
`;

const Wrapper = styled.div`
  max-width: 650px;
  margin: auto;
`;

const TabWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const TabSelector = styled.div`
  width: 100%;
`;

const Tab = styled(NavLink)`
  all: unset;
  color: gray;
  border: 1px solid gray;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  background-color: #F5F5F5;
  text-align: center;
  width: calc((100% - 6px)/3);
  &:hover {
    cursor: pointer;
    background-color: #DEDEDE;
  }
`;

const TabBody = styled.div`
  max-width: 650px;
  margin: 20px auto;
`;

function DetailPage({ match, restaurantInfo, getRestaurantInfo, setRestaurantInfo }) {
  useEffect(() => {
    const restaurantId = match.params.restaurantId
    getRestaurantInfo(restaurantId);
    return () => {
      setRestaurantInfo(null);
    }
  }, [match])

  const subRouterActiveStyle = {
    color: '#2AC1BC',
    height: '47px',
    borderBottom: '4px solid #2AC1BC',
  }

  if (restaurantInfo) {
    return (
      <Background>
        <Wrapper>
          <RestaurantInfo restaurantInfo={restaurantInfo} />
          { restaurantInfo.coupon.length ? <Coupon coupon={restaurantInfo.coupon} /> : null }
          <OrderType restaurantInfo={restaurantInfo} />
        </Wrapper>
        <TabWrapper>
          <TabSelector>
            <Tab to={`${match.url}/menu`} activeStyle={subRouterActiveStyle}>메뉴</Tab>
            <Tab to={`${match.url}/info`} activeStyle={subRouterActiveStyle}>정보</Tab>
            <Tab to={`${match.url}/review`} activeStyle={subRouterActiveStyle}>리뷰</Tab>
          </TabSelector>
          <TabBody>
            <Switch>
              <Route path={[`${match.url}`, `${match.url}/menu`]} component={MenuTab} exact />
              <Route path={`${match.url}/info`} exact component={InfoTab} />
              <Route path={`${match.url}/review`} exact component={ReviewTab} />
            </Switch>
          </TabBody>
        </TabWrapper>
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