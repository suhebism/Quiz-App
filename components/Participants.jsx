import React from 'react'
import Image from 'next/image'
import participant1 from '@/public/img/participants.png'
import participant2 from '@/public/img/participants2.png'
import participant3 from '@/public/img/participants3.png'
const Participants = () => {
  return (
    <div className="flex flex-row-reverse items-center">
      <Image className='-m-4 w-10 h-10' width={40} height={40} src={participant3} alt='participants' />
      <Image className='-m-2 w-10 h-10' width={40} height={40} src={participant2} alt='participants'/>
      <Image className='-m-4 w-10 h-10' width={40} height={40} src={participant1} alt='participants'/>
    </div>
  )
}

export default Participants
