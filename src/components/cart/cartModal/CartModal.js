import React from 'react';
import Modal from '../../common/Modal';
import styled from 'styled-components';
import ModalFooter from '../../common/ModalFooter';
import ItemCardList from './ItemCardList';
import EmptyCart from './EmptyCart';
import { connect } from 'react-redux';
import { commaizeNumber } from '../../../utils/commaizeNumber';
import { calculateTotalPrice } from '../../../utils/calculateTotalPrice';
import { removeItem, updateItem } from '../../../modules/cart';

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
            { 
              items.length > 0 
                ? <ItemCardList 
                    updateItem={updateItem} 
                    removeItem={removeItem} 
                    items={items} 
                  />
                : <EmptyCart /> 
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

const RowWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
