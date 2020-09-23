import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  all: unset;
  background-color: #FFF;
  color: #000;
  padding: 10px;
  width: 400px;
  border-radius: 5px;
`

function AddressInput() {
  const [address, setAddress] = useState('');

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      console.log(address);
    }
  }

  return (
    <StyledInput 
      value={address} 
      onChange={e => setAddress(e.target.value)}
      onKeyPress={e => handleEnterPress(e)}
      placeholder="도로명 주소를 입력해주세요." 
    />
  )
}

export default AddressInput;