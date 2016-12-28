import React from "react";

export default class MiniSubMenu extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    const componentMainStyle = {
      marginBotton: "0px",
    }

    const slideSubMenuStyle = {
      background: "rgba(0, 0, 0, 0.45)",
      display: "inline-block",
      padding: "0 8px",
      borderRadius: "4px",
      cursor: "pointer",
    };

    return (
      <div class="list-group" style={componentMainStyle}>
        <span href="#" class="list-group-item active">
          Samples
          <span class="pull-right" style={slideSubMenuStyle} onClick={this.props.onClick.bind(this)}>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </span>
        </span>
      </div>
    );
  }
}
