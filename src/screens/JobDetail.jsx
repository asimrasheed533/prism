import React, { Component } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class JobDetail extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="job__detail__profile__container">
            <div className="job__detail__profile__img">
              <svg
                class="w-8 h-auto text-gray-50"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
              </svg>
            </div>
            <div className="job__detail__profile__heading">Backend Dev</div>
            <div className="job__detail__profile__subheading">
              sample organisation (Remote)
            </div>
            <div className="job__detail__profile__subheading">
              Up to £2000 per daily <span>2 months Contract</span>
            </div>
            <div className="job__detail__profile__posted">
              <div className="job__detail__profile__posted__label">
                Posted by
              </div>
              <div className="job__detail__profile__posted__by">
                Shorya Singh
              </div>
            </div>
            <div className="job__detail__profile__posted">
              <div className="job__detail__profile__posted__label">Skills:</div>
              <div className="job__detail__profile__posted__by__skill">
                Java
              </div>
            </div>
          </div>
          <div className="linebar">
            <div className="linebar__heading">Exp</div>
            <div className="linebar__line"></div>
            <div className="linebar__line"></div>
            <div className="linebar__line"></div>
            <div className="linebar__line__two"></div>
            <div className="linebar__line__two"></div>
          </div>
          <div className="detail__text__container">
            <div className="detail__text__container__heading">
              Company Mission
            </div>
            <div className="detail__text__container__sub__heading">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              deserunt ad, odio fugit velit non! Rerum nihil eos, quo corrupti,
              facere iure in deleniti exercitationem reiciendis, tempore itaque
              sit mollitia?
            </div>
          </div>
          <div className="detail__text__container">
            <div className="detail__text__container__heading">
              Job Description
            </div>
            <div className="detail__text__container__sub__heading">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              deserunt ad, odio fugit velit non! Rerum nihil eos, quo corrupti,
              facere iure in deleniti exercitationem reiciendis, tempore itaque
              sit mollitia?
            </div>
          </div>
          <Link to="/applyjob" className="main__btn__job__one">
            <div className="main__btn__job__one__entry">Apply</div>
          </Link>
          <Link to="/applyjob" className="main__btn__job__one">
            <div className="main__btn__job__dell__entry"> Delete Job</div>
          </Link>

          <Link to="/refer" className="main__btn__job__one">
            <div className="main__btn__job__refr__entry">Refer</div>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
