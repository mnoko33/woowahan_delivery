import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Modal from '../../../common/Modal';
import ModalFooter from '../../../common/ModalFooter';
import { hideUserConfirm } from '../../../../modules/userConfirm';
import { addItem, resetCart, setCartRestaurantInfo } from '../../../../modules/cart';
import { showUserConfirm } from '../../../../modules/userConfirm';
import { commaizeNumber } from '../../../../utils/commaizeNumber';
import CounterController from '../../../common/CounterController';

function MenuModal({ selectedItem, setSelectedItem, resetCart, addItem, restaurantInfo, cartRestaurantInfo, setCartRestaurantInfo, showUserConfirm, hideUserConfirm }) {
  const [cnt, setCnt] = useState(1);
  
  const handleClickCancelBtn = () => {
    setSelectedItem(null);
  }

  const handleClickConfirmBtn = async () => {
    if (cartRestaurantInfo && restaurantInfo.id !== cartRestaurantInfo.id) {
      showUserConfirm({
        mainMessage: '장바구니에는 같은 가게의 메뉴만 담을 수 있습니다.',
        description: '선택하신 메뉴를 장바구니에 담을 경우 이전에 담은 메뉴가 삭제됩니다.',
        handleClickConfirmBtn: () => {
          resetCart();
          setCartRestaurantInfo(restaurantInfo);
          addItem({ ...selectedItem, cnt });
          setSelectedItem(null)
          hideUserConfirm();
        },
        handleClickCancelBtn: () => {
          hideUserConfirm();
        },
      });
    } else {
      setCartRestaurantInfo(restaurantInfo);
      addItem({ ...selectedItem, cnt });
      setSelectedItem(null)
    }
  }

  return (
    <Modal 
      visible={!!selectedItem}
      title={selectedItem && selectedItem.name}
      closeModal={() => setSelectedItem(null)}
      body={
        <BodyWrapper>
          <MenuImg>
            <img height="100%" alt="" src={selectedItem && selectedItem.img} />
          </MenuImg>
          <FlexWrapper>
            <span>기본</span>
            <span>{selectedItem && commaizeNumber(selectedItem.price)}</span>
          </FlexWrapper>
          <FlexWrapper>
            <span style={{ paddingTop: '10px' }}>수량</span>
            <CounterController 
              count={cnt}
              setCount={(newCnt) => setCnt(newCnt)}
              min={1}
            />
          </FlexWrapper>
        </BodyWrapper>
      }
      footer={
        <ModalFooter 
          handleClickCancelBtn={handleClickCancelBtn}
          handleClickConfirmBtn={handleClickConfirmBtn}
          cancelBtnTitle='취소하기'
          confirmBtnTitle={`${cnt}개 담기`}
        />
      }
    />
  )
}

export default connect(
  state => ({
    restaurantInfo: state.restaurantReducer.restaurantInfo,
    cartRestaurantInfo: state.cartReducer.restaurantInfo
  }),
  { addItem, resetCart, setCartRestaurantInfo, showUserConfirm, hideUserConfirm }
)(MenuModal);

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MenuImg = styled.div`
  width: 100%;
  height: 200px;
`;

const FlexWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;