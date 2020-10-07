import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { getStarByUserRatingScale5 } from '../../utils/getStarByUserRating';

const iconStyle = {
  paddingTop: '2px',
  margin: '0 3px'
}

function Star({ userRating }) {
  const getStarList = getStarByUserRatingScale5(userRating)
    .reduce((stars, starCnt, idx) => {
      if (idx === 0) {
        for (let i = 0; i < starCnt; i++) {
          stars.push(<BsStarFill style={iconStyle} key={stars.length} />)
        }
        return stars;
      } else if (idx === 1) {
        for (let i = 0; i < starCnt; i++) {
          stars.push(<BsStarHalf style={iconStyle} key={stars.length} />)
        }
        return stars;
      } else {
        for (let i = 0; i < starCnt; i++) {
          stars.push(<BsStar style={iconStyle} key={stars.length} />)
        }
        return stars;
      }
    }, [])

  return (
    <span style={{ color: '#F1C119' }}>
      {getStarList}
    </span>
  )
}

export default Star;