import React, { useEffect, useRef } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { commaizeNumber } from '../utils/commaizeNumber';
import { convertDeliveryTimeToStr, convertDeliveryTipToStr } from '../utils/deliveryInfo';
import styled from 'styled-components';

const Wrapper = styled.table`
  padding: 10px;
  height: 120px;
  display: flex;
  background-color: #FFF;
  border: 1px solid #d9d9d9;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  border-radius: 30px;
  height: 100px;
  width: 100px;
`;

// const Content = styled.div`
//   width: calc(100% - 100px);
//   margin: 5px 10px;
// `;

const Name = styled.span`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
`;

const UserRating = styled.span`
  font-size: 13px;
  display: inline-block;
  width: 40px;
`;

const Subscription = styled.span`
  font-size: 13px;
  display: inline-block;
  width: calc(100% - 60px);
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  color: grey;
`;

const DeliveryInfo = styled.span`
font-size: 12px;
  display: inline-block;
`;

const DeliveryTip = styled.div`
  font-size: 12px;
`;

function RestaurantCard({ restaurant }) {
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
    <Wrapper>
      <tbody>
        <tr>
          <td>
            <Img data-src={restaurant.img} ref={imgRef} alt={restaurant.name} />
          </td>
          <td>
            <Name>{restaurant.name}</Name>
            {/* <UserRating> */}
              <span style={{ color: '#F1C119' }}>★ </span>
              <span>{restaurant.userRating}</span>
            {/* </UserRating> */}
          </td>
        </tr>
      </tbody>
    </Wrapper>
    // <div>
    //   <img data-src={restaurant.img} ref={imgRef} />
    // </div>
    // <Wrapper>
    //   <Img data-src={restaurant.img} ref={imgRef} />
    //   <Content>
    //     <Name>{restaurant.name}</Name>
    //     <div>
    //       <UserRating>
    //         <span style={{ color: '#F1C119' }}>★ </span>
    //         <span>{restaurant.userRating}</span>
    //       </UserRating>
    //       <Subscription>{restaurant.subscription}</Subscription>
    //     </div>
    //     <React.Fragment>
    //       <AiOutlineClockCircle />
    //       <DeliveryInfo>
    //         {`${convertDeliveryTimeToStr(restaurant.deliveryTime)}분, ${commaizeNumber(restaurant.minimumOrder)}원`}
    //       </DeliveryInfo>
    //     </React.Fragment>
    //     <React.Fragment>
    //       <DeliveryTip>
    //         {`배달팁 ${convertDeliveryTipToStr(restaurant.deliveryTip)}`}
    //       </DeliveryTip>
    //     </React.Fragment>
    //   </Content>
    // </Wrapper>
  )
}

export default RestaurantCard;