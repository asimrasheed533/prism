import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";
export default class Application extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="applicaint__heading">Applicatoins</div>
          <div className="job__container">
            <div className="job__container__wraper">
              <div className="job__container__col">
                <svg
                  class="w-8 h-auto text-gray-50"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
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

              <Link to="/applicant" className="job__container__col__svg">
                <svg
                  width="23"
                  height="18"
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8356 9.83563C22.2971 9.37413 22.2971 8.62588 21.8356 8.16437L14.315 0.64371C13.8535 0.182205 13.1052 0.182205 12.6437 0.64371C12.1822 1.10522 12.1822 1.85346 12.6437 2.31497L19.3287 9L12.6437 15.685C12.1822 16.1465 12.1822 16.8948 12.6437 17.3563C13.1052 17.8178 13.8535 17.8178 14.315 17.3563L21.8356 9.83563ZM-1.03312e-07 10.1818L21 10.1818L21 7.81824L1.03312e-07 7.81824L-1.03312e-07 10.1818Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
