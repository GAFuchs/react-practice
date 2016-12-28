import React from "react";
import { IndexLink, Link } from "react-router";

export default class SlideSubMenu extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    const { location } = this.props;
    const presentationClass = location.pathname.match(/^\/presentation/) ? "active" : "";
    const formDataClass = location.pathname.match(/^\/formData/) ? "active" : "";

    return (
      <div>
        <div class="list-group" style={this.props.style}>
          <Link to="sample/presentation" class={presentationClass, "list-group-item"}>
            <i class="fa fa-newspaper-o"></i> Presentation
          </Link>
          <Link to="sample/formdata" class={formDataClass, "list-group-item"}>
            <i class="fa fa-check-square-o"></i> Data Form
          </Link>
        </div>
      </div>
    );
  }
}
