import React, { useEffect } from 'react';
import styled from 'styled-components';
import { set } from '../modules/category';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import api from '../api';

const Wrapper = styled.div`
  width: 100vw;
`;
const CategoryChipWrapper = styled.div`
  margin-top: 30px;
  width: 100vw;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;

`;

const CategoryChip = styled(NavLink)`
  all: unset;
  color: gray;
  width: 300px;
  margin: 10px;
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

function Category({ categoryList, set }) {
  useEffect(() => {
    if (!categoryList.length) {
      const fetchCategoryList = async () => {
        set(await api.getCategoryList());
      }
      fetchCategoryList();
    }
  })
  return (
    <Wrapper>
      <CategoryChipWrapper>
        {
          categoryList.map(
            category => 
              <CategoryChip
                key={category.id}
                activeStyle={{ color: 'black', borderBottom: '5px solid black' }} 
                to={`/restaurants/categories/${category.id}`}
              >
                {category.name}
              </CategoryChip>
          )
        }
      </CategoryChipWrapper>
    </Wrapper>
  )
}

export default connect(
  state => ({ 
    categoryList: state.categoryReducer.categoryList
  }),
  { set }
)(Category);