import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default class Refer extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="refer__text__container">
            <div className="refer__text__container__heading">Refer</div>
            <div className="refer__text__container__sub__heading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
          <div className="refer__step__container">
            <div className="refer__step__col__wraper">
              <div className="refer__step__col__wraper__num">1</div>
              <div className="refer__step__col__wraper__text">Generate</div>
            </div>
            <div className="refer__step__col__wraper">
              <div className="refer__step__col__wraper__num__two">2</div>
              <div className="refer__step__col__wraper__text">Share</div>
            </div>
            <div className="refer__step__col__wraper">
              <div className="refer__step__col__wraper__num__two">3</div>
              <div className="refer__step__col__wraper__text">Apply</div>
            </div>
            <div className="refer__step__col__wraper">
              <div className="refer__step__col__wraper__num__two">4</div>
              <div className="refer__step__col__wraper__text">Accept</div>
            </div>
          </div>
          <div className="btn__primary__connect__first">
            <div className="main__btn__svg">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C17.6569 7 19 5.65685 19 4C19 2.34315 17.6569 1 16 1C14.3431 1 13 2.34315 13 4C13 5.65685 14.3431 7 16 7Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 14C5.65685 14 7 12.6569 7 11C7 9.34315 5.65685 8 4 8C2.34315 8 1 9.34315 1 11C1 12.6569 2.34315 14 4 14Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.58984 12.51L13.4198 16.49"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.4098 5.51001L6.58984 9.49001"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="btn__primary__connect__btn">Generate New Link</div>
          </div>

          <div className="refer__text__container__sub__heading">
            You can share this link by clicking below button
          </div>
          <Link to="/home" className="main__btn__user">
            <button className="btn__primary">Refer</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
