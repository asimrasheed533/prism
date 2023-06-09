import React, { Component } from "react";
import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";
export default class UserPreference5 extends Component {
  render() {
    return (
      <div>
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
          <div className="user__details__section__heading">Day Rate</div>
          <div className="user__details__section__heading__sub">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            repellat nobis aut corporis rerum quibusdam amet nostrum quidem
          </div>
        </div>
        <div className="select__container">
          <div className="select__container__heading">Skill</div>
          <select className="select__container__select">
            <option value="volvo">C</option>
            <option value="volvo">C++</option>
            <option value="volvo">Java</option>
            <option value="volvo">JavaScript</option>
            <option value="volvo">JavaEE</option>
            <option value="volvo">Spring FrameWork</option>
            <option value="volvo">.NET</option>
            <option value="volvo">C#</option>
            <option value="volvo">Next.js</option>
            <option value="volvo">Nest.js</option>
            <option value="volvo">React.js</option>
            <option value="volvo">HTML/CSS</option>
            <option value="volvo">ELIXIR</option>
            <option value="volvo">TAILWINDCSS</option>
            <option value="volvo">ERLANG</option>
            <option value="volvo">PHP</option>
            <option value="volvo">DRAFT</option>
            <option value="volvo">Android</option>
          </select>
        </div>

        <Link to="/userpreference6" className="main__btn">
          <button className="btn__primary">Next</button>
        </Link>
      </div>
    );
  }
}
