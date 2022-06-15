import React, { useState } from "react";
import "../css/styles.css";

const Box = ({ type, coordinates }) => {
  return (
    <div
      style={{
        border: "1px solid #fece2f",
        width:
          type === "small"
            ? "20px"
            : type === "medium"
            ? "40px"
            : type === "large"
            ? "60px"
            : type === "mega"
            ? "100px"
            : type === "ultra"
            ? "160px"
            : "20px",
        height:
          type === "small"
            ? "20px"
            : type === "medium"
            ? "40px"
            : type === "large"
            ? "60px"
            : type === "mega"
            ? "100px"
            : type === "ultra"
            ? "160px"
            : "20px",
        position: "absolute",
        top: coordinates.top,
        left: coordinates.left,
      }}
    />
  );
};

export default Box;
