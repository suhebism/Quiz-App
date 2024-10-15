"use client";
// app/subjects/[subjectId]/page.jsx
import { usePathname, useRouter } from "next/navigation";
import quizData from "../../../data/quizData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MoveLeft, Search } from "lucide-react";
import loader from '@/public/animation/loader.json'
import LottieAnimations from "@/components/LottieAnimations";
import Image from "next/image";


export default function ChapterList() {
  const pathname = usePathname(); // Use pathname from next/navigation
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    // Extract subjectId from the pathname
    const subjectId = pathname.split("/")[2]; // Assuming the structure is /subjects/[subjectId]

    console.log("Subject ID:", subjectId); // Log subjectId

    if (subjectId) {
      const foundSubject = quizData.subjects.find(
        (subj) => subj.id === subjectId
      );
      console.log("Found Subject:", foundSubject); // Log found subject

      if (foundSubject) {
        setSubject(foundSubject);
      } else {
        console.warn("No subject found for ID:", subjectId);
      }
    } else {
      console.warn("Subject ID is undefined");
    }

    setLoading(false); // Set loading to false after processing
  }, [pathname]); // Depend on pathname

  if (loading) {
    return (
      <div className="text-white flex items-center justify-center">
        <LottieAnimations animationData={loader} />
      </div>
    );
  }

  if (!subject) {
    return <div className='flex items-center justify-center text-white'>Subject not found!</div>;
  }
  const backToHome=()=>{
    router.push('/subjects')
  }
  return (
    <div className="max-w-sm mx-auto  mt-2 flex flex-col gap-5 px-5">
      <div className="flex items-center justify-between">
      <MoveLeft color="white" size={28} onClick={backToHome} className="" />
      <h1 className="text-white text-xl font-bold text-center">
        {subject.name}
      </h1>
       
        <Search color="white" />
      </div>
      <h1 className="text-white">Select a sub topic</h1>
      <ul className="max-w-sm flex flex-wrap gap-6">
        {subject.chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link href={`/subjects/${subject.id}/${chapter.id}`}>
            <Image  src={chapter.img} width={100} height={100} className='w-40 h-40 rounded-lg object-cover'/>
              <h1 className='text-white font-semibold'>{chapter.name}</h1>
              <p className='text-xs text-[#A9A9A9]'>Levels : {chapter.levels ? chapter.levels.length : 0}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
