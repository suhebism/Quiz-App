import React from 'react'
import LottieAnimations from './LottieAnimations'
import loader from '@/public/animation/loader.json'
const Loading = () => {
  return (
    <div className='h-screen text-white'>
      <LottieAnimations animationData={loader}  />
    </div>
  )
}

export default Loading
