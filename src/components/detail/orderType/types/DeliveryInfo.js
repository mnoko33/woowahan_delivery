import React from 'react';
import { Table, Tr, Th, Td } from '../../../common/Table';
import styled from 'styled-components';
import { commaizeNumber } from '../../../../utils/commaizeNumber';

function DeliveryInfo({ deliveryInfo }) {
  const { minimumOrder, paymentType, deliveryTime, deliveryTip } = deliveryInfo;
  const makeDeliveryTimeStr = deliveryTime => `${deliveryTime[0]}~${deliveryTime[1]}분 소요 예상`;
  const makeDeliveryTipStr = deliveryTip => {
    let minTip, maxTip
    if (deliveryTip.length > 1) {
      minTip = deliveryTip[0];
      maxTip = deliveryTip[1];
    } else {
      minTip = 0;
      maxTip = deliveryTip[0];
    }
    return `${commaizeNumber(minTip)}원 ~ ${commaizeNumber(maxTip)}원`
  };

  return (
    <Wrapper>
      <SubTitle>
        <h3>배달주문</h3>
      </SubTitle>
      <Table>
        <tbody>
          <Tr>
            <Th>최소주문금액</Th>
            <Td>{commaizeNumber(minimumOrder) + '원'}</Td>
          </Tr>
          <Tr>
            <Th>결제방법</Th>
            <Td>{paymentType.join(', ')}</Td>
          </Tr>
          <Tr>
            <Th>배달시간</Th>
            <Td>{makeDeliveryTimeStr(deliveryTime)}</Td>
          </Tr>
          <Tr>
            <Th>배달팁</Th>
            <Td>{makeDeliveryTipStr(deliveryTip)}</Td>
          </Tr>
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default DeliveryInfo;

const Wrapper = styled.div`
  width: 48%;
  margin: 1%;
`;

const SubTitle = styled.div`
  text-align: center;
  padding-bottom: 5px;
  border-bottom: 3px solid #000;
`;
