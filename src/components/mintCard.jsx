import React from "react";
import "../css/styles.css";

const MintCard = ({ name, counter, onIncrement, onDecrement }) => {
  return (
    <div className="mint-card">
      <div className="mint-card__heading"></div>
      <div className="mint-card__price">0.001 SOL</div>
      <div className="mint-card__counter-box">
        <a
          className="mint-card__counter-box--inc"
          href="#"
          onClick={onIncrement}
        >
          +
        </a>
        <span className="mint-card__counter-box--count">{counter}</span>
        <a
          className="mint-card__counter-box--dec"
          href="#"
          onClick={onDecrement}
        >
          -
        </a>
      </div>
    </div>
  );
};

export default MintCard;
