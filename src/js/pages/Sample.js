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

    const miniSubMenuMarginStyle = {
      margin: "10px",
    };

    const miniSubMenuStyle = {
      display: "none",
      backgroundColor: "rg",
      border: "1px solid rgba(0, 0, 0, 0.9)",
      borderRadius: "4px",
      padding: "9px;  ba(0, 0, 0, 0)",
      /*position: relative;*/
      width: "42px",
    };

    const iconBarStyle = {
      borderRadius: "1px",
      display: "block",
      height: "2px",
      width: "22px",
      marginTop: "3px",
    };

    const slideSubMenuStyle = {
      background: "rgba(0, 0, 0, 0.45)",
      display: "inline-block",
      padding: "0 8px",
      borderRadius: "4px",
      cursor: "pointer",
    }

    return (
      <div>
        <div class="row" style={miniSubMenuMarginStyle}>
          <div class="col-sm-4 col-md-3 sidebar">
            <div style={miniSubMenuStyle}>
              <span style={iconBarStyle}></span>
              <span style={iconBarStyle}></span>
              <span style={iconBarStyle}></span>
            </div>
            <div class="list-group">
              <span href="#" class="list-group-item active">
                Submenu
                <span class="pull-right" style={slideSubMenuStyle}>
                  <i class="fa fa-times"></i>
                </span>
              </span>
              <a href="#" class="list-group-item">
                <i class="fa fa-comment-o"></i> Lorem ipsum
              </a>
              <a href="#" class="list-group-item">
                <i class="fa fa-search"></i> Lorem ipsum
              </a>
              <a href="#" class="list-group-item">
                <i class="fa fa-user"></i> Lorem ipsum
              </a>
              <a href="#" class="list-group-item">
                <i class="fa fa-folder-open-o"></i> Lorem ipsum <span class="badge">14</span>
              </a>
              <a href="#" class="list-group-item">
                <i class="fa fa-bar-chart-o"></i> Lorem ipsum <span class="badge">14</span>
              </a>
              <a href="#" class="list-group-item">
                <i class="fa fa-envelope"></i> Lorem ipsum
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
