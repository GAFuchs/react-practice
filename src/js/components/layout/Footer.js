import React from "react";

export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      margin: "30px",
      textAlign: "center",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <hr/>
          <p>Gabriel Amaral Fuchs personal webpage</p>
        </div>
      </footer>
    );
  }
}
