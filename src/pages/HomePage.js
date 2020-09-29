import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategoryList } from '../modules/category';
import AdCarousel from '../containers/Home/AdCarousel';
import CategoryList from '../containers/Home/CategoryList';

function HomePage({ history, getCategoryList }) {
  useEffect(() => {
    getCategoryList();
  })

  return (
    <React.Fragment>
      <AdCarousel />
      <CategoryList history={history} />
    </React.Fragment>
  )
}

export default connect(
  null,
  { getCategoryList }
)(HomePage)