import React, { Component } from "react";

import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";

export default class Onboarding1 extends Component {
  render() {
    return (
      <div className="main__body">
        <div
          className="header__conatiner__onboarding"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={prism} alt="logo" />
        </div>
        <div className="main__wraper">
          <div className="text__container">
            <div className="text__container__heading">
              Connection your world of work
            </div>
            <div className="text__container__sub__heading">
              Get connected with the best startrups. Build your profile and
              reputation. Get hired by the best companies.
            </div>
          </div>
          <Link to="/onboarding2" className="main__btn">
            <button className="btn__primary">Get Started</button>
          </Link>
          <div className="key__points">
            <div className="key__points__container">
              <div className="key__points__svg">
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1128 53C15.6083 53.0009 14.1655 52.1725 13.1026 50.6976L0.978426 33.9087C-0.326142 32.101 -0.326142 29.1706 0.978426 27.3629C2.28341 25.5557 4.39879 25.5557 5.70378 27.3629L17.1128 43.1673L47.2962 1.35538C48.6012 -0.451792 50.7166 -0.451792 52.0216 1.35538C53.3261 3.16312 53.3261 6.09348 52.0216 7.90123L21.123 50.6976C20.0601 52.1725 18.6172 53.0009 17.1128 53Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="key__points__text">Key benefit and feature</div>
            </div>
            <div className="key__points__container">
              <div className="key__points__svg">
                {" "}
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1128 53C15.6083 53.0009 14.1655 52.1725 13.1026 50.6976L0.978426 33.9087C-0.326142 32.101 -0.326142 29.1706 0.978426 27.3629C2.28341 25.5557 4.39879 25.5557 5.70378 27.3629L17.1128 43.1673L47.2962 1.35538C48.6012 -0.451792 50.7166 -0.451792 52.0216 1.35538C53.3261 3.16312 53.3261 6.09348 52.0216 7.90123L21.123 50.6976C20.0601 52.1725 18.6172 53.0009 17.1128 53Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="key__points__text">Key benefit and feature</div>
            </div>
            <div className="key__points__container">
              <div className="key__points__svg">
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1128 53C15.6083 53.0009 14.1655 52.1725 13.1026 50.6976L0.978426 33.9087C-0.326142 32.101 -0.326142 29.1706 0.978426 27.3629C2.28341 25.5557 4.39879 25.5557 5.70378 27.3629L17.1128 43.1673L47.2962 1.35538C48.6012 -0.451792 50.7166 -0.451792 52.0216 1.35538C53.3261 3.16312 53.3261 6.09348 52.0216 7.90123L21.123 50.6976C20.0601 52.1725 18.6172 53.0009 17.1128 53Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="key__points__text">Key benefit and feature</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
