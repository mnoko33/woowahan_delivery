import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function CounterController({ count, setCount, min, max }) {
  const decreaseCount = () => {
    setCount(count - 1);
  }

  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
    <Wrapper>
      <Button 
        options={{ 
          title: '-', 
          disabled: min && count === min 
        }}
        onClick={decreaseCount}
      />
        <span>{count}</span>
      <Button 
        options={{ 
          title: '+',
          disabled: max && count === max
        }}
        onClick={increaseCount}
      />
    </Wrapper>
  )
}

export default CounterController;

const Wrapper = styled.div`
width: 150px;
border: 1px solid #ECECEC;
border-radius: 15px;
padding: 10px;
display: flex;
justify-content: space-between;
`;