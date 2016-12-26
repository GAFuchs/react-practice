import React from "react";

export default class SlideSubMenu extends React.Component {
  constructor(props) {
    super();
    this.state = {
      opacity: 1,
      visibility: "visible",
    };
  }

  onHide() {
    this.setState({
      opacity: 0,
      visibility: "collapse",
    });
  }

  render() {

    const componentMainStyle = {
      marginLeft: "3px",
      marginRight: "3px",
      opacity: this.state.opacity,
      visibility: this.state.visibility,
      transition: "all 0.3s ease",
    };

    const slideSubMenuStyle = {
      background: "rgba(0, 0, 0, 0.45)",
      display: "inline-block",
      padding: "0 8px",
      borderRadius: "4px",
      cursor: "pointer",
    };

    return (
      <div>
        <div class="row" style={componentMainStyle}>
          <div class="col-sm-4 col-md-3 sidebar">
            <div class="list-group">
              <span href="#" class="list-group-item active">
                Submenu
                <span class="pull-right" ref="slideSubmenu" style={slideSubMenuStyle} onClick={this.onHide.bind(this)}>
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
