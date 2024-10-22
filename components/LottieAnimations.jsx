// components/LottieAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import { style } from 'motion';

const LottieAnimation = ({ animationData, loop = true, autoplay = true ,className, style}) => {
  return (
    <Lottie 
      animationData={animationData} 
      loop={loop} 
      autoplay={autoplay}
      style={style} // Adjust the size as needed
      className={className}
    />
  );
};

export default LottieAnimation;
