import React, { useState } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  all: unset;
  width: 60px;
  &:hover {
    cursor: pointer;
  }
`;

function AuthBtn() {
  const [isLogin, setIsLogin] = useState(false)
  const handleAuthBtnClick = () => {
    if (isLogin) {
      // logout 로직
      setIsLogin(isLogin => !isLogin);
    } else {
      // login 페이지로
      setIsLogin(isLogin => !isLogin);
    }
  }
  return (
  <Btn onClick={handleAuthBtnClick}>{isLogin ? '로그아웃' : '로그인'}{isLogin}</Btn>
  )
}

export default AuthBtn;