import React from 'react';

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  // Calculate progress as a percentage
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className='mx-5 w-[350px]'>
    <div className="max-w-full bg-white rounded-xl overflow-hidden h-2 ">
      <div className="h-full bg-green-700 w-0 transition-width duration-400 rounded-xl" style={{ width: `${progress}%` }} />
      <p className='text-center text-sm mt-1'>{`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</p>
    </div>
    </div>
  );
};

export default ProgressBar;
