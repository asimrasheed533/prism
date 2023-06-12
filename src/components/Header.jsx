import React, { Component } from "react";
import prism from "../assets/prism.svg";
import dp from "../assets/dp.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ showMenu: false });
    });
  }

  render() {
    return (
      <>
        <div className="header__conatiner__onboarding">
          <Link to="/home" className="header__img">
            <img src={prism} alt="logo" />
          </Link>
          <div className="menu__dp">
            <button
              title="Menu"
              onClick={() => {
                this.setState({ showMenu: !this.state.showMenu });
              }}
            >
              {this.state.showMenu ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1L13 13"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 13H19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
            <Link to="/profile" className="option__profile">
              <img src={dp} alt="avatar" />
            </Link>
          </div>
          {this.state.showMenu && (
            <div className="option__profle__menu">
              <div className="option__menu">
                <Link to="/home" className="option__menu__entry">
                  Wallet
                </Link>
                <Link to="/profile" className="option__menu__entry">
                  Profile
                </Link>
                <Link to="/job" className="option__menu__entry">
                  jobs
                </Link>
                <Link to="/community" className="option__menu__entry">
                  Community
                </Link>
                <Link to="/home" className="option__menu__entry">
                  Contact
                </Link>
                <Link to="/home" className="option__menu__entry">
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="border__header"></div>
      </>
    );
  }
}
