import React, { Component } from "react";

import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";

export default class Signin extends Component {
  render() {
    return (
      <div className="main__body__sign">
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
          <div className="header__img">
            <img src={prism} alt="logo" />
          </div>
          <div className="menu"></div>
        </div>
        <div className="main__wraper__sign">
          <div className="signup__form__container">
            <form className="form__wraper">
              <div className="signup__form__container__heading">
                Sign in to your account
              </div>

              <div className="sign__container">
                <div className="sign__container__heading">Email</div>
                <input
                  className="form__wraper__input"
                  type="email"
                  placeholder="name@company.com"
                />
                <div className="input__error">please provide email address</div>
              </div>
              <div className="sign__container">
                <div className="sign__container__heading">Password</div>
                <input
                  className="form__wraper__input"
                  type="password"
                  placeholder="Enter password"
                />
                <div className="input__error">please provide password</div>
              </div>

              <Link to="/userpreference1" className="signup__btn__wraper">
                <button className="signup__btn">Sign In</button>
              </Link>
              <div className="signup__form__container__footer">
                Don’t have an account yet?{" "}
                <span>
                  <Link to="/signup">Sign up</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
