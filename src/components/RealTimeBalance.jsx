// src/components/RealTimeBalance.js
import React, { useEffect, useState } from "react";

const RealTimeBalance = ({ collectedAmount }) => {
  const [realTimeBalance, setRealTimeBalance] = useState(1000);

  // Simulate real-time updates (Replace this with your real-time logic)
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeBalance((prevBalance) => prevBalance + 10); // Example: Adding $10 every interval
    }, 3000); // 3 seconds interval (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className=" font-barlow text-lg  font-bold">
        Real-Time Balance: ${realTimeBalance}
      </div>
    </div>
  );
};

export default RealTimeBalance;
