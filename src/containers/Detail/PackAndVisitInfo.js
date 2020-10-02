import React from 'react';
import { Table, Tr, Th, Td } from '../../components/Table';
import styled from 'styled-components';
import { commaizeNumber } from '../../utils/commaizeNumber';

const Wrapper = styled.div`
  width: 48%;
  margin: 1%;
`;

const SubTitle = styled.div`
  text-align: center;
  padding-bottom: 5px;
  border-bottom: 3px solid #000;
`;

function PackAndVisitInfo({ packInfo }) {
  const { minimumOrder, orderType, address, cookingTime, paymentType } = packInfo;
  const makeCookingTimeStr = cookingTime => `${cookingTime[0]}~${cookingTime[1]}분 소요 예상`;
  const makeOrderTypeStr = orderType => orderType
      .filter(type => type !== '배달')
      .join(', ')

  return (
    <Wrapper>
      <SubTitle>
        <h3>포장/방문주문</h3>
      </SubTitle>
      <Table>
        <tbody>
          <Tr>
            <Th>최소주문금액</Th>
            <Td>{commaizeNumber(minimumOrder) + '원'}</Td>
          </Tr>
          <Tr>
            <Th>이용방법</Th>
            <Td>{makeOrderTypeStr(orderType)}</Td>
          </Tr>
          <Tr>
            <Th>조리시간</Th>
            <Td>{makeCookingTimeStr(cookingTime)}</Td>
          </Tr>
          <Tr>
            <Th>위치안내</Th>
            <Td>{address}</Td>
          </Tr>
          <Tr>
            <Th>결제방법</Th>
            <Td>{paymentType.join(', ') }</Td>
          </Tr>
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default PackAndVisitInfo;