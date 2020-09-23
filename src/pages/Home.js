import React from 'react';
import styled from 'styled-components';
import AdCarousel from '../components/AdCarousel';
import CategoryList from '../components/CategoryList';

const HomeWrapper = styled.div`
  
`

function Home({ history }) {
  return (
    <HomeWrapper>
      <AdCarousel />
      <CategoryList history={history} />
    </HomeWrapper>
  )
}

export default Home;