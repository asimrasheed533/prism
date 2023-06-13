import React, { Component } from "react";
import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";
import pri3 from "../assets/pri3.png";
export default class Onboarding4 extends Component {
  render() {
    return (
      <div className="main__body">
        <div className="header__conatiner__onboarding">
          <Link to="/onboarding3" className="header__svg">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 15L1 8L8 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <div className="header__img">
            <img src={prism} alt="logo" />
          </div>
          <div className="menu"></div>
        </div>
        <div className="main__wraper">
          <div className="onboading__img__section">
            <div className="onboading__img__last">
              <img src={pri3} alt="image" />
            </div>
            <div className="onboading__text">Go anonymous, D&!</div>
          </div>
          <Link to="/signup" className="main__btn">
            <button className="btn__primary">Let's Go</button>
          </Link>
        </div>
      </div>
    );
  }
}
