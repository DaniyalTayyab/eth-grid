import React, { useState } from "react";
import Box from "../components/box";
import { tileData } from "../boxes/tiles.js";
import "../css/styles.css";

const Home = () => {
  const [hiddenBar, setHiddenBar] = useState(false);

  const handleClick = () => {
    setHiddenBar(true);
  };

  const handleCross = () => {
    setHiddenBar(false);
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
          />
        ))}
      </div>
      <div className={hiddenBar ? "sidebar" : "hidden"}>
        <div className="sidebar__cross-btn" onClick={handleCross}>
          &#10005;
        </div>
      </div>
    </main>
  );
};

export default Home;
