import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CategoryChip from '../../components/CategoryChip';
import { setCategoryId } from '../../modules/category';
import { initNextPage } from '../../modules/restaurant';

const CategorySelectorWrapper = styled.div`
  margin-top: 15px;
  height: 30px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`;

function CategorySelector({ categoryList, setCategoryId, initNextPage }) {
  const handleCategoryChipClick = (categoryId) => {
    initNextPage();
    setCategoryId(categoryId)
  }
  return (
    <CategorySelectorWrapper>
      {categoryList.map(category=>
        <CategoryChip 
          onClick={handleCategoryChipClick} 
          category={category} 
          key={category.id} 
        />
      )}
    </CategorySelectorWrapper>
  )
}

export default connect(
  state => ({
    categoryList: state.categoryReducer.categoryList,
  }),
  { setCategoryId, initNextPage },
)(CategorySelector);