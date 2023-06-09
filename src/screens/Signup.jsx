import React, { Component } from "react";

import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";

export default class Signup extends Component {
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
        <div className="main__body">
          <div className="main__wraper__sign">
            <div className="signup__form__container">
              <form className="form__wraper">
                <div className="signup__form__container__heading">
                  Create Your Account
                </div>
                <div className="sign__container">
                  <div className="sign__container__heading">First Name</div>
                  <input
                    className="form__wraper__input"
                    type="text"
                    placeholder="First Name"
                  />
                  <div className="input__error">please provide first name</div>
                </div>

                <div className="sign__container">
                  <div className="sign__container__heading">Last Name</div>
                  <input
                    className="form__wraper__input"
                    type="text"
                    placeholder="Last Name"
                  />
                  <div className="input__error">please provide last name</div>
                </div>
                <div className="sign__container">
                  <div className="sign__container__heading">Your Email</div>
                  <input
                    className="form__wraper__input"
                    type="email"
                    placeholder="Your Email"
                  />
                  <div className="input__error">
                    please provide email address
                  </div>
                </div>
                <div className="sign__container">
                  <div className="sign__container__heading">Enter Password</div>
                  <input
                    className="form__wraper__input"
                    type="password"
                    placeholder="Enter password"
                  />
                  <div className="input__error">please provide password</div>
                </div>
                <div className="sign__container">
                  <div className="sign__container__heading">
                    Confirm Password
                  </div>
                  <input
                    className="form__wraper__input"
                    type="password"
                    placeholder="Enter Confirm password"
                  />
                  <div className="input__error">
                    please provide confirm password
                  </div>
                </div>

                <div className="input__term">
                  <input type="checkbox" />
                  <div className="input__term__text">
                    I accept the <span>Terms and Conditions</span>
                  </div>
                </div>
                <Link to="/signin" className="signup__btn__wraper">
                  <button className="signup__btn">Create an account</button>
                </Link>
                <div className="signup__form__container__footer">
                  Already have an account? <Link to="/signin">Login here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
