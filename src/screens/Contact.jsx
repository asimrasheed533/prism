import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default class Contact extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <div className="user__details__section">
            <div className="user__details__section__heading">Contact US</div>
          </div>
          <div className="contact__entry__wraper">
            <div className="contact__container">
              <div className="contact__container__heading">Linkedin</div>
              <div className="contact__container__heading">SVG</div>
            </div>
            <div className="contact__container">
              <div className="contact__container__heading">Discord</div>
              <div className="contact__container__heading">SVG</div>
            </div>
            <div className="contact__container">
              <div className="contact__container__heading">Twitter</div>
              <div className="contact__container__heading">SVG</div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
