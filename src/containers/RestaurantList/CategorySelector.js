import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CategoryChip from '../../components/CategoryChip';

const CategorySelectorWrapper = styled.div`
  margin-top: 15px;
  height: 30px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`;

function CategorySelector({ categoryList }) {
  return (
    <CategorySelectorWrapper>
      {categoryList.map(category=>
        <CategoryChip category={category} key={category.id} />
      )}
    </CategorySelectorWrapper>
  )
}

export default connect(
  state => ({
    categoryList: state.categoryReducer.categoryList,
  }),
  null,
)(CategorySelector);