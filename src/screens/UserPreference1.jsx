import React, { Component } from "react";
import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";
import imgplace from "../assets/imgplace.png";
export default class UserPreference1 extends Component {
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
          <div className="menu"></div>
        </div>
        <div className="main__wraper">
          <div className="walet__container__wraper">
            <div className="walet__container__content">
              <div className="walet__container__content__col__img__wraper">
                <div className="walet__container__content__col__img">
                  <img src={imgplace} alt="img" />
                </div>
                <div className="walet__container__content__col__name">
                  Arsi Jiger
                </div>
              </div>

              <div className="walet__container__content__col">
                <div className="walet__container__content__col__heading">
                  Skill
                </div>
                <div className="walet__container__content__col__skill">
                  <div className="walet__container__col__blank"></div>
                  <div className="walet__container__col__blank"></div>
                  <div className="walet__container__col__blank"></div>
                  <div className="walet__container__col__blank"></div>
                  <div className="walet__container__col__blank"></div>
                  <div className="walet__container__col__blank"></div>
                  <div className="walet__container__col__blank"></div>
                  <div className="walet__container__col__blank"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="user__container__text">
            <div className="user__container__heading">
              <span>You've got your wallet, </span> now let's create your
              profile
            </div>
            <div className="user__container__sub__heading">
              Build your Profile will help you win work
            </div>
          </div>
          <Link to="/userpreference2" className="main__btn__user">
            <button className="btn__primary">Get Started</button>
          </Link>
        </div>
      </div>
    );
  }
}
