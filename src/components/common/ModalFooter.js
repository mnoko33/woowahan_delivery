import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function ModalFooter({ handleClickCancelBtn, handleClickConfirmBtn, cancelBtnTitle, confirmBtnTitle, options }) {
  const defaultOptions = {
    width: '100%', 
    height: '100%', 
    borderRadius: '5px', 
    textAlign: 'center',
    ...options,
  }

  return (
    <FooterWrapper>
      <Button 
        options={{ 
          style: { 
            ...defaultOptions,
            backgroundColor: '#DEDEDE' 
          },
          title: cancelBtnTitle
        }} 
        onClick={handleClickCancelBtn}
      />
      <Button 
        options={{ 
          style: { 
            ...defaultOptions,
            backgroundColor: '#2AC1BC', 
            color: '#FFF' 
          },
          title: confirmBtnTitle,
        }}
        onClick={handleClickConfirmBtn}
      />
    </FooterWrapper>
  )
}

export default ModalFooter;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
`;