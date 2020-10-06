import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import { GrFormClose } from 'react-icons/gr';

function Modal({ visible, options, title, closeModal, body, footer }) {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  const handleClick = e => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  const modalStyle = options && options.style 
    ? options.style 
    : {};

  const closeBtnOptions = {
    style: {
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
    preIcon: <GrFormClose style={{ fontSize: '30px' }} />
  }
  
  if (visible) {
    return (
      <Background onClick={handleClick}>
        <Wrapper style={modalStyle}>
          <Button 
            options={closeBtnOptions} 
            onClick={closeModal} 
          />
          <Header>
            <span>{title}</span>
          </Header>
          <Body>
            { body }
          </Body>
          <Footer>
            { footer }
          </Footer>
        </Wrapper>
      </Background>
    )
  } else {
    return null
  }
}

export default Modal;

const Background = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 9999;
  width: 500px;
  background-color: #FFF;
  ${props => props.style && css`
    ${props.style}
  `}
`;

const Header = styled.div`
  height: 50px;
  border-bottom: 2px solid #000;
  text-align: center;
  padding: 15px 0;
`;

const Body = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 500px;
`;

const Footer = styled.div`
  padding: 20px;
  height: 70px;
`;