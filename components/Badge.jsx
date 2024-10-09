"use client"
import React,{useState} from 'react';
import Image from 'next/image';

const Badge = ({ name, icon, primary, secondary }) => {
  return (
    <div className={`w-32 h-8 my-2 rounded-3xl flex items-center p-1 ${secondary}`}>
      <div className={`h-7 w-7 rounded-full flex items-center justify-center ${primary}`}>
        <Image src={icon} width={18} height={18} alt={`${name} icon`} />
      </div>
      <h1 className='text-center text-xs ml-1 text-black'>{name}</h1>
    </div>
  );
};

export default Badge;
