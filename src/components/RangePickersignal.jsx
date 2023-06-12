import * as React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.2;
const MIN = 0;
const MAX = 100;

class RangePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [16, 60],
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          rtl={this.props.rtl}
          onChange={(values) =>
            this.setState({
              values,
            })
          }
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "50px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#ccc", "#0102c0", "#ccc"],
                    min: MIN,
                    max: MAX,
                    rtl: this.props.rtl,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "50px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-28px",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                  padding: "4px",
                  borderRadius: "4px",
                  backgroundColor: "#0102c0",
                }}
              >
                {this.state.values[index].toFixed(1)}
              </div>
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#0102c0" : "#CCC",
                }}
              />
            </div>
          )}
        />
      </div>
    );
  }
}
export default RangePicker;
