import React, { Component } from "react";
import prism from "../assets/prism.svg";
import dp from "../assets/dp.png";

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
      <div className="header__conatiner__onboarding">
        <div className="header__img">
          <img src={prism} alt="logo" />
        </div>
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
          <div className="option__profile">
            <img src={dp} alt="avatar" />
          </div>
        </div>
        {this.state.showMenu && (
          <div className="option__profle__menu">
            <div className="option__menu">
              <div className="option__menu__entry">Wallet</div>
              <div className="option__menu__entry">Profile</div>
              <div className="option__menu__entry">jobs</div>
              <div className="option__menu__entry">Community</div>
              <div className="option__menu__entry">Contact</div>
              <div className="option__menu__entry">Logout</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}