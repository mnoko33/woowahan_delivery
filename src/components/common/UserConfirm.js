import React from 'react';
import styled from 'styled-components';
import ModalFooter from './ModalFooter';
import { connect } from 'react-redux';

function UserConfirm({ userConfirmState }) {
  const { isVisible, mainMessage, description, handleClickCancelBtn, handleClickConfirmBtn } = userConfirmState;
  if (isVisible) {
    return (
      <Background>
        <Wrapper>
          <Body>
            <MainMessage>
              {mainMessage}
            </MainMessage>
            <Description>
              {description}
            </Description>
          </Body>
          <ModalFooter 
            handleClickCancelBtn={handleClickCancelBtn}
            handleClickConfirmBtn={handleClickConfirmBtn}
            confirmBtnTitle='담기'
            cancelBtnTitle='취소'
            options={{ height: '40px' }}
          />
        </Wrapper>
      </Background>
    )
  } else {
    return null;
  }
}

export default connect(
  state => ({
    userConfirmState: state.userConfirmReducer
  }),
)(UserConfirm);

const Background = styled.div`
  z-index: 99999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Wrapper = styled.div`
  z-index: 99998;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: #FFF;
`;

const Body = styled.div`
  padding: 15px;
  min-height: 100px;
`;

const MainMessage = styled.span`
  display: block;
  font-weight: bolder;
  font-size: 20px;
  text-align: center;
`;

const Description = styled.span`
  display: block;
  font-size: 15px;
  text-align: center;
`;
