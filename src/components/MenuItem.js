import React from 'react';
import styled from 'styled-components';
import {commaizeNumber} from '../utils/commaizeNumber';

const ItemWrapper = styled.div`
  border-bottom: solid 1px #ECECEC;
  padding: 10px 20px;
`;

function MenuItem({ item, onClick }) {
  const renderPrice = () => {
    if (isNaN(item.price)) {
      const priceForMenuStrList = item.price.map(p => {
        const [k, v] = Object.entries(p)[0];
        return `${k}: ${commaizeNumber(v)}원`
      })
      return (
        <ul style={{ margin: '5px 15px' }}>
          {priceForMenuStrList
              .map((priceForMenuStr, idx) => 
                <li style={{ fontSize: '15px' }} key={idx}>
                  {priceForMenuStr}
                </li>)}
        </ul>
      )
    } else {
      return (
        <span style={{ fontSize: '15px' }}>
          {commaizeNumber(item.price) + '원'}
        </span>
      )
    }
  }

  return (
    <ItemWrapper onClick={e => onClick(e, item)}>
      <h4>{item.name}</h4>
      { item.description.length > 0 && <h5 style={{ color: 'gray', fontWeight: 'lighter', margin: '5px auto' }}>{item.description}</h5> }
      { renderPrice() }
    </ItemWrapper>
  )
}

export default MenuItem;