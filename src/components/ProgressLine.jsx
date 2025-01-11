import React, { useEffect, useState } from "react";
import "./ProgressLine.css";

const ProgressLine = ({ percentage = "0%" }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidth(percentage);
    });
  }, []);

  return (
    <div className="progressVisualFull">
      <div
        style={{
          width: width,
        }}
        className="progressVisualPart"
      />
    </div>
  );
};

export default ProgressLine;
