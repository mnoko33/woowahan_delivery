import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getCategoryList } from '../modules/category';
import { connect } from 'react-redux';
import CategorySelector from '../containers/RestaurantList/CategorySelector'
import SortingTable from '../containers/RestaurantList/SortingTable'
import RestaurantList from '../containers/RestaurantList/RestaurantList'

const Wrapper = styled.div`
  width: 100%;
`;

function RestaurantListPage({ match, categoryList, getCategoryList }) {
  useEffect(() => {
    if (!categoryList.length) {
      getCategoryList();
    }
  })
  return (
    <Wrapper>
      <CategorySelector />
      <SortingTable />
      <RestaurantList categoryId={match.params.categoryId} />
    </Wrapper>
  )
}

export default connect(
  state => ({ 
    categoryList: state.categoryReducer.categoryList
  }),
  { getCategoryList }
)(RestaurantListPage);