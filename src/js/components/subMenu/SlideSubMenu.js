import React from "react";

export default class SlideSubMenu extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div class="list-group" style={this.props.style}>
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
