import React from 'react';
import { connect } from 'react-redux';
import { getMenuList } from '../../modules/restaurant';
import MenuDrawer from '../../components/MenuDrawer';

function MenuTab({ menuList, getMenuList, restaurantInfo }) {
  React.useEffect(() => {
    getMenuList(restaurantInfo.id);
  })
  return (
    <>
      { menuList.map((menu, index) => {
        return <MenuDrawer key={index} menu={menu} />
      })}
    </>
  )
}

export default connect(
  state => ({
    menuList: state.restaurantReducer.menuList,
    restaurantInfo: state.restaurantReducer.restaurantInfo,
  }),
  { getMenuList }
)(MenuTab);