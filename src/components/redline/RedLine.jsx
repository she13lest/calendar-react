import React, { useState, useEffect } from "react";

const RedLine = () => {
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(new Date());
    }, 1000 * 60);
    return () => {
      clearInterval(interval);
    };
  });
  return <div className="red-line" style={{ timeNow }}></div>;
};

export default RedLine;
