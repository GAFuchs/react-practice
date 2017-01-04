import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;

    const containerStyle = {
      marginTop: "60px",
      padding: "0px",
    };

    const rowStyle = {
      margin: "0px",
    }

    return (
      <div>

        <Nav location={location} />

        <div class="container-fluid" style={containerStyle}>
          <div class="row" style={rowStyle}>
            {this.props.children}
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
