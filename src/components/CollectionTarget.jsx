// src/components/CollectionTarget.js
import React, { useState } from "react";

const CollectionTarget = ({ setCollectionTarget }) => {
  const [target, setTarget] = useState("");

  const handleSetTarget = () => {
    setCollectionTarget(Number(target));
  };

  return (
    <div>
      <input
        className=" p-1 outline-blue-600 m-2 font-barlow"
        type="number"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button
        className="rounded-full text-white font-barlow bg-blue-700 px-3 py-1 text-sm"
        onClick={handleSetTarget}
      >
        Set Target
      </button>
    </div>
  );
};

export default CollectionTarget;
