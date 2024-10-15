'use client'
import React from 'react'
import quizData from "../../data/quizData";
import Link from 'next/link';
import Image from 'next/image';
import { MoveLeft } from 'lucide-react';
import bird from '@/public/img/bird.png'
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
const page = () => {
  const router = useRouter();
  const backToHome=()=>{
    router.push('/')
  }
  return (
    <motion.div className='max-w-sm mx-auto mt-2 flex flex-col gap-5 px-5'>
      <MoveLeft color='white' size={28} onClick={backToHome} className='cursor-pointer'/>
      <div className='flex items-center justify-between'>
        <h1 className='text-white'>Select a Topic</h1>
        <Search color='white'/>
      </div>
      <ul className='max-w-sm flex flex-wrap gap-5'>
        {quizData.subjects.map((subject) => (
          <li key={subject.id} >
            <Link href={`/subjects/${subject.id}`}>
              <Image  src={subject.img} width={100} height={100} className='w-40 h-40 rounded-lg object-cover'/>
              <div className='text-white font-semibold'>{subject.name}</div>
              <p className='text-xs text-[#A9A9A9]'>Sub topics : {subject.chapters ? subject.chapters.length : 0}</p>
              <p className='text-xs text-[#A9A9A9]'>Level : Beginner to Advance</p>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default page



// import Link from "next/link";
// import quizData from "../data/quizData";
// import Nav from "@/components/Nav";
// import Badges from "@/components/Badges";
// import QuizCard from '@/components/QuizCard';

// export default function Home() {
//   const subject = quizData.subjects[0];
//   const chapter = subject.chapters[0];
//   const level = chapter.levels[0];


//   const quizLevelData = {
//     subjectName: subject.name,
//     chapterName: chapter.name,
//     levelName: level.name,
//     levelId: level.id
//   };

//   return (
//     <div>
//       <Nav />
//       <Badges />
//       <div className="px-5 flex justify-between items-end mt-3">
//         <h1 className="text-white text-lg font-black">Active course</h1>
//         <Link href="/all-quiz">
//           <h1 className="text-white text-sm font-normal underline">View all</h1>
//         </Link>
//       </div>
//       {/* Pass the structured quiz data to QuizCard */}
//       <QuizCard quizLevelData={quizLevelData} />
//     </div>
//   );
// }
