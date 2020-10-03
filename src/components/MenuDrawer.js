import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #ECECEC;
  border: 1px solid #D4D4D4;
  &:hover {
    cursor: pointer;
  }
`;

const DrawerHead = styled.div`
  width: 100%;
  padding: 10px;
`;

const InfoWrapper = styled.div`
  display: inline-block;
  width: 95%;
`;

const ArrowWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
`;

const DrawerBody = styled.div`
  width: 100%;
  background-color: #FFF;
`;

function MenuDrawer({ menu }) {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleDrawerClick = () => {
    setIsOpen(isOpen => !isOpen)
  }
  const handleItemClick = (e, itemId) => {
    e.stopPropagation();
    alert(`id가 ${itemId}인 아이템을 장바구니에 추가하자.. or 모달창..`)
  }
  return (
    <Wrapper onClick={handleDrawerClick}>
      <DrawerHead>
        <InfoWrapper>
          <h3>{menu.category}</h3>
          { menu.description.length > 0 && isOpen && <h5>{menu.description}</h5> }
        </InfoWrapper>
        <ArrowWrapper>
          { isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
        </ArrowWrapper>
      </DrawerHead>
      { isOpen && menu.items.length > 0 && 
        <DrawerBody>
          {menu.items.map((item, idx) => <MenuItem onClick={handleItemClick} key={idx} item={item} />)}
        </DrawerBody> 
      }
    </Wrapper>
  )
}

export default MenuDrawer;