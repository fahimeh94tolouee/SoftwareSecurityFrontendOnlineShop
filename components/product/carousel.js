import React from "react";
import { Box } from "../../styled_components/product/carousel";
import EventListener from "react-event-listener";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slider_height: 450 };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "hidden";
      let slider = window.document.getElementById("slider");
      this.setState({
        slider_height: slider.clientHeight
      });
    }
  }
  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "auto";
    }
  }
  handleResize() {
    if (typeof window !== "undefined") {
      let slider = window.document.getElementById("slider");
      this.setState({
        slider_height: slider.clientHeight
      });
    }
  }
  setMargin() {
    return this.state.slider_height / 2 - this.props.initialState * 120 - 60;
  }
  render() {
    return (
      <Box margin={this.setMargin()}>
        <EventListener target="window" onResize={this.handleResize.bind(this)} />
        <div
          className="overlay"
          onClick={() => {
            this.props.close();
          }}
        />
        <div className="inner">
          <span
            className="close"
            onClick={() => {
              this.props.close();
            }}
          />
          <div className="right">
            <div
              className={`arrow next ${
                this.props.initialState === 0 ? "disable" : ""
              }`}
              onClick={() => {
                if (this.props.initialState - 1 >= 0) {
                  this.props.slideChange(this.props.initialState - 1);
                }
              }}
            />
            <div
              className={`arrow prev ${
                this.props.initialState === this.props.images.length - 1
                  ? "disable"
                  : ""
              }`}
              onClick={() => {
                if (this.props.initialState + 1 < this.props.images.length) {
                  this.props.slideChange(this.props.initialState + 1);
                }
              }}
            />
            <div className="slider" id="slider">
              <ul>
                {this.props.images.map((img, key) => (
                  <li
                    key={key}
                    className={key === this.props.initialState ? "active" : ""}
                  >
                    <img
                      src={img.path}
                      onClick={() => {
                        this.props.slideChange(key);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="left">
            <img src={this.props.images[this.props.initialState]["path"]} />
          </div>
        </div>
      </Box>
    );
  }
}
export default Carousel;
