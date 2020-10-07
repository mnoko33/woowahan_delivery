import React from 'react';
import { connect } from 'react-redux';
import { setCategoryId } from '../../../modules/category';
import { initNextPage } from '../../../modules/restaurant';
import styled from 'styled-components';

function CategoryList({ history, categoryList, setCategoryId, initNextPage }) {
  const handleClickCategoryCard = (id) => {
    history.push(`/restaurants/categories/${id}`);
    initNextPage();
    setCategoryId(id);
  }

  return (
    <CategoryListWrapper>
      {categoryList.map(
          category => 
            <CategoryCard 
              key={category.id} 
              onClick={() => handleClickCategoryCard(category.id)} 
              src={category.src}
            >
              <CategoryName>{category.name}</CategoryName>
            </CategoryCard>
          )
      }
    </CategoryListWrapper>
  )
}

export default connect(
  state => ({
    categoryList: state.categoryReducer.categoryList
  }),
  { setCategoryId, initNextPage },
)(CategoryList);

const CategoryListWrapper = styled.div`
  width: 80vw;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-gap: 10px;
`;

const CategoryCard = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  position: relative;
  background-image: url(${params => params.src});
  &:hover {
    cursor: pointer;
  }
`;

const CategoryName = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
`;