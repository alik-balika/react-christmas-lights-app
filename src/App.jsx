// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ChristmasLight from "./components/ChristmasLight";

const dull = {
  red: "rgb(89, 30, 30)",
  orange: "rgb(143, 75, 20)",
  yellow: "rgb(115, 120, 25)",
  green: "rgb(28, 112, 46)",
  blue: "rgb(22, 22, 97)",
  purple: "rgb(84, 32, 128)",
  pink: "rgb(110, 27, 99)",
};

const bright = {
  red: "rgb(252, 0, 0)",
  orange: "rgb(255, 144, 8)",
  yellow: "rgb(246, 250, 2)",
  green: "rgb(2, 250, 31)",
  blue: "rgb(5, 54, 250)",
  purple: "rgb(170, 2, 247)",
  pink: "rgb(250, 2, 242)",
};

const App = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalTime, setIntervalTime] = useState(1000);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentColorIndex(
          (prevIndex) => (prevIndex + 1) % Object.keys(bright).length
        );
      }, intervalTime);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, intervalTime]);

  const currentColor = Object.values(bright)[currentColorIndex];

  return (
    <div>
      <div
        style={{
          border: "5px solid black",
          backgroundColor: "gray",
          padding: "200px 20px 200px 20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: "black",
            borderRadius: "5px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          {Object.keys(bright).map((colorName) => (
            <ChristmasLight
              key={colorName}
              color={dull[colorName]}
              shine={bright[colorName] === currentColor}
              shineColor={bright[colorName]}
            />
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <div style={{ textAlign: "center" }}>
          <input
            type="range"
            min="0"
            max="3000"
            step="20"
            value={intervalTime}
            onChange={(e) => setIntervalTime(e.target.value)}
            className="slider"
          />
          <label>Interval Time: {intervalTime} ms</label>
        </div>
      </div>
    </div>
  );
};

export default App;
