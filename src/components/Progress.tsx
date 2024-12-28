import React from 'react';

interface ProgressProps {
  current: number;
  total: number;
  score: number;
}

export function Progress({ current, total, score }: ProgressProps) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full max-w-2xl">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          {current}/{total}. kérdés
        </span>
        <span className="text-sm font-medium text-gray-700">
          Pontszám: {score}/{total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}