import React from 'react';
import { connect } from 'react-redux';
import { getMenuList } from '../../modules/restaurant';
import MenuDrawer from '../../components/MenuDrawer';
import MenuModal from '../../components/MenuModal';

function MenuTab({ menuList, getMenuList, restaurantInfo }) {
  const [selectedItemId, setSelectedItemId] = React.useState(null);

  React.useEffect(() => {
    getMenuList(restaurantInfo.id);
  })
  
  return (
    <>
      { selectedItemId && <MenuModal selectedItemId={selectedItemId} setSelectedItemId={setSelectedItemId} /> }
      { menuList.map((menu, index) => {
        return <MenuDrawer key={index} menu={menu} onClickItem={setSelectedItemId} />
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
