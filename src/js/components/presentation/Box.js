import React from "react";

export default class Box extends React.Component {
  constructor(props) {
    super();
  }

  buildImg() {

  }

  render() {

    const boxStyle = {
      height: "120px",
      marginBottom: "20px"
    };

    const imgDivStyle = {
      padding: "0px",
      height: "100%",
      borderBottom: "1px solid #C7C8C9",
    };

    const imgStyle = {
      width: "100%",
      height: "100%",
    }

    const textDivStyle = {
      textAlign: "left",
      backgroundColor: "#FFFFFF",
      height: "100%",
      borderBottom: "1px solid #C7C8C9",
    };

    const titleStyle = {
      fontFamily: "Arial",
      fontSize: "20px",
      textTransform: "uppercase",
    };

    return (
      <div>
        <div class="col-xs-12 col-md-4" style={boxStyle}>
          <div class="col-xs-3 col-md-5" style={imgDivStyle}>
            <img src={this.props.imgSrc} style={imgStyle}/>
          </div>
          <div class="col-xs-9 col-md-7" style={textDivStyle}>
            <h4 style={titleStyle}>{this.props.title}</h4>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}
