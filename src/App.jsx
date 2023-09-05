// src/App.js
import React, { useState } from "react";
import CollectionTarget from "./components/CollectionTarget";
import Progress from "./components/Progress";
import RealTimeBalance from "./components/RealTimeBalance";

const App = () => {
  const [collectionTarget, setCollectionTarget] = useState(1000000);
  const [collectedAmount, setCollectedAmount] = useState(10000);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Fundraiser Application</h1>
        <CollectionTarget setCollectionTarget={setCollectionTarget} />
        <Progress
          collectedAmount={collectedAmount}
          collectionTarget={collectionTarget}
        />
        <RealTimeBalance collectedAmount={collectedAmount} />
      </div>
    </div>
  );
};

export default App;
