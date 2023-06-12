import React, { Component } from "react";
import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";
export default class UserPreference4 extends Component {
  render() {
    return (
      <div>
        <div className="header__conatiner__onboarding">
          <Link to="/userpreference3" className="header__svg">
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
          <div className="select__container__heading">Your Role</div>
          <select className="select__container__select">
            <option value="volvo">FULLSTACK DEVELOPER</option>
            <option value="saab">FRONT END DEVELOPER</option>
            <option value="saab">DEVELOPER</option>
            <option value="saab">DEVELOPER</option>
            <option value="saab">REACT DEVELOPER</option>
            <option value="saab">JAVA DEVELOPER</option>
            <option value="saab">BACKEND DEVELOPER</option>
            <option value="saab">DESIGNER</option>
            <option value="saab">UI/UX DEVELOPER</option>
            <option value="saab">PRODUCT MANAGER</option>
            <option value="saab">PRINCIPAL ARCHITECT</option>
            <option value="saab">DEVOPS MANAGER</option>
          </select>
        </div>

        <Link to="/userpreference5" className="main__btn__user">
          <button className="btn__primary">Next</button>
        </Link>
      </div>
    );
  }
}
