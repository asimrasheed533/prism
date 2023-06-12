import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";
export default class Job extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="select__container__home">
            <div className="select__container__heading">Filter</div>
            <select className="select__container__select">
              <option value="volvo">FULLSTACK DEVELOPER</option>
              <option value="saab">FRONT END DEVELOPER</option>
              <option value="saab">DEVELOPER</option>
              <option value="saab">DEVELOPER</option>
              <option value="saab">REACT DEVELOPER</option>
              <option value="saab">JAVA DEVELOPER</option>
              <option value="saab">BACKEND DEVELOPER</option>
              <option value="saab">DESIGNER</option>
              <option value="saab">UI/UX DEVELOPER</option>
              <option value="saab">PRODUCT MANAGER</option>
              <option value="saab">PRINCIPAL ARCHITECT</option>
              <option value="saab">DEVOPS MANAGER</option>
            </select>
          </div>
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

              <Link to="/jobdetail" className="job__container__col__svg">
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H24"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 1L24 8L12.5 15"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
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

              <Link to="/jobdetail" className="job__container__col__svg">
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H24"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 1L24 8L12.5 15"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
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

              <Link to="/jobdetail" className="job__container__col__svg">
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H24"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 1L24 8L12.5 15"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
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

              <Link to="/jobdetail" className="job__container__col__svg">
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H24"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 1L24 8L12.5 15"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
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

              <Link to="/jobdetail" className="job__container__col__svg">
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H24"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 1L24 8L12.5 15"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
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

              <Link to="/jobdetail" className="job__container__col__svg">
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H24"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 1L24 8L12.5 15"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
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

              <Link to="/jobdetail" className="job__container__col__svg">
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H24"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 1L24 8L12.5 15"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
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

              <Link to="/jobdetail" className="job__container__col__svg">
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H24"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 1L24 8L12.5 15"
                    stroke="#81848C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <Link to="/postjob" className="main__btn">
              <button className="btn__primary">Post A Job</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
