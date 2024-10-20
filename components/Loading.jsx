import React from 'react'
import Lottie from 'lottie-react'
import loader from '@/public/animation/loader.json'
const Loading = () => {
  return (
    <div className='h-screen text-white flex items-center justify-center '>
      <Lottie animationData={loader} loop={true} style={{ width: 50, height: 50 }} />
    </div>
  )
}

export default Loading
