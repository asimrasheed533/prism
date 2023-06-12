import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default class Home extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="user__details__section">
            <div className="user__details__section__heading">
              What would you like to do?
            </div>
          </div>
          <div className="home__connection__btn__container">
            <div className="btn__primary__connect__first">
              <div className="main__btn__svg">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V16.5C1.5 16.8978 1.65804 17.2794 1.93934 17.5607C2.22064 17.842 2.60218 18 3 18H9C9.39782 18 9.77936 17.842 10.0607 17.5607C10.342 17.2794 10.5 16.8978 10.5 16.5V12.75C10.5 12.5511 10.579 12.3603 10.7197 12.2197C10.8603 12.079 11.0511 12 11.25 12C11.4489 12 11.6397 12.079 11.7803 12.2197C11.921 12.3603 12 12.5511 12 12.75V16.5C12 17.2956 11.6839 18.0587 11.1213 18.6213C10.5587 19.1839 9.79565 19.5 9 19.5H3C2.20435 19.5 1.44129 19.1839 0.87868 18.6213C0.316071 18.0587 0 17.2956 0 16.5V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H9C9.79565 0 10.5587 0.316071 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3V6.75C12 6.94891 11.921 7.13968 11.7803 7.28033C11.6397 7.42098 11.4489 7.5 11.25 7.5C11.0511 7.5 10.8603 7.42098 10.7197 7.28033C10.579 7.13968 10.5 6.94891 10.5 6.75V3C10.5 2.60218 10.342 2.22064 10.0607 1.93934C9.77936 1.65804 9.39782 1.5 9 1.5H3ZM8.03 6.22C8.17045 6.36063 8.24934 6.55125 8.24934 6.75C8.24934 6.94875 8.17045 7.13937 8.03 7.28L6.31 9H17.25C17.4489 9 17.6397 9.07902 17.7803 9.21967C17.921 9.36032 18 9.55109 18 9.75C18 9.94891 17.921 10.1397 17.7803 10.2803C17.6397 10.421 17.4489 10.5 17.25 10.5H6.31L8.03 12.22C8.10369 12.2887 8.16279 12.3715 8.20378 12.4635C8.24477 12.5555 8.26682 12.6548 8.26859 12.7555C8.27037 12.8562 8.25184 12.9562 8.21412 13.0496C8.1764 13.143 8.12026 13.2278 8.04904 13.299C7.97782 13.3703 7.89299 13.4264 7.7996 13.4641C7.70621 13.5018 7.60618 13.5204 7.50548 13.5186C7.40478 13.5168 7.30546 13.4948 7.21346 13.4538C7.12146 13.4128 7.03866 13.3537 6.97 13.28L3.97 10.28C3.82955 10.1394 3.75066 9.94875 3.75066 9.75C3.75066 9.55125 3.82955 9.36063 3.97 9.22L6.97 6.22C7.11063 6.07955 7.30125 6.00066 7.5 6.00066C7.69875 6.00066 7.88937 6.07955 8.03 6.22Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="btn__primary__connect__btn">Connect</div>
            </div>

            <Link to="/job" className="main__btn__wraper">
              <button className="btn__primary__job">Explore Jobs</button>
            </Link>
            <Link to="/postjob" className="main__btn__wraper">
              <button className="btn__primary__job">Post A Job</button>
            </Link>
            <Link to="/profile" className="main__btn__wraper">
              <button className="btn__primary__job">
                Complete Your Profile
              </button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
