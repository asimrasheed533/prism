import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";
import { SelectInput } from "../components/SelectInput";
export default class Job extends Component {
  render() {
    const options = [
      "FULLSTACK DEVELOPER",
      "FRONT END DEVELOPER",
      "DEVELOPER",
      "REACT DEVELOPER",
      "JAVA DEVELOPER",
      "BACKEND DEVELOPER",
      "DESIGNER",
    ];
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="select__container__home">
            <div className="select__container__heading">Filter</div>

            <SelectInput
              options={options}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </div>
          <div className="job__container">
            <div className="job__container__wraper">
              <div className="job__container__col">
                <svg
                  width="59"
                  height="59"
                  viewBox="0 0 59 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.7619 7.29492H14.5873C12.653 7.29492 10.7978 8.06336 9.42996 9.43118C8.06214 10.799 7.2937 12.6542 7.2937 14.5886V43.7631C7.2937 45.6975 8.06214 47.5527 9.42996 48.9205C10.7978 50.2884 12.653 51.0568 14.5873 51.0568H43.7619C45.6963 51.0568 47.5515 50.2884 48.9193 48.9205C50.2871 47.5527 51.0556 45.6975 51.0556 43.7631V14.5886C51.0556 12.6542 50.2871 10.799 48.9193 9.43118C47.5515 8.06336 45.6963 7.29492 43.7619 7.29492ZM14.5873 12.1574H43.7619C44.4067 12.1574 45.0251 12.4135 45.4811 12.8694C45.937 13.3254 46.1931 13.9438 46.1931 14.5886V34.9135L38.4133 28.2763C37.2078 27.2845 35.6953 26.7422 34.1343 26.7422C32.5733 26.7422 31.0608 27.2845 29.8554 28.2763L12.1561 43.0338V14.5886C12.1561 13.9438 12.4123 13.3254 12.8682 12.8694C13.3242 12.4135 13.9425 12.1574 14.5873 12.1574Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M19.4498 24.3132C21.4639 24.3132 23.0966 22.6804 23.0966 20.6664C23.0966 18.6523 21.4639 17.0195 19.4498 17.0195C17.4357 17.0195 15.803 18.6523 15.803 20.6664C15.803 22.6804 17.4357 24.3132 19.4498 24.3132Z"
                    fill="#9C9C9C"
                  />
                </svg>

                <div className="job__container__col__contant">
                  <div className="job__container__col__heading">
                    BACKEND DEV
                  </div>
                  <div className="job__container__col__sub">
                    sample organisation
                  </div>
                  <div className="job__container__col__sub__heading">
                    LOS ANGELES
                  </div>
                </div>
              </div>

              <Link to="/jobdetail" className="job__container__col__svg">
                <svg
                  width="23"
                  height="18"
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8356 9.83563C22.2971 9.37413 22.2971 8.62588 21.8356 8.16437L14.315 0.643711C13.8535 0.182206 13.1052 0.182206 12.6437 0.643711C12.1822 1.10522 12.1822 1.85346 12.6437 2.31497L19.3287 9L12.6437 15.685C12.1822 16.1465 12.1822 16.8948 12.6437 17.3563C13.1052 17.8178 13.8535 17.8178 14.315 17.3563L21.8356 9.83563ZM-1.03312e-07 10.1818L21 10.1818L21 7.81824L1.03312e-07 7.81824L-1.03312e-07 10.1818Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            <Link to="/postjob" className="main__btn__user">
              <button className="btn__primary">Post A Job</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
