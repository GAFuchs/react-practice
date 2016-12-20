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
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 col-lg-2">
            <nav class="navbar navbar-default navbar-fixed-side" style={navStyle}>
              <div class="container">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="./">BS3 Side Navbar</a>
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
                  <form class="navbar-form navbar-left">
                    <div class="form-group">
                      <input class="form-control" placeholder="Search"/>
                    </div>
                    <button class="btn btn-default">Search</button>
                  </form>
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Page 4</a></li>
                  </ul>
                  <button class="btn btn-default navbar-btn">Button</button>
                  <p class="navbar-text">
                    Made by 
                    <a href="http://www.samrayner.com">Sam Rayner</a>
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
