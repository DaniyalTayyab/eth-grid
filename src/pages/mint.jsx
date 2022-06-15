import React, { useEffect, useState } from "react";
import {
  smallBoxes,
  smallBoxesLength,
  mediumBoxes,
  mediumBoxesLength,
  largeBoxes,
  largeBoxesLength,
  ultraBoxes,
  ultraBoxesLength,
  boxes,
} from "../boxes/boxSizes.js";
import MintCard from "../components/mintCard";
import "../css/styles.css";
import { mint } from "../boxes/mintbox.js";

const Mint = () => {
  // console.log("small boxes: ", smallBoxes);
  // console.log(boxes.length);
  const [smallCtr, setSmallCtr] = useState(0);
  const [mediumCtr, setMediumCtr] = useState(0);
  const [largeCtr, setLaregeCtr] = useState(0);
  const [ultraCtr, setUltraCtr] = useState(0);

  const userInfo = {
    accountNumber: "1234",
  };

  const [mintedSmall, setMintedSmall] = useState(0);

  const mintNow = () => {
    let total = smallCtr + mediumCtr + largeCtr + ultraCtr;
    if (total > 3) {
      alert("Cannot mint more than three nft per account");
      return;
    }

    // console.log(smallBoxes);

    let lastSmallMintedBox = smallBoxes
      .map((box) => box.isUsed)
      .lastIndexOf(true);

    // console.log("last small minted: ", lastSmallMintedBox);

    // // lastSmallMintedBox = lastSmallMintedBox === -1 ? 0 : lastSmallMintedBox;
    // console.log("last small minted: ", lastSmallMintedBox);

    // good so far but need to handle zero index issue
    for (let i = lastSmallMintedBox + 1, j = 0; j < smallCtr; i++, j++) {
      smallBoxes[i].isUsed = true;
    }

    // for (let i = 0; i < mediumCtr; i++) {
    //   mediumBoxes[i].isUsed = true;
    // }

    // for (let i = 0; i < largeCtr; i++) {
    //   largeBoxes[i].isUsed = true;
    // }

    // for (let i = 0; i < ultraCtr; i++) {
    //   ultraBoxes[i].isUsed = true;
    // }

    setMintedSmall((current) =>
      smallBoxes.filter((small) => small.isUsed === true)
    );
    console.log("smallminted", mintedSmall);
    console.log(smallBoxes);

    setHidden((current) => !hidden);
  };

  const handleCross = () => {
    setHidden((current) => !hidden);
  };

  const handleSmallIncrement = () => {
    setSmallCtr((current) => current + 1);
  };

  const handleSmallDecrement = () => {
    setSmallCtr((current) => current - 1);
  };

  const handleMediumDecrement = () => {
    setMediumCtr((current) => current - 1);
  };

  const handleMediumIncrement = () => {
    setMediumCtr((current) => current + 1);
  };

  const handleLargeIncrement = () => {
    setLaregeCtr((current) => current + 1);
  };

  const handleLargeDecrement = () => {
    setLaregeCtr((current) => current - 1);
  };

  const handleUltraIncrement = () => {
    setUltraCtr((current) => current + 1);
  };

  const handleUltraDecrement = () => {
    setUltraCtr((current) => current - 1);
  };

  const [hidden, setHidden] = useState(false);

  return (
    <main className="mint">
      <div className="mint-container">
        <h1 className="mint-container__heading">Max Mint per Transaction: 5</h1>
        <div className="mint-card-container">
          <MintCard
            name="Small"
            counter={smallCtr}
            onIncrement={handleSmallIncrement}
            onDecrement={handleSmallDecrement}
          />
          <MintCard
            name="Medium"
            counter={mediumCtr}
            onIncrement={handleMediumIncrement}
            onDecrement={handleMediumDecrement}
          />
          <MintCard
            name="Large"
            counter={largeCtr}
            onIncrement={handleLargeIncrement}
            onDecrement={handleLargeDecrement}
          />
          <MintCard
            name="Ultra"
            counter={ultraCtr}
            onIncrement={handleUltraIncrement}
            onDecrement={handleUltraDecrement}
          />
        </div>
        <div className="mint-container__pricebox">
          <span className="mint-container__pricebox__pricename">
            Total price:
          </span>
          <div className="mint-container__pricebox__input">$200</div>
        </div>
        <span className="seperator"></span>

        <div className=" u-mt">
          <a href="#" className="btn btn-oval" onClick={mintNow}>
            Mint now
          </a>
        </div>
      </div>
      <div
        // className="mint-modal hidden"
        className={hidden ? "mint-modal" : "hidden"}
      >
        <span className="mint-modal__cross" onClick={handleCross}>
          &times;
        </span>
        <h1 className="mint-modal__heading">Minting in Process</h1>
        <a href="#" className="btn btn-oval">
          View Transaction
        </a>
      </div>
      <div
        // className="overlay hidden"
        className={hidden ? "overlay" : "hidden"}
      ></div>
    </main>
  );
};

export default Mint;
