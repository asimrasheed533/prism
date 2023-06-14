import React, { Component } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import RangePicker from "../components/RangePicker";

export default class EditProfile extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div
          className="main__wraper"
          style={{
            justifyContent: "flex-start",
          }}
        >
          <div className="account__info__container">
            <Link to="/accountinfo" className="account__info__wraper">
              <div className="company__profile__svg">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 1.99981C16.2626 1.73717 16.5744 1.52883 16.9176 1.38669C17.2608 1.24455 17.6286 1.17139 18 1.17139C18.3714 1.17139 18.7392 1.24455 19.0824 1.38669C19.4256 1.52883 19.7374 1.73717 20 1.99981C20.2626 2.26246 20.471 2.57426 20.6131 2.91742C20.7553 3.26058 20.8284 3.62838 20.8284 3.99981C20.8284 4.37125 20.7553 4.73905 20.6131 5.08221C20.471 5.42537 20.2626 5.73717 20 5.99981L6.5 19.4998L1 20.9998L2.5 15.4998L16 1.99981Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="account__info__wraper__text">Account Info</div>
            </Link>
            <Link to="/organisation" className="account__info__wraper">
              <div className="company__profile__svg">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.8 15.3333V45.8H0.2V5.75C0.2 4.27805 0.78473 2.86638 1.82556 1.82556C2.86638 0.78473 4.27805 0.2 5.75 0.2H24.9167C26.3886 0.2 27.8003 0.78473 28.8411 1.82556C29.8819 2.86638 30.4667 4.27805 30.4667 5.75V9.58333V9.78333H30.6667H40.25C41.722 9.78333 43.1336 10.3681 44.1744 11.4089C45.2153 12.4497 45.8 13.8614 45.8 15.3333ZM3.63333 42.1667V42.3667H3.83333H26.8333H27.0333V42.1667V5.75C27.0333 5.18862 26.8103 4.65024 26.4134 4.25329C26.0164 3.85634 25.478 3.63333 24.9167 3.63333H5.75C5.18862 3.63333 4.65024 3.85634 4.25329 4.25329C3.85634 4.65024 3.63333 5.18862 3.63333 5.75V42.1667ZM30.6667 13.2167H30.4667V13.4167V42.1667V42.3667H30.6667H42.1667H42.3667V42.1667V15.3333C42.3667 14.772 42.1437 14.2336 41.7467 13.8366C41.3498 13.4397 40.8114 13.2167 40.25 13.2167H30.6667ZM7.86667 25.1167H13.2167V28.55H7.86667V25.1167ZM22.8 25.1167V28.55H17.45V25.1167H22.8ZM13.2167 32.7833V36.2167H7.86667V32.7833H13.2167ZM22.8 32.7833V36.2167H17.45V32.7833H22.8ZM13.2167 13.2167H7.86667V9.78333H13.2167V13.2167ZM22.8 9.78333V13.2167H17.45V9.78333H22.8ZM13.2167 20.8833H7.86667V17.45H13.2167V20.8833ZM22.8 17.45V20.8833H17.45V17.45H22.8ZM38.1333 25.1167V28.55H34.7V25.1167H38.1333ZM38.1333 32.7833V36.2167H34.7V32.7833H38.1333ZM38.1333 17.45V20.8833H34.7V17.45H38.1333Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.4"
                  />
                </svg>
              </div>
              <div className="company__profile__text">Company Profile</div>
            </Link>
          </div>
          <div className="profile__details__section__heading">Edit Profile</div>
          <div className="profile__details__wraper">
            <div className="profile__input__wraper">
              <div className="user__detail__input__label">Name</div>
              <input
                className="user__detail__input"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="profile__input__wraper">
              <div className="user__detail__input__label">Last Name</div>
              <input
                className="user__detail__input"
                type="text"
                placeholder="last Name"
              />
            </div>
          </div>
          <div className="radio__profile__container">
            <div className="radio__profile__container__heading">
              DO YOU WORK REMOTELY?
            </div>
            <div className="radio__profile__radio">
              <div className="radio__btn">
                <input type="radio" name="gender" value="Yes" />
                <label for="male">Yes</label>

                <input type="radio" name="gender" value="No" />
                <label for="female">No</label>
              </div>
            </div>
          </div>
          <div className="apply__job__bar__wraper">
            <div className="apply__job__bar__heading">Day Rate</div>
            <div className="apply__job__bar__input">
              <RangePicker />
            </div>
          </div>
          <div className="user__input__wraper">
            <div className="user__detail__input__label">Linkedin*</div>
            <input
              className="user__detail__input"
              type="text"
              placeholder="http://www.linkdin.com/in/john"
            />
          </div>
          <div className="user__input__wraper">
            <div className="user__detail__input__label">Github</div>
            <input
              className="user__detail__input"
              type="text"
              placeholder="http://github.com/john"
            />
          </div>
          <div className="user__input__wraper">
            <div className="user__detail__input__label">Website</div>
            <input
              className="user__detail__input"
              type="text"
              placeholder="http://personal-website.com"
            />
          </div>
          <Link to="/" className="main__btn__user">
            <button className="btn__primary">Save changes</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
