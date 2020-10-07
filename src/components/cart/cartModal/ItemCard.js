import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import CounterController from '../../common/CounterController';
import { commaizeNumber } from '../../../utils/commaizeNumber';

function ItemCard({ item, updateItem, removeItem }) {
  const { id, cnt, name, price } = item;
  const handleCounterController = (newCnt) => {
    updateItem({ itemId: id, itemCnt: newCnt })
  }
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
          setCount={handleCounterController}
          min={1}
        />
      </RowWrapper>
    </ItemCardWrapper>
  )
}

export default ItemCard;

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