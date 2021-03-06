import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMenuList } from '../../../../modules/restaurant';
import MenuDrawer from './MenuDrawer';
import MenuModal from './MenuModal';

function MenuTab({ menuList, getMenuList, restaurantInfo }) {
  const [selectedItem, setSelectedItem] = useState(null);

  React.useEffect(() => {
    getMenuList(restaurantInfo.id);
  }, []);
  
  return (
    <>
      { selectedItem && <MenuModal selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> }
      { menuList.map((menu, index) => {
        return <MenuDrawer key={index} menu={menu} onClickItem={setSelectedItem} />
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
