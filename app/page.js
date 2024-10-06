// pages/index.js
import Link from 'next/link';
import quizData from '../data/quizData';

export default function Home() {
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
  );
}

