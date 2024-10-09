import React from 'react'
import quizData from "../../data/quizData";
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1>Choose a Subject</h1>
      <ul>
        {quizData.subjects.map((subject) => (
          <li key={subject.id}>
            <Link href={`/subjects/${subject.id}`}>
              <div>{subject.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
