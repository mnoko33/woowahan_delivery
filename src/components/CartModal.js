import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import ModalFooter from './ModalFooter';
import { connect } from 'react-redux';
import Button from './Button';
import CounterController from './CounterController';
import { commaizeNumber } from '../utils/commaizeNumber';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import { removeItem, updateItem } from '../modules/cart';

function ItemCard({ item, updateItem, removeItem }) {
  const { id, cnt, name, price } = item;
  return (
    <ItemCardWrapper>
      <RowWrapper>
        <span>{name}</span>
        <Button 
          options={{ title: 'X' }}
          onClick={() => {removeItem(id)}}
        />
      </RowWrapper>
      <RowWrapper>
        <span style={{ paddingTop: '10px' }}>{commaizeNumber(price)}원</span>
        <CounterController 
          count={cnt}
          setCount={(newCnt) => updateItem({ itemId: id, itemCnt: newCnt })}
          min={1}
        />
      </RowWrapper>
    </ItemCardWrapper>
  )
}

function CartModal({ visible, setVisible, items, removeItem, updateItem }) {
  const closeModal = () => setVisible(false);
  return (
    <Modal 
      visible={visible}
      closeModal={closeModal}
      title='장바구니'
      body={
        <BodyWrapper>
          <strong>가게이름</strong>
          <ItemCardListWrapper>
            { items.map(item => 
              <ItemCard
                key={item.id}
                item={item}
                updateItem={({ itemId, itemCnt }) => updateItem({ itemId, itemCnt })}
                removeItem={id => removeItem(id)}
              />) 
            }
          </ItemCardListWrapper>
          <RowWrapper>
            <span>총 주문 가격</span>
            <span>
              <strong>
                {commaizeNumber(calculateTotalPrice(items))}원
              </strong>
            </span>
          </RowWrapper>
        </BodyWrapper>
      }
      footer={
        <ModalFooter 
          handleClickCancelBtn={closeModal}
          handleClickConfirmBtn={() => {alert('구매!')}}
          cancelBtnTitle='취소하기'
          confirmBtnTitle='구매하기'
        />
      }
    />
  )
}

export default connect(
  state => ({
    items: state.cartReducer.items,
  }),
  { removeItem, updateItem }
)(CartModal);

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemCardListWrapper = styled.div`
  width: 100%;
  max-height: 700px;
  overflow-y: auto;
`;

const ItemCardWrapper = styled.div`
  width: 100%;
  margin: 10px auto 0;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
`;

const RowWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;