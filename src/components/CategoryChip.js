import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CategoryChipWrapper = styled(NavLink)`
  all: unset;
  color: gray;
  width: 300px;
  margin: 10px;
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

function CategoryChip({ category }) {
  return (
    <CategoryChipWrapper
      activeStyle={{ color: 'black', borderBottom: '5px solid black' }}
      to={`/restaurants/categories/${category.id}`}
    >
      { category.name }
    </CategoryChipWrapper>
  )
}

export default CategoryChip;