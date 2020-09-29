import React, { useEffect, useRef } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { commaizeNumber } from '../utils/commaizeNumber';
import { convertDeliveryTimeToStr, convertDeliveryTipToStr } from '../utils/deliveryInfo';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  padding: 9px;
  max-width: 500px;
  height: 130px;
  display: flex;
  background-color: #FFF;
  border: 1px solid #d9d9d9;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 20px;
`;

const Info = styled.div`
  font-size: 15px;
  width: calc(100% - 120px);
  margin-left: 10px;
`;

const InfoRow = styled.div`
  display: inline-block;
  width: 100%;
  height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Star = styled.span`
  color: #F1C119;
  margin-right: 2px;
  margin-top: 2px;
`;

const Description = styled.span`
  margin-left: 4px;
  color: grey;
`;

const Clock = styled(AiOutlineClockCircle)`
  margin-top: 3px;
  margin-right: 2px;
`;

function RestaurantCard({ restaurant, onClick }) {
  const imgRef = useRef();
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        entry.target.src = entry.target.dataset.src;
      }
    })
  });

  useEffect(() => {
    observer.observe(imgRef.current);
    return () => {
      observer.disconnect();
    }
  })

  return (
    <Wrapper onClick={() => onClick(restaurant.id)}>
      <Img data-src={restaurant.img} ref={imgRef} alt={restaurant.name} />
      <Info>
        <InfoRow>
          <h3>{restaurant.name}</h3>
        </InfoRow>
        <InfoRow>
          <Star>★</Star>
          <span>{restaurant.userRating} |</span>
          <Description>{restaurant.description}</Description>
        </InfoRow>
        <InfoRow>
          <Clock />
          <span>
            {`${convertDeliveryTimeToStr(restaurant.deliveryTime)}분 | ${commaizeNumber(restaurant.minimumOrder)}원`}
          </span>
        </InfoRow>
        <InfoRow>
          <span>
            {`배달팁 ${convertDeliveryTipToStr(restaurant.deliveryTip)}`}
          </span>
        </InfoRow>
      </Info>
    </Wrapper>
  )
}

export default RestaurantCard;