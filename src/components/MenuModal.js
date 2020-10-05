import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';
import Modal from './Modal';
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

  const defaultOptions = {
    width: '100%', 
    height: '100%', 
    borderRadius: '5px', 
    textAlign: 'center', 
  }

  return (
    <Modal 
      visible={!!selectedItemId}
      title={menuInfo && menuInfo.name}
      selectItem={setSelectedItemId}
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
        <FooterBtnWrapper>
          <Button 
            options={{ 
              style: { 
                ...defaultOptions,
                backgroundColor: '#DEDEDE' 
              },
              title: '최소하기'
            }} 
            onClick={() => setSelectedItemId(null)}
          />
          <Button 
            options={{ 
              style: { 
                ...defaultOptions,
                backgroundColor: '#2AC1BC', 
                color: '#FFF' 
              },
              title: `${cnt}개 담기`,
            }}
            onClick={() => {
              addItem({ id: selectedItemId, cnt });
              setSelectedItemId(null)
            }}
          />
        </FooterBtnWrapper>
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

const FooterBtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
`;