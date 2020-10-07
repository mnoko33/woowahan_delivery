import React from 'react';
import styled from 'styled-components';
import AddressInput from './AddressInput';
import AuthBtn from './AuthBtn';
import Logo from './Logo';

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <AddressInput />
      <AuthBtn />
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px;
  color: #FFF;
  background-color: #2AC1BC;
  display: flex;
  justify-content: space-between;
`;