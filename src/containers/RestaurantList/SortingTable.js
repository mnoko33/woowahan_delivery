import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding: 0 10px;
  border-bottom: 1px solid #000;
`;

function SortingTable() {
  return (
    <Wrapper>
      정렬 부분입니다.
    </Wrapper>
  )
}

export default SortingTable;