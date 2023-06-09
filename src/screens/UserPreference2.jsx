import React, { Component } from "react";
import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";
export default class UserPreference2 extends Component {
  render() {
    return (
      <div>
        <div className="header__conatiner__onboarding">
          <Link to="/userpreference1" className="header__svg">
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
          <div className="skip__option">skip</div>
        </div>
        <div className="user__details__section">
          <div className="user__details__section__heading">Your Details</div>
          <div className="user__input__wraper">
            <div className="user__detail__input__label">LINKEDIN*</div>
            <input
              className="user__detail__input"
              type="text"
              placeholder="http://www.linkdin.com/in/john"
            />
          </div>
          <div className="user__input__wraper">
            <div className="user__detail__input__label">GITHUB</div>
            <input
              className="user__detail__input"
              type="text"
              placeholder="http://github.com/john"
            />
          </div>
          <div className="user__input__wraper">
            <div className="user__detail__input__label">WEBSITE</div>
            <input
              className="user__detail__input"
              type="text"
              placeholder="http://personal-website.com"
            />
          </div>
        </div>
        <Link to="/userpreference3" className="main__btn">
          <button className="btn__primary">Get Started</button>
        </Link>
      </div>
    );
  }
}
