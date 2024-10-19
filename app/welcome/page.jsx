import React from 'react'
import Image from 'next/image'
import bird from '@/public/img/bird.png';

const page = () => {
  return (
    <div className='bg-[#75BC7B] h-screen w-full max-w-sm mx-auto  flex flex-col items-center gap-5'>
        <div className='flex flex-col items-center gap-10 mt-32 px-5'>
            <h1 className='text-lg tex-white font-bold text-white text-center'>Do you have knowledge
            about investment?</h1>
            <Image src={bird} width={100} height={100}/>
            <div className='h-1 bg-slate-700 w-8'></div>
        </div>
        <div className='h-1/2 bg-[#161515] w-full rounded-t-3xl py-10'>
        <h1 className='text-lg tex-white font-bold text-white text-center'>Welcome, Future IAS</h1>
        </div>
    </div>
  )
}

export default page
