import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default class Refer extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="refer__text__container">
            <div className="refer__text__container__heading">Refer</div>
            <div className="refer__text__container__sub__heading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
          <div className="refer__step__container">
            <div className="refer__step__col__wraper">
              <div className="refer__step__col__wraper__num">1</div>
              <div className="refer__step__col__wraper__text">Generate</div>
            </div>
            <div className="refer__step__col__wraper">
              <div className="refer__step__col__wraper__num__two">2</div>
              <div className="refer__step__col__wraper__text">Share</div>
            </div>
            <div className="refer__step__col__wraper">
              <div className="refer__step__col__wraper__num__two">3</div>
              <div className="refer__step__col__wraper__text">Apply</div>
            </div>
            <div className="refer__step__col__wraper">
              <div className="refer__step__col__wraper__num__two">4</div>
              <div className="refer__step__col__wraper__text">Accept</div>
            </div>
          </div>
          <Link to="/" className="main__btn">
            <button className="btn__primary">Generate New Link</button>
          </Link>
          <div className="refer__text__container__sub__heading">
            You can share this link by clicking below button
          </div>
          <Link to="/" className="main__btn">
            <button className="btn__primary">Refer</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
