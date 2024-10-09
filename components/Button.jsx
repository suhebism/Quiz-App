import React from 'react'
import { Play } from 'lucide-react'

const Button = () => {
  return (
    <div className='px-8 h-14 bg-black rounded-full text-white flex items-center justify-between'>
      <h1 className='text-xl font-semibold '>Continue Learning...</h1>
      {/* <div className=''></div> */}
      <Play strokeWidth={4}/>

    </div>
  )
}

export default Button
