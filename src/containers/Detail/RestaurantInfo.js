import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Star from '../../components/Star';
import Button from '../../components/Button';
import { HiOutlinePhone, HiHeart, HiOutlineHeart, HiOutlineShare } from 'react-icons/hi';
import { updateRestaurantInfo } from '../../modules/restaurant';
import { setClipboard } from '../../utils/setClipboard';

const Wrapper = styled.div`
  max-width: 650px;
  height: 300px;
  margin: auto;
  padding: 50px;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  background-color: #FFF;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;

const Devider = styled.span`
  color: gray;
`;

const Span = styled.span`
  display: inline-block;
  width: ${props => (props.style && props.style.width) || '200px'};
  font-size: ${props => (props.style && props.style.fontSize) || '16px'};
  margin-top: 10px;
`;

const buttonStyle = {
  width: '30%',
  height: '50px',
  marginTop: '50px'
}

function RestaurantInfo(props) {
  const { restaurantInfo, updateRestaurantInfo } = props;

  const handlePhoneButtonClick = () => {
    alert(restaurantInfo.phoneNumber)
  }

  const handlePickButtonClick = () => {
    updateRestaurantInfo({
      id: restaurantInfo.id,
      data: { isPicked: !restaurantInfo.isPicked }
    })
  }

  const handleShareButtonClick = () => {
    setClipboard(window.location.href);
    alert('주소가 복사됐습니다.')
  }

  return (
    <Wrapper>
      <h1>{restaurantInfo.name}</h1>
      <div>
        <Span style={{ fontSize: '25px' }}>
          <Star userRating={restaurantInfo.userRating}/>
          {restaurantInfo.userRating}
        </Span>
      </div>
      <div>
        <Span>{`최근리뷰 ${restaurantInfo.recentlyReviewCnt}`}</Span>
        <Devider>|</Devider>
        <Span>{`최근사장님댓글 ${restaurantInfo.recentlyOwnerCommentCnt}`}</Span>
      </div>
      <div>
        <Button 
          options={{ 
            title: '전화', 
            icon: <HiOutlinePhone />, 
            style: buttonStyle
          }}
          onClick={handlePhoneButtonClick} 
        />
        <Devider>|</Devider>
        <Button 
          options={{ 
            title: `찜 ${restaurantInfo.pickCnt}`,
            icon: restaurantInfo.isPicked ? <HiHeart /> : <HiOutlineHeart />,
            style: buttonStyle
          }}
          onClick={handlePickButtonClick} />
        <Devider>|</Devider>
        <Button 
          options={{ 
            title: '공유',
            icon: <HiOutlineShare />,
            style: buttonStyle
          }}
          onClick={handleShareButtonClick} 
        />
      </div>
    </Wrapper>
  )
}

export default connect(
  null,
  { updateRestaurantInfo }
)(RestaurantInfo);