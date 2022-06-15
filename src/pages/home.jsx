import React, { useState } from "react";
import Box from "../components/box";
import { tileData } from "../boxes/tiles.js";
import "../css/styles.css";
import SideBar from "../components/sidebar";
import Popup from "../components/popup";

const Home = () => {
  const [hiddenBar, setHiddenBar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handleClick = () => {
    setHiddenBar((current) => !hiddenBar);
  };

  const handleCross = () => {
    setHiddenBar((current) => !hiddenBar);
  };

  const handleHover = (event) => {
    setShowPopup((current) => !showPopup);
    setLeft(event.currentTarget.style.left);
    setTop(event.currentTarget.style.top);
  };

  return (
    <main className="main">
      <div className="main__grid-box">
        {tileData.map((box, index) => (
          <Box
            key={index}
            type={box.type}
            coordinates={box.coordinates}
            occupied={box.occupied}
            url={box.url}
            index={index}
            handleClick={handleClick}
            handleHover={handleHover}
          />
        ))}
      </div>

      <SideBar hiddenBar={hiddenBar} handleCross={handleCross} />
      <Popup showPopup={showPopup} top={top} left={left} />
    </main>
  );
};

export default Home;
