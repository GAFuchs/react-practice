import React from "react";
import { Link } from "react-router";

import SubMenu from "../components/SubMenu";

export default class Sample extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { location } = this.props;

    return (
      <div>
        <SubMenu location={location} />
        <div class="container-fluid row">
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
