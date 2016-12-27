import React from "react";

export default class SlideSubMenu extends React.Component {
  constructor(props) {
    super();

    this.state = {
      opacity: 1,
      height: "auto",
    };
  }

  onHide() {
    this.setState({
      opacity: this.state.opacity === 1 ? 0.2 : 1,
      height: this.state.height === "auto" ? "40px" : "auto",
    });
  }

  render() {

    const componentMainStyle = {
      marginTop: "0px",
      opacity: this.state.opacity,
      height: this.state.height,
    };

    return (
      <div>
        <div class="list-group" style={componentMainStyle}>
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
    );
  }
}
