import React, { Component } from "react";

export class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    };
  }

  componentDidUpdate() {
    this.props.onChange(this.state.values);
  }

  render() {
    let filteredOptions = this.props.options.filter(
      (option) => !this.state.values.includes(option.toLowerCase())
    );

    return (
      <div>
        <select
          className="select__container__select"
          onChange={(e) => {
            this.setState({ values: [...this.state.values, e.target.value] });
          }}
        >
          {filteredOptions.length === 0 ? (
            <option value="none">No more options</option>
          ) : (
            ["Select", ...filteredOptions].map((option) => {
              return <option value={option.toLowerCase()}>{option}</option>;
            })
          )}
        </select>
        <div className="entry__wraper__container">
          {this.state.values.map((value) => {
            return (
              <div className="filter__entry">
                {value}
                <button
                  className="filter__entry__button"
                  onClick={() => {
                    this.setState({
                      values: this.state.values.filter((val) => val !== value),
                    });
                  }}
                >
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
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
