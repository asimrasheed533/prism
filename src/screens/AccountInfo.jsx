import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default class AccountInfo extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="profile__details__section__heading">Account Info</div>
          <div className="user__input__wraper">
            <div className="user__detail__input__label">Your Email</div>
            <input
              className="user__detail__input"
              type="text"
              placeholder="asm222@gmail.com"
            />
          </div>

          <div className="user__input__wraper">
            <div className="user__detail__input__label">Old Password</div>
            <input
              className="user__detail__input"
              type="text"
              placeholder="old password"
            />
          </div>
          <div className="user__input__wraper">
            <div className="user__detail__input__label">New Password</div>
            <input
              className="user__detail__input"
              type="password"
              placeholder="new password"
            />
          </div>
          <div className="user__input__wraper">
            <div className="user__detail__input__label">Confirm Password</div>
            <input
              className="user__detail__input"
              type="password"
              placeholder="confirm password"
            />
          </div>
          <Link to="/userpreference3" className="main__btn">
            <button className="btn__primary">Next</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
