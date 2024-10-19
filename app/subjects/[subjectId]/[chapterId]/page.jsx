"use client"
// app/subjects/[subjectId]/[chapterId]/page.jsx
import { usePathname,useRouter } from 'next/navigation';
import quizData from '../../../../data/quizData'; // Adjust path if necessary
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MoveLeft, Info,Zap,AlarmClock,Layers3, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from '@/components/Loading';

export default function LevelList() {
  const pathname = usePathname(); // Use pathname to get the current path
  const [subject, setSubject] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(false);
  const router =useRouter();
  useEffect(() => {
    // Split pathname to get subjectId and chapterId
    const segments = pathname.split('/'); // Assuming structure is /subjects/[subjectId]/[chapterId]
    const subjectId = segments[2]; // subjectId is at index 2
    const chapterId = segments[3]; // chapterId is at index 3

    console.log('Subject ID:', subjectId); // Log subjectId
    console.log('Chapter ID:', chapterId); // Log chapterId

    if (subjectId) {
      const foundSubject = quizData.subjects.find((subj) => subj.id === subjectId);
      if (foundSubject) {
        setSubject(foundSubject);
      } else {
        console.warn('No subject found for ID:', subjectId);
      }
    }

    if (chapterId && subject) {
      const foundChapter = subject.chapters.find((chap) => chap.id === chapterId);
      if (foundChapter) {
        setChapter(foundChapter);
      } else {
        console.warn('No chapter found for ID:', chapterId);
      }
    }

    setLoading(false); // Set loading to false after processing
  }, [pathname, subject]); // Depend on pathname and subject

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
    <Loading/>
  </div>;
  }

  if (!subject) {
    return <div className='flex items-center justify-center text-white'>Subject not found!</div>;
  }

  if (!chapter) {
    return <div className='flex items-center justify-center text-white'>Chapter not found!</div>;
  }
  const backToHome = () => {
    router.push(`/subjects/${subject.id}`);
  };
  const infoToOPen =()=>{
    setInfo(true)
  }
  const infoToClose =()=>{
    setInfo(false)
  }
  return (
    <motion.div
    initial= { {opacity: 0} }
        animate={{ opacity: 1 }}
        exit= { {opacity: 0} }
        transition= { {ease: "easeInOut", duration: 0.5} }
    className='max-w-sm mx-auto flex flex-col items-center mt-2 gap-5 px-5'>
      <div className="w-full flex items-center justify-between gap-5">
        <MoveLeft color="white" size={32} onClick={backToHome} className='cursor-pointer'/>
        <h1 className="text-white text-xl font-bold text-center">{subject.name} - {chapter.name}</h1>
        <Info className=" text-white cursor-pointer" style={{visibility:'hidden'}} onClick={infoToOPen}/>
        <AnimatePresence>
        {info && (
          <motion.div 
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          exit={{ y: 600 }} // Exit animation
          transition={{ duration: 0.2, ease: "easeInOut" }} 
          className="fixed mt-2 bottom-0 h-screen w-screen bg-[#161515] z-50 flex">
            <MoveLeft onClick={infoToClose} color="white" size={28} className="cursor-pointer mt-2 "/>
            <div className="flex items-center justify-between">
              <h1 className="text-white">
                {subject.name} - {chapter.name} 
              </h1>
              <h1 className="text-white text-xs font-light">
                {/* {level.name} */}
              </h1>

            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
      <Image src={chapter.img} width={100} height={100} className='w-44 h-56 rounded-lg object-cover'/>
      <div className='w-full flex items-center justify-between'>
        <div 
        // onClick={infoToOPen} 
        className='bg-[#242424] rounded-3xl py-3 px-8 text-white flex items-center'><Layers3 color='#75BC7B' className='mr-2'/> : 23 topics</div>
        <div 
        // onClick={infoToOPen}
        className='bg-[#242424] rounded-3xl py-3 px-8 text-white flex items-center'><CalendarDays color='#75BC7B' className='mr-2'/> : 3 Weeks</div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-white font-semibold text-lg'>Sub Topics</h1>
        <h1 className='bg-[#75BC7B] text-xs font-bold rounded-3xl py-2 px-6 text-black flex items-center'><Zap size={18}/>PREMIUM</h1>
      </div>
      <ul className='w-full flex flex-col gap-3'>
        {chapter.levels.map((level) => (
          <Link href={`/subjects/${subject.id}/${chapter.id}/${level.id}`} key={level.id} className=' bg-[#242424] rounded-2xl px-5 py-3 border-[1px] border-[#4e4d4d]'>
            <h1 className='text-white font-semibold'>{level.name}</h1>
            <h1 className='text-xs text-[#A9A9A9]'>Questions : {}</h1>
            <div className='w-full flex items-center justify-between'>
              <h1 className='text-xs text-[#A9A9A9]'>Levels : Beginner to Advance {}</h1>
              <div className='text-xs text-[#A9A9A9] flex items-center gap-2'><AlarmClock size={14}/>1 Weeks</div>
            </div>
          </Link>
        ))}
      </ul>
      
    </motion.div>
  );
}
