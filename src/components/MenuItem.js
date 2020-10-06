import React from 'react';
import styled from 'styled-components';
import {commaizeNumber} from '../utils/commaizeNumber';

const ItemWrapper = styled.div`
  border-bottom: solid 1px #ECECEC;
  padding: 10px 20px;
`;

function MenuItem({ item, onClick }) {
  return (
    <ItemWrapper onClick={e => onClick(e, item)}>
      <h4>{item.name}</h4>
      { 
        item.description.length > 0 && 
        <h5 style={{ color: 'gray', fontWeight: 'lighter', margin: '5px auto' }}>
          {item.description}
        </h5> 
      }
      <span style={{ fontSize: '15px' }}>
        {commaizeNumber(item.price) + '원'}
      </span>
    </ItemWrapper>
  )
}

export default MenuItem;