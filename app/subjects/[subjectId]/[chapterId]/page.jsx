"use client"
// app/subjects/[subjectId]/[chapterId]/page.jsx
import { usePathname } from 'next/navigation';
import quizData from '../../../../data/quizData'; // Adjust path if necessary
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LevelList() {
  const pathname = usePathname(); // Use pathname to get the current path
  const [subject, setSubject] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return <div>Loading...</div>;
  }

  if (!subject) {
    return <div>Subject not found!</div>;
  }

  if (!chapter) {
    return <div>Chapter not found!</div>;
  }

  return (
    <div>
      <h1>{subject.name} - {chapter.name} - Choose a Level</h1>
      <ul>
        {chapter.levels.map((level) => (
          <li key={level.id}>
            <Link href={`/subjects/${subject.id}/${chapter.id}/${level.id}`}>
              {level.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
