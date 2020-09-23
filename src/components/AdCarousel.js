import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../api';

const CarouselWrapper = styled.div`
  width: 100vw;
  height: 300px;
  overflow: hidden;
  position: relative;
`
const OrderBtn = styled.button`
  all: unset;
  color: #FFF;
  background-color: #2Ac1BC;
  border-radius: 50%;
  line-height: 30px;
  font-weight: bolder;
  font-size: 20px;
  width: 30px;
  height: 30px;
  position: absolute;
  display: flex;
  top: 135px;
  z-index: 9999;
  left: ${props => props.direction === 'left' ? '30px' : null};
  right: ${props => props.direction === 'right' ? '30px' : null};
  &:hover {
    cursor: pointer;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

function AdCarousel() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAdInfos = async () => {
      setAds(await api.getAdInfos());
    }
    fetchAdInfos();
  }, [ads])

  return (
    <CarouselWrapper>
      {ads.map(ad => <Img key={ad.id} src={ad.src} alt={ad.id} />)}
      <OrderBtn direction='left'>{'<'}</OrderBtn>
      <OrderBtn direction='right'>{'>'}</OrderBtn>
    </CarouselWrapper>
  )
}

export default AdCarousel;