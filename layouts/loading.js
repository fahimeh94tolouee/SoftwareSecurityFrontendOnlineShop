import React from "react";
import { LoadingBox } from "../styled_components/layouts/loading";
class Loading extends React.Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "hidden";
    }
  }
  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "auto";
    }
  }
  render() {
    return (
      <LoadingBox>
        <img src="/static/images/mallenogif.gif" alt="maleno loading" />
      </LoadingBox>
    );
  }
}
export default Loading;
