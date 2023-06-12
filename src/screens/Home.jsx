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
          <Link to="/connect" className="main__btn__wraper">
            <button className="btn__primary__connect">Connect</button>
          </Link>
          <Link to="/job" className="main__btn__wraper">
            <button className="btn__primary__job">Explore Jobs</button>
          </Link>
          <Link to="/postjob" className="main__btn__wraper">
            <button className="btn__primary__job">Post A Job</button>
          </Link>
          <Link to="/profile" className="main__btn__wraper">
            <button className="btn__primary__job">Complete Your Profile</button>
          </Link>
        </div>

        <Footer />
      </div>
    );
  }
}
