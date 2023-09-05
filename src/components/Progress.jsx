// src/components/Progress.js
import React from "react";

const Progress = ({ collectedAmount, collectionTarget }) => {
  const progressPercentage = (collectedAmount / collectionTarget) * 100;

  return (
    <div>
      <div className=" font-barlow text-lg  font-bold">
        Collected: ${collectedAmount} / ${collectionTarget}
      </div>
      <div>
        <div
          className=" font-barlow text-lg  font-bold"
          style={{ width: `${progressPercentage}%` }}
        >
          Progress: {progressPercentage.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default Progress;
