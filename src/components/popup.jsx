import zombie from "../assets/zombie.PNG";

const Popup = ({ showPopup, left, top }) => {
  return (
    <div
      className={showPopup ? "pop-up" : "hidden"}
      style={{ left: left, top: top }}
    >
      <img className="popup-image" src={zombie} alt="zombie" />
      <div>
        <span className="pop-text mr">NFT ID: </span>
        <span className="pop-id">12015</span>
      </div>
      <div className="popup-info">
        <div className="popup-wrpper">
          <div className="popup-info-text">Name:</div>
          <div className="popup-info-text">David Beckham</div>
        </div>
        <div className="popup-wrpper">
          <div className="popup-info-text">Description:</div>
          <div className="popup-info-text">
            This is demo description, just ignore it.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
