import React from "react";
import logo, { ReactComponent } from "../../logo.svg";

const LaceupBanner: React.FunctionComponent = () => {
  return (
    <div className="laceup__row laceup__banner__container">
      <div className="laceup__grid-item--2">
        <div className="test">
          <img src={logo} alt="laceup icon" />
          <p className="laceup__banner__text">LACE UP</p>
        </div>
      </div>
      <div className="laceup__grid-item--2">
        <div className="laceup__search__container">
          <div className="laceup__search__search-box">
            <input type="text" placeholder="Search.." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaceupBanner;
