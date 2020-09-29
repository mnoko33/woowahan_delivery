import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AddressInput from '../../components/AddressInput';
import AuthBtn from '../../components/AuthBtn';

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  padding: 10px;
  color: #FFF;
  background-color: #2Ac1BC;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  font-weight: bolder;
  font-size: 20px;
  border-radius: 50%;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`

function Header({ history }) {

  const handleLogoClick = () => {
    history.push('/');
  }

  return (
    <StyledHeader>
      <Logo onClick={handleLogoClick}>배달의민족</Logo>
      <AddressInput />
      <AuthBtn />
    </StyledHeader>
  )
}

export default withRouter(Header);