import React from "react";
import { IndexLink, Link } from "react-router";

export default class Sample extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    const homeClass = location.pathname === "/" ? "active" : "";
    const sampleClass = location.pathname.match(/^\/sample/) ? "active" : "";
    const todosClass = location.pathname.match(/^\/todos/) ? "active" : "";

    const navStyle = {
      marginTop: "-10px",
    };

    return (
      <div>
        <nav class="navbar navbar-default navbar-fixed-side col-md-2" style={navStyle}>
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
          </div>
          <div class={"navbar-collapse " + navClass}>
          <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="./">Left (Default Theme)</a>
                  </li>
                  <li class="">
                    <a href="inverse.html">Right (Inverse Theme)</a>
                  </li>
                  <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Dropdown <b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#">Sub-page 1</a></li>
                  <li><a href="#">Sub-page 2</a></li>
                  <li class="divider"></li>
                  <li class="dropdown-header">Dropdown Header</li>
                  <li><a href="#">Sub-page 3</a></li>
                  </ul></li>
            </ul>
            <ul class="nav nav-sidebar">
              <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Export</a></li>
            </ul>
            <ul class="nav nav-sidebar">
              <li><a href="">Nav item</a></li>
              <li><a href="">Nav item again</a></li>
              <li><a href="">One more nav</a></li>
              <li><a href="">Another nav item</a></li>
              <li><a href="">More navigation</a></li>
            </ul>
            <ul class="nav nav-sidebar">
              <li><a href="">Nav item again</a></li>
              <li><a href="">One more nav</a></li>
              <li><a href="">Another nav item</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
