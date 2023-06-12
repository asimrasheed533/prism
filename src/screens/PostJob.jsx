import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default class PostJob extends Component {
  render() {
    return (
      <div className="main__body">
        <Header />
        <div className="main__wraper">
          <form className="post__job__from">
            <div className="post__job__form__heading">Post a Job</div>

            <div className="post__job__form__input__container">
              <div className="radio__btn">
                <input type="radio" name="gender" value="Yes" />
                <label for="male">Yes</label>

                <input type="radio" name="gender" value="No" />
                <label for="female">No</label>
              </div>
              <div className="input__wraper">
                <div className="input__wraper__label">Organization</div>
                <select className="select__container__select">
                  <option value="volvo">Choose a Organization</option>
                </select>
              </div>
              <div className="input__wraper">
                <div className="input__wraper__label">Profession</div>
                <select className="select__container__select">
                  <option value="volvo">Choose a Profession</option>
                  <option value="volvo">React.js</option>
                  <option value="volvo">HTML/CSS</option>
                  <option value="volvo">ELIXIR</option>
                  <option value="volvo">TAILWINDCSS</option>
                  <option value="volvo">ERLANG</option>
                  <option value="volvo">PHP</option>
                  <option value="volvo">DRAFT</option>
                  <option value="volvo">Android</option>
                </select>
              </div>
              <div className="input__wraper">
                <div className="input__wraper__label">Top Skill</div>
                <select className="select__container__select">
                  <option value="volvo">-</option>
                  <option value="volvo">React.js</option>
                  <option value="volvo">HTML/CSS</option>
                  <option value="volvo">ELIXIR</option>
                  <option value="volvo">TAILWINDCSS</option>
                  <option value="volvo">ERLANG</option>
                  <option value="volvo">PHP</option>
                  <option value="volvo">DRAFT</option>
                  <option value="volvo">Android</option>
                </select>
              </div>
              <div className="radio__btn__expertise">
                <div className="radio__btn__expertise__heading">EXPERTISE</div>
                <div className="radio__btn__wraper">
                  <input type="radio" name="expert" value="Minimal" />
                  <label for="expert">Minimal</label>
                </div>
                <div className="radio__btn__wraper">
                  <input type="radio" name="expert" value="Basic" />
                  <label for="expert">Basic</label>
                </div>
                <div className="radio__btn__wraper">
                  <input type="radio" name="expert" value="Minimal" />
                  <label for="expert">Intermediate</label>
                </div>
                <div className="radio__btn__wraper">
                  <input type="radio" name="expert" value="Minimal" />
                  <label for="expert">Advance</label>
                </div>
                <div className="radio__btn__wraper">
                  <input type="radio" name="expert" value="Minimal" />
                  <label for="expert">Expert</label>
                </div>
              </div>

              <div className="job__input__wraper">
                <div className="job__input__wraper__label">Day Rate</div>
                <input type="text" placeholder="3 Months" />
              </div>
              <div className="job__input__wraper">
                <div className="job__input__wraper__label">Contract Period</div>
                <input type="text" placeholder="3 Months" />
              </div>
              <div className="job__input__wraper">
                <div className="job__input__wraper__label">
                  Role Description
                </div>
                <textarea placeholder="Job Rols Description" />
              </div>
              <div className="job__input__wraper__radio">
                <div className="job__input__wraper__label">REFERRAL BONUS</div>
                <div className="radio__btn">
                  <input type="radio" name="bonus" value="Yes" />
                  <label for="bonus">Yes</label>

                  <input type="radio" name="bonus" value="No" />
                  <label for="bonus">No</label>
                </div>
              </div>
            </div>
            <Link to="/postjob" className="main__btn__user">
              <button className="btn__primary">Post A Job</button>
            </Link>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
