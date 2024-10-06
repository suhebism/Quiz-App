"use client"
// app/subjects/[subjectId]/page.jsx
import { usePathname, useRouter } from 'next/navigation';
import quizData from '../../../data/quizData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ChapterList() {
  const pathname = usePathname(); // Use pathname from next/navigation
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract subjectId from the pathname
    const subjectId = pathname.split('/')[2]; // Assuming the structure is /subjects/[subjectId]

    console.log('Subject ID:', subjectId); // Log subjectId

    if (subjectId) {
      const foundSubject = quizData.subjects.find((subj) => subj.id === subjectId);
      console.log('Found Subject:', foundSubject); // Log found subject

      if (foundSubject) {
        setSubject(foundSubject);
      } else {
        console.warn('No subject found for ID:', subjectId);
      }
    } else {
      console.warn('Subject ID is undefined');
    }

    setLoading(false); // Set loading to false after processing
  }, [pathname]); // Depend on pathname

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!subject) {
    return <div>Subject not found!</div>;
  }

  return (
    <div>
      <h1>{subject.name} - Choose a Chapter</h1>
      <ul>
        {subject.chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link href={`/subjects/${subject.id}/${chapter.id}`}>
              {chapter.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
