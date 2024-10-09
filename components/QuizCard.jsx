import React from "react";
import Link from "next/link";
import Button from "./Button";
import { BookMarked, AlarmClock } from "lucide-react";
import LevelIndicator from "./LevelIndicator";
import Participants from "./Participants";
const QuizCard = ({ quizLevelData }) => {
  const { subjectName, chapterName, levelsName, levelId , subjectUrl, chapterUrl, levelUrl,} = quizLevelData;
  return (
    <Link 
      href={`/subjects/${subjectUrl}/${chapterUrl}/${levelUrl}`}
      className="mx-5 p-5 w-[350px] h-[300px] bg-[#75BC7B] rounded-3xl flex flex-col justify-between"
    >
      <div className="flex flex-col justify-between gap-3">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-black font-extrabold text-3xl w-1/2">
            {subjectName}
          </h1>
          <div className="font-light text-xs">
            <LevelIndicator levelId={levelId} levelsName={levelsName} />
          </div>
        </div>
        <div className="flex gap-2">
          <BookMarked strokeWidth={2} size={20} color="black" />
          <p className="font-normal text-black text-sm">
            <span className="font-bold">
            Subject
            </span>{` - Chapter ${chapterName}`}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-1 mx-2">
          <div className="flex gap-1 items-end">
            <AlarmClock color='#741E2D' strokeWidth={2.5} size={20}/>  
            <p className="font-bold text-xs text-[#741E2D]">1 week left</p>
          </div>
          <div className="flex items-center ">
            <p className="font-semibold text-black text-sm mr-4">+25</p>
            <Participants />
          </div>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
