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
    return (
      <div>
        <select
          className="select__container__select"
          {...this.props}
          onChange={(e) => {
            if (!this.state.values.includes(e.target.value.toLowerCase())) {
              this.setState({ values: [...this.state.values, e.target.value] });
            }
          }}
        >
          {this.props.options.map((option) => {
            return <option value={option.toLowerCase()}>{option}</option>;
          })}
        </select>
        <div>
          {this.state.values.map((value) => {
            return (
              <div>
                {value}
                <button
                  onClick={() => {
                    this.setState({
                      values: this.state.values.filter((val) => val !== value),
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
