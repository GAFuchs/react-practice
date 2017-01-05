import React from "react";
import { Link } from "react-router";

import SubMenu from "../components/SubMenu";

export default class Sample extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { location } = this.props;

    const childrenStyle = {
      padding: "0px",
      marginTop: "-9px",
    };

    return (
      <div>
        <SubMenu location={location} />
        <div class=" col-md-9 container-fluid" style={childrenStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
