import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <CustomLoaderContainer>
      <div className="spinner"></div>
    </CustomLoaderContainer>
  );
};

export default Loading;

const CustomLoaderContainer = styled.div`
  .spinner {
    width: 56px;
    height: 56px;
    display: grid;
    animation: spinner-plncf9 4s infinite;
  }
  .spinner::before,
  .spinner::after {
    content: '';
    grid-area: 1/1;
    border: 9px solid;
    border-radius: 50%;
    border-color: #07593d #07593d #0000 #0000;
    mix-blend-mode: darken;
    animation: spinner-plncf9 1s infinite linear;
  }
  .spinner::after {
    border-color: #0000 #0000 #f08000 #f08000;
    animation-direction: reverse;
  }
  @keyframes spinner-plncf9 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
