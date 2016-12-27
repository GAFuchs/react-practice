import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import MiniSubMenu from "./subMenu/MiniSubMenu";
import SlideSubMenu from "./subMenu/SlideSubMenu";

export default class SubMenu extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: [],
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const slideSubMenu = this.state.menu.concat([1]);
    this.setState({menu: slideSubMenu});
  }

  render() {

    const subMenuStyle = {
      marginLeft: "8px",
      marginRight: "8px",
    };

    const slideSubMenu = this.state.menu.map(
      (item) => (<SlideSubMenu key={item}/>)
    );

    return (
      <div class="col-sm-4 col-md-3 sidebar" style={subMenuStyle}>
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
