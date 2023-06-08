import React, { Component } from "react";
import prism from "../assets/prism.svg";
export default class Onboarding2 extends Component {
  render() {
    return (
      <div className="main__body">
        <div className="header__conatiner__onboarding">
          <div className="header__svg">
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
          </div>
          <div className="header__img">
            <img src={prism} alt="logo" />
          </div>
          <div className="menu"></div>
        </div>
      </div>
    );
  }
}
