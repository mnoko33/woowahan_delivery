import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';
import Modal from './Modal';
import ModalFooter from './ModalFooter';
import { addItem } from '../modules/cart';
import api from '../api';
import { commaizeNumber } from '../utils/commaizeNumber';

function MenuModal({ selectedItemId, setSelectedItemId, addItem }) {
  const [cnt, setCnt] = useState(1);
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    const fetchMenuInfo = async () => {
      setMenuInfo(await api.getMenuInfo());
    }
    fetchMenuInfo();
  }, [])

  const handleClickCancelBtn = () => {
    setSelectedItemId(null);
  }

  const handleClickConfirmBtn = () => {
    addItem({ id: selectedItemId, cnt });
    setSelectedItemId(null)
  }

  return (
    <Modal 
      visible={!!selectedItemId}
      title={menuInfo && menuInfo.name}
      closeModal={() => setSelectedItemId(null)}
      body={
        <BodyWrapper>
          <MenuImg>
            <img height="100%" alt="" src={menuInfo && menuInfo.img} />
          </MenuImg>
          <FlexWrapper>
            <span>기본</span>
            <span>{menuInfo && commaizeNumber(menuInfo.price)}</span>
          </FlexWrapper>
          <FlexWrapper>
            <span style={{ paddingTop: '10px' }}>수량</span>
            <CountController>
              <Button 
                options={{ 
                  title: '-', 
                  disabled: cnt === 1 
                }}
                onClick={() => setCnt(cnt - 1)}
              />
                <span>{cnt}</span>
              <Button 
                options={{ title: '+' }}
                onClick={() => setCnt(cnt + 1)}
              />
            </CountController>
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

const CountController = styled.div`
  width: 150px;
  border: 1px solid #ECECEC;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;