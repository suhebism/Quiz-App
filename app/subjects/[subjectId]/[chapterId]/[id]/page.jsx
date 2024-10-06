"use client"
// app/subjects/[subjectId]/[chapterId]/[levelId]/page.jsx
import { usePathname, useSearchParams } from 'next/navigation';
import quizData from '../../../../../data/quizData'; // Adjust the path as necessary
import { useEffect, useState } from 'react';

export default function QuizPage() {
  const pathname = usePathname(); // Get the current pathname
  const [subject, setSubject] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const segments = pathname.split('/'); // Split the pathname to extract IDs
    const subjectId = segments[2]; // subjectId is at index 2
    const chapterId = segments[3]; // chapterId is at index 3
    const levelId = segments[4]; // levelId is at index 4

    console.log('Subject ID:', subjectId);
    console.log('Chapter ID:', chapterId);
    console.log('Level ID:', levelId);

    // Find the subject based on subjectId
    if (subjectId) {
      const foundSubject = quizData.subjects.find((subj) => subj.id === subjectId);
      if (foundSubject) {
        setSubject(foundSubject);
      } else {
        console.warn('No subject found for ID:', subjectId);
      }
    }

    // Find the chapter based on chapterId
    if (chapterId && subject) {
      const foundChapter = subject.chapters.find((chap) => chap.id === chapterId);
      if (foundChapter) {
        setChapter(foundChapter);
      } else {
        console.warn('No chapter found for ID:', chapterId);
      }
    }

    // Find the level based on levelId
    if (levelId && chapter) {
      const foundLevel = chapter.levels.find((lvl) => lvl.id === levelId);
      if (foundLevel) {
        setLevel(foundLevel);
      } else {
        console.warn('No level found for ID:', levelId);
      }
    }

    setLoading(false); // Set loading to false after processing
  }, [pathname, subject, chapter]); // Depend on pathname, subject, and chapter

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!subject) {
    return <div>Subject not found!</div>;
  }

  if (!chapter) {
    return <div>Chapter not found!</div>;
  }

  if (!level) {
    return <div>Level not found!</div>;
  }

  return (
    <div>
      <h1>{subject.name} - {chapter.name} - {level.name} Quiz</h1>
      {/* Render the quiz questions here */}
      <ul>
        {level.questions.map((question, index) => (
          <li key={index}>{question.text}</li> // Adjust this according to your question structure
        ))}
      </ul>
    </div>
  );
}
