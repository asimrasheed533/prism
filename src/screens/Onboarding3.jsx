import React, { Component } from "react";

import { Link } from "react-router-dom";
import pri2 from "../assets/pri2.png";
import prism from "../assets/prism.svg";

export default class Onboarding3 extends Component {
  render() {
    return (
      <div className="main__body">
        <div className="header__conatiner__onboarding">
          <Link to="/Onboarding2" className="header__svg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 8H1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 15L1 8L8 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div
            className="header__img"
            style={{
              marginLeft: "-1em",
            }}
          >
            <img src={prism} alt="logo" />
          </div>
          <div className="menu"></div>
        </div>
        <div className="main__wraper">
          <div className="onboading__img__section">
            <div className="onboading__img">
              <img src={pri2} alt="pri2" />
            </div>
            <div className="onboading__text">Earn, Reward, Stake, Vote</div>
          </div>
          <Link to="/onboarding4" className="main__btn">
            <button className="btn__primary">Next</button>
          </Link>
        </div>
      </div>
    );
  }
}
