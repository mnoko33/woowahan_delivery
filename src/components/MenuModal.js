import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';
import Modal from './Modal';
import ModalFooter from './ModalFooter';
import { addItem } from '../modules/cart';
import api from '../api';
import { commaizeNumber } from '../utils/commaizeNumber';
import CounterController from './CounterController';

function MenuModal({ selectedItem, setSelectedItem, addItem }) {
  const [cnt, setCnt] = useState(1);
  const [menuInfo, setMenuInfo] = useState(null);
  // useEffect(() => {
  //   const fetchMenuInfo = async () => {
  //     setMenuInfo(await api.getMenuInfo());
  //   }
  //   fetchMenuInfo();
  // }, [])

  const handleClickCancelBtn = () => {
    setSelectedItem(null);
  }

  const handleClickConfirmBtn = () => {
    addItem({ ...selectedItem, cnt });
    setSelectedItem(null)
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
  null,
  { addItem }
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