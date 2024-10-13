import Link from "next/link";
import quizData from "../data/quizData";
import Nav from "@/components/Nav";
import Badges from "@/components/Badges";
import QuizCard from '@/components/QuizCard';
import Slider from "@/components/Slider";
export default function Home() {
  const subject = quizData.subjects[0];
  const chapter = subject.chapters[0];
  const level = chapter.levels[0];


  const quizLevelData = {
    subjectName: subject.name,
    chapterName: chapter.name,
    levelsName: level.name,
    levelId: 1,
    subjectUrl: subject.id,
    chapterUrl: chapter.id,
    levelUrl: level.id,
  }
  return (
    <div>
      <Nav />
      <Badges />
      <div className="px-5 flex justify-between items-end my-3">
        <h1 className="text-white text-lg font-black">Active course</h1>
        <Link href="/all-quiz">
          <h1 className="text-white text-sm font-normal underline">View all</h1>
        </Link>
      </div>
      <QuizCard quizLevelData={quizLevelData} />
      <div className="px-5 flex justify-between items-end mt-4">
        <h1 className="text-white text-lg font-black">Featured</h1>
        <h1 className="text-white text-sm font-normal underline">View all</h1>
      </div>
      <Slider/>
    </div>
  );
}
