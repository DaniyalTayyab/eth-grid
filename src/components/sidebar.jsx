import zombie from "../assets/zombie.PNG";
import fav from "../assets/love.png";

const SideBar = ({ hiddenBar, handleCross }) => {
  return (
    <div className={hiddenBar ? "sidebar" : "hidden"}>
      <div className="sidebar__cross-btn" onClick={handleCross}>
        &#10005;
      </div>
      <img className="sidebar__image" src={zombie} alt="not found" />
      <span className="sidebar__seperator" />
      <div className="sidebar__nft-container">
        <div className="sidebar__nft-container__id-section">
          <span className="nft-text mr">NFT ID: </span>
          <span className="nft-id">12015</span>
        </div>
        <div className="sidebar__nft-container__details-section">
          <img className="mr" src={fav} alt="fav" />
          <span className="nft-id">4.3k</span>
        </div>
      </div>
      <div className="sidebar__information-block">
        <div className="flex-wrapper">
          <div className="info-text">Name:</div>
          <div className="info-text">David Beckham</div>
        </div>
        <div className="flex-wrapper ">
          <div className="info-text">Bio:</div>
          <div className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
        <div className="flex-wrapper ">
          <div className="info-text">Link:</div>
          <div className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
        <div className="flex-wrapper ">
          <div className="info-text">Owner:</div>
          <div className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
