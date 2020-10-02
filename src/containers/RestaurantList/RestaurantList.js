import React, { useEffect } from 'react';
import styled from 'styled-components';
import RestaurantCard from '../../components/RestaurantCard';
import { connect } from 'react-redux';
import { getRestaurantList } from '../../modules/restaurant'
import { useHistory } from 'react-router-dom';
const Fragment = styled.div`
  width: 100%;
  min-height: calc(100vh - 175px);
  background-color: #FAFAFA;
`;

const Wrapper = styled.div`
  max-width: 1020px;
  padding-top: 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function RestaurantList(props) {
  const { categoryId, restaurantList, getRestaurantList } = props;
  const history = useHistory();
  useEffect(() => {
    getRestaurantList(categoryId);
  }, [categoryId])

  const handleCardClick = (id) => {
    history.push(`/restaurants/${id}`)
  }

  return (
    <Fragment>
      <Wrapper>
        {restaurantList.map((restaurant, idx) => 
          <RestaurantCard 
            key={idx} 
            restaurant={restaurant}
            onClick={(id) => handleCardClick(id)}
          />  
        )}
      </Wrapper>
    </Fragment>
  )
}

export default connect(
  state => ({
    restaurantList: state.restaurantReducer.restaurantList
  }),
  { getRestaurantList }
)(RestaurantList);