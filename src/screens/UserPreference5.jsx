import React, { Component } from "react";

import { Link } from "react-router-dom";
import { SelectInput } from "../components/SelectInput";
import prism from "../assets/prism.svg";

export default class UserPreference5 extends Component {
  render() {
    const options = [
      "C",
      "C++",
      "C#",
      "Java",
      "JavaScript",
      "Python",
      "PHP",
      "Ruby",
      "Rust",
      "TypeScript",
      "Go",
      "Swift",
      "Kotlin",
    ];
    return (
      <div className="main__body">
        <div className="header__conatiner__onboarding">
          <Link to="/userpreference4" className="header__svg">
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
          <div className="header__img">
            <img src={prism} alt="logo" />
          </div>
          <div className="skip__option">skip</div>
        </div>
        <div className="main__wraper">
          <div className="user__details__section">
            <div className="user__details__section__heading">Skills</div>
            <div className="user__details__section__heading__sub">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              repellat nobis aut corporis rerum quibusdam amet nostrum quidem
            </div>
          </div>
          <div className="select__container">
            <div className="select__container__heading">Skills</div>
            <SelectInput options={options} onChange={(e) => {}} />
          </div>
          <Link to="/home" className="main__btn__user">
            <button className="btn__primary">Get Started</button>
          </Link>
        </div>
      </div>
    );
  }
}
