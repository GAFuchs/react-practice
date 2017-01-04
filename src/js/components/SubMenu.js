import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import MiniSubMenu from "./subMenu/MiniSubMenu";
import SlideSubMenu from "./subMenu/SlideSubMenu";

export default class SubMenu extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: [],
      slideSubMenuHeight: "auto",
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.onClick();
  }

  onClick() {
    if (this.state.menu.length < 1) {
      const slideSubMenu = this.state.menu.concat([{}]);
      this.setState({
        menu: slideSubMenu,
        slideSubMenuHeight: "auto",
      });

      return;
    }

    let slideSubMenu = [];

    this.setState({
      menu: slideSubMenu,
      slideSubMenuHeight: "0px",
    });
  }

  render() {

    const subMenuStyle = {
      paddingLeft: "5px",
      paddingRight: "5px",
    };

    const slideSubMenuStyle = {
      overflow: "hidden",
      height: this.state.slideSubMenuHeight,
    }

    const slideSubMenu = this.state.menu.map(
      () => (<SlideSubMenu location={this.props.location} style={slideSubMenuStyle}/>)
    );

    return (
      <div class="col-md-3" style={subMenuStyle}>
        <MiniSubMenu onClick={this.onClick.bind(this)}/>
        <ReactCSSTransitionGroup
          transitionName="drop"
          transitionEnterTimeout={350}
          transitionLeaveTimeout={350}>
          {slideSubMenu}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
