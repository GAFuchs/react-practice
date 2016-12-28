import React from "react";
import { IndexLink, Link } from "react-router";

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
        </div>
      </div>
    );
  }
}
