import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Logo() {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push('/');
  }
  return (
    <LogoWrapper onClick={handleLogoClick}>
      배달의민족
    </LogoWrapper>
  )
  
}

export default Logo;

const LogoWrapper = styled.div`
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