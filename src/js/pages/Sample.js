import React from "react";
import { IndexLink, Link } from "react-router";

import SubMenu from "../components/SubMenu";

export default class Sample extends React.Component {
  constructor() {
    super();
  }

  render() {
    const homeClass = location.pathname === "/" ? "active" : "";
    const sampleClass = location.pathname.match(/^\/sample/) ? "active" : "";
    const todosClass = location.pathname.match(/^\/todos/) ? "active" : "";

    return (
      <div>
        <SubMenu />
      </div>
    );
  }
}
