import React from 'react';

const LevelIndicator = ({ levelId,levelsName }) => {
  // This array controls how many blocks are filled
  const totalLevels = 3; // As per your design, you have 3 blocks for levels
  const blocks = Array.from({ length: totalLevels }, (_, index) => index < levelId);

  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-black text-xs font-light">{levelsName}</p>
      <div className="flex gap-1">
        {blocks.map((isFilled, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] border-[1px] border-black rounded ${
              isFilled ? 'bg-black' : ''
            }`}
            style={{
              // Adjusting border radius based on index for the shape
              borderRadius: index === 0 ? '50% 0 0 50%' : index === 2 ? '0 50% 50% 0' : '0',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LevelIndicator;
