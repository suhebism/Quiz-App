import React from 'react'
import WelcomeSlider from '@/components/WelcomeSlider';
import Link from 'next/link';

const page = () => {
  return (
    <div className='bg-[#75BC7B] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-full max-w-sm mx-auto flex flex-col items-center gap-5'>
      <div className='h-1/2 flex items-center'>
      <WelcomeSlider />

      </div>
        
        <div className='h-1/2 bg-[#161515] w-full rounded-t-3xl py-10 flex flex-col gap-10 items-center'>
        <h1 className='text-lg tex-white font-bold text-white text-center'>Welcome, Future IAS</h1>
        <div className='flex gap-6'>
          <Link href='/login' className='h-12 w-32 flex items-center justify-center rounded-full font-medium bg-[#75BC7B]'>Login</Link>
          <Link href='/signup' className='h-12 w-32 flex items-center justify-center rounded-full font-medium bg-white'>Signup</Link>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <p className='text-white'>or via social media</p>
          <div className='flex items-center gap-8'>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/facebook.svg" alt="Facebook" />
      </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/google.svg" alt="Facebook" />
      </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/whatsapp.svg" alt="Facebook" />
      </Link>
          </div>
        </div>
        </div>
    </div>
  )
}

export default page
