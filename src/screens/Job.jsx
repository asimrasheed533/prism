import React, { Component } from "react";
import { Link } from "react-router-dom";
import prism from "../assets/prism.svg";
export default class Job extends Component {
  render() {
    return (
      <div className="home__container">
        <div className="header__conatiner__onboarding">
          <div className="header__img">
            <img src={prism} alt="logo" />
          </div>
          <div className="header__img"></div>
          <div className="option__profle__menu">
            <div className="option__profile">AR</div>
            <div className="option__menu">
              <div className="option__menu__entry">Wallet</div>
              <div className="option__menu__entry">Profile</div>
              <div className="option__menu__entry">jobs</div>
              <div className="option__menu__entry">Community</div>
              <div className="option__menu__entry">Contact</div>
              <div className="option__menu__entry">Logout</div>
            </div>
          </div>
        </div>
        <div className="main__wraper__filter">
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

              <div className="job__container__col__svg">
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
              </div>
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

              <div className="job__container__col__svg">
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
              </div>
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

              <div className="job__container__col__svg">
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
              </div>
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

              <div className="job__container__col__svg">
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
              </div>
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

              <div className="job__container__col__svg">
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
              </div>
            </div>
          </div>
          <Link to="/postjob" className="main__btn">
            <button className="btn__primary">Post A Job</button>
          </Link>
        </div>
        <div className="footer__conteiner">
          <Link to="/job" className="footer__col__wraper">
            <div className="footer__col__wraper__svg">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4583 2.83333H12.6792C12.5148 2.03392 12.0798 1.31562 11.4476 0.799509C10.8153 0.283397 10.0245 0.00103029 9.20833 0L7.79167 0C6.97552 0.00103029 6.18468 0.283397 5.55245 0.799509C4.92021 1.31562 4.48523 2.03392 4.32083 2.83333H3.54167C2.6027 2.83446 1.70252 3.20796 1.03857 3.87191C0.374625 4.53585 0.00112473 5.43604 0 6.375L0 8.5H17V6.375C16.9989 5.43604 16.6254 4.53585 15.9614 3.87191C15.2975 3.20796 14.3973 2.83446 13.4583 2.83333ZM5.797 2.83333C5.94298 2.42044 6.21296 2.06273 6.57 1.80915C6.92705 1.55556 7.35373 1.41848 7.79167 1.41667H9.20833C9.64627 1.41848 10.0729 1.55556 10.43 1.80915C10.787 2.06273 11.057 2.42044 11.203 2.83333H5.797Z"
                  fill="currentColor"
                />
                <path
                  d="M9.20833 10.6248C9.20833 10.8127 9.13371 10.9929 9.00087 11.1257C8.86803 11.2585 8.68786 11.3332 8.5 11.3332C8.31214 11.3332 8.13197 11.2585 7.99913 11.1257C7.86629 10.9929 7.79167 10.8127 7.79167 10.6248V9.9165H0V13.4582C0.00112473 14.3971 0.374625 15.2973 1.03857 15.9613C1.70252 16.6252 2.6027 16.9987 3.54167 16.9998H13.4583C14.3973 16.9987 15.2975 16.6252 15.9614 15.9613C16.6254 15.2973 16.9989 14.3971 17 13.4582V9.9165H9.20833V10.6248Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="footer__col__wraper__text">Jobs</div>
          </Link>
          <Link to="/" className="footer__col__wraper">
            <div className="footer__col__wraper__svg">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.50539 11.8706C8.1929 11.8706 7.12891 12.9346 7.12891 14.2471V19H11.8819V14.2471C11.8819 12.9346 10.8179 11.8706 9.50539 11.8706Z"
                  fill="currentColor"
                />
                <path
                  d="M13.4667 14.247V19H16.6354C17.9478 19 19.0118 17.936 19.0118 16.6235V9.39824C19.012 8.9867 18.8521 8.59124 18.5658 8.29555L11.8341 1.01796C10.6463 -0.267198 8.64158 -0.346105 7.35643 0.84169C7.29538 0.898131 7.23657 0.956912 7.18016 1.01796L0.460257 8.29318C0.165351 8.59009 -0.000111341 8.99164 5.62123e-08 9.41012V16.6235C5.62123e-08 17.936 1.06399 19 2.37648 19H5.54511V14.247C5.55992 12.087 7.30392 10.323 9.4096 10.2722C11.5857 10.2197 13.4501 12.0137 13.4667 14.247Z"
                  fill="currentColor"
                />
                <path
                  d="M9.50539 11.8706C8.1929 11.8706 7.12891 12.9346 7.12891 14.2471V19H11.8819V14.2471C11.8819 12.9346 10.8179 11.8706 9.50539 11.8706Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="footer__col__wraper__text">Home</div>
          </Link>
          <Link to="/community" className="footer__col__wraper">
            <div className="footer__col__wraper__svg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 13.3333C9.34073 13.3333 8.69626 13.1378 8.1481 12.7716C7.59994 12.4053 7.17269 11.8847 6.9204 11.2756C6.66811 10.6665 6.6021 9.9963 6.73072 9.3497C6.85933 8.7031 7.1768 8.10915 7.64298 7.64298C8.10915 7.1768 8.7031 6.85933 9.3497 6.73072C9.9963 6.6021 10.6665 6.66811 11.2756 6.9204C11.8847 7.17269 12.4053 7.59994 12.7716 8.1481C13.1378 8.69626 13.3333 9.34073 13.3333 10C13.3333 10.8841 12.9821 11.7319 12.357 12.357C11.7319 12.9821 10.8841 13.3333 10 13.3333ZM4.73583 13.3333H0.833333C0.61232 13.3333 0.400358 13.2455 0.244078 13.0893C0.0877974 12.933 0 12.721 0 12.5C0.00789653 11.3034 0.443104 10.149 1.22713 9.24507C2.01116 8.34109 3.09239 7.74702 4.27583 7.57C4.41335 7.55073 4.5535 7.56614 4.68355 7.61481C4.81361 7.66348 4.92943 7.74388 5.02051 7.8487C5.11159 7.95353 5.17502 8.07944 5.20506 8.21502C5.2351 8.35059 5.23078 8.49152 5.1925 8.625C5.0648 9.07217 5.00001 9.53495 5 10C5.00024 10.7415 5.16713 11.4734 5.48833 12.1417C5.54875 12.2685 5.57611 12.4086 5.56788 12.5488C5.55965 12.6891 5.51609 12.825 5.44125 12.9439C5.36642 13.0628 5.26273 13.1608 5.13984 13.2289C5.01694 13.297 4.87883 13.3329 4.73833 13.3333H4.73583ZM14.1667 20H5.83333C5.61232 20 5.40036 19.9122 5.24408 19.7559C5.0878 19.5996 5 19.3877 5 19.1667C5 17.8406 5.52678 16.5688 6.46447 15.6311C7.40215 14.6935 8.67392 14.1667 10 14.1667C11.3261 14.1667 12.5979 14.6935 13.5355 15.6311C14.4732 16.5688 15 17.8406 15 19.1667C15 19.3877 14.9122 19.5996 14.7559 19.7559C14.5996 19.9122 14.3877 20 14.1667 20ZM15 6.66667C14.3407 6.66667 13.6963 6.47117 13.1481 6.1049C12.5999 5.73863 12.1727 5.21803 11.9204 4.60895C11.6681 3.99986 11.6021 3.32964 11.7307 2.68303C11.8593 2.03643 12.1768 1.44249 12.643 0.976312C13.1092 0.510137 13.7031 0.192668 14.3497 0.0640506C14.9963 -0.0645668 15.6665 0.00144427 16.2756 0.253736C16.8847 0.506028 17.4053 0.93327 17.7716 1.48143C18.1378 2.0296 18.3333 2.67406 18.3333 3.33333C18.3333 4.21739 17.9821 5.06524 17.357 5.69036C16.7319 6.31548 15.8841 6.66667 15 6.66667ZM5 6.66667C4.34073 6.66667 3.69626 6.47117 3.1481 6.1049C2.59994 5.73863 2.17269 5.21803 1.9204 4.60895C1.66811 3.99986 1.6021 3.32964 1.73072 2.68303C1.85933 2.03643 2.1768 1.44249 2.64298 0.976312C3.10915 0.510137 3.7031 0.192668 4.3497 0.0640506C4.9963 -0.0645668 5.66652 0.00144427 6.27561 0.253736C6.8847 0.506028 7.40529 0.93327 7.77156 1.48143C8.13784 2.0296 8.33333 2.67406 8.33333 3.33333C8.33333 4.21739 7.98214 5.06524 7.35702 5.69036C6.7319 6.31548 5.88405 6.66667 5 6.66667ZM19.1667 13.3333H15.2642C15.1237 13.3329 14.9856 13.297 14.8627 13.2289C14.7398 13.1608 14.6361 13.0628 14.5612 12.9439C14.4864 12.825 14.4429 12.6891 14.4346 12.5488C14.4264 12.4086 14.4538 12.2685 14.5142 12.1417C14.8345 11.4732 15.0005 10.7413 15 10C14.9986 9.53476 14.9324 9.07197 14.8033 8.625C14.7648 8.49114 14.7605 8.34977 14.7907 8.2138C14.821 8.07783 14.8848 7.95161 14.9764 7.84667C15.068 7.74174 15.1844 7.66143 15.315 7.6131C15.4457 7.56477 15.5863 7.54995 15.7242 7.57C16.9076 7.74702 17.9888 8.34109 18.7729 9.24507C19.5569 10.149 19.9921 11.3034 20 12.5C20 12.721 19.9122 12.933 19.7559 13.0893C19.5996 13.2455 19.3877 13.3333 19.1667 13.3333Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="footer__col__wraper__text">Community</div>
          </Link>
        </div>
      </div>
    );
  }
}
