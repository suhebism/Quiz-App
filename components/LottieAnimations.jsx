// components/LottieAnimation.js
import React from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({ animationData, loop = true, autoplay = true ,className}) => {
  return (
    <Lottie 
      animationData={animationData} 
      loop={loop} 
      autoplay={autoplay}
      style={{ width: 300, height: 300 }} // Adjust the size as needed
      className={className}
    />
  );
};

export default LottieAnimation;
