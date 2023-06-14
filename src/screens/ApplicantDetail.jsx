import React, { Component } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import dp from "../assets/dp.png";

export default class ApplicantDetail extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="profile__img">
            <img src={dp} alt="avatar" />
          </div>
          <div className="profile__content">
            <div className="profile__content__name">John DEV</div>
            <div className="profile__content__des">Product Manager</div>
            <div className="profile__content__verify">Unverified account</div>
            <div className="profile__content__price">
              Day rate: <span>£600 </span>
            </div>
            <div className="profile__skill__wraper">
              <div className="profile__skill">Linkdin</div>
              <div className="profile__skill">Github</div>
              <div className="profile__skill">WebSite</div>
            </div>
            <div className="skill__container">
              <div className="skill__container__heading">Skills</div>
              <div className="profile__skill__wraper__skill">
                <div className="profile__skills">PHP</div>
                <div className="profile__skills">React</div>
                <div className="profile__skills">Dart</div>
              </div>
            </div>
            <div className="applicantdetail__container__col__svg">
              <Link className="applicantdetail__col__btn">Accept</Link>
              <Link className="applicantdetail__col__btn">Reject</Link>
            </div>
          </div>
          <div className="live__text__wraper">
            <div className="live__text__svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-auto fill-gray-800"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 00-.722-1.952l-3.285-3.832A3 3 0 0016.215 3h-8.43a3 3 0 00-2.278 1.048L2.222 7.88A3 3 0 001.5 9.832zM7.785 4.5a1.5 1.5 0 00-1.139.524L3.881 8.25h3.165a3 3 0 012.496 1.336l.164.246a1.5 1.5 0 001.248.668h2.092a1.5 1.5 0 001.248-.668l.164-.246a3 3 0 012.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 00-1.139-.524h-8.43z"
                  clip-rule="evenodd"
                ></path>
                <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 003 3h15a3 3 0 003-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 00-2.496 1.336l-.164.246a1.5 1.5 0 01-1.248.668h-2.092a1.5 1.5 0 01-1.248-.668l-.164-.246A3 3 0 007.046 15H2.812z"></path>
              </svg>
            </div>
            <div className="live__text">Live Roles</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
