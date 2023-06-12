import React, { Component } from "react";
import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";
import RangePicker from "../components/RangePicker";
export default class UserPreference3 extends Component {
  render() {
    return (
      <div className="main__body">
        <div className="header__conatiner__onboarding">
          <Link to="/userpreference2" className="header__svg">
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
        <div className="main__wraper">
          <div className="user__details__section">
            <div className="user__details__section__heading">Day Rate</div>
            <div className="user__details__section__heading__sub">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              repellat nobis aut corporis rerum quibusdam amet nostrum quidem
              perspiciatis ratione.
            </div>
          </div>
          <div className="range__input">
            <RangePicker />
          </div>
          <Link to="/userpreference4" className="main__btn__user">
            <button className="btn__primary">Next</button>
          </Link>
        </div>
      </div>
    );
  }
}
