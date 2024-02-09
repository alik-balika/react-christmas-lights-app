// eslint-disable-next-line no-unused-vars
import React from "react";
import PropType from "prop-types";

const ChristmasLight = ({ color, shine, shineColor }) => {
  const animationStyle = shine
    ? {
        backgroundColor: shineColor,
        boxShadow: "0 0 20px " + shineColor,
      }
    : {
        backgroundColor: color,
      };

  return (
    <div style={{ position: "relative" }}>
      {/* LIGHT */}
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100px 7px 100px 30px",
          rotate: "134deg",
          boxShadow: animationStyle.boxShadow,
          backgroundColor: animationStyle.backgroundColor,
        }}
      ></div>
      {/* THING THAT ATTACHES LIGHT TO WIRE */}
      <div
        style={{
          width: "30px",
          height: "40px",
          backgroundColor: "black",
          position: "absolute",
          top: -30,
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "5px",
        }}
      ></div>
    </div>
  );
};

ChristmasLight.propTypes = {
  color: PropType.string.isRequired,
  shine: PropType.bool,
  shineColor: PropType.string.isRequired,
};

export default ChristmasLight;
