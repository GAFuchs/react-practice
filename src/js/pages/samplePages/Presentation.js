import React from "react";
import Carousel from "../../components/presentation/Carousel";

export default class Presentation extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    const containerStyle = {
      textAlign: "center",
      backgroundColor: "#EEEEF2",
      display: "inline",
    };

    const imgList = [
      "../../../img/carousel/architecture.jpg",
      "../../../img/carousel/concrete.jpg",
      "../../../img/carousel/wave.jpg",
      "../../../img/carousel/scotland.jpg"
    ];

    const boxStyle = {
      height: "100px",
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

    return (
      <div>

        <Carousel
          imgList={imgList}/>

        <div class="col-md-12 container" style={containerStyle}>
          <h1>Presentation Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <div class="row">
            <div class="col-md-4" style={boxStyle}>
              <div class="col-md-4" style={imgDivStyle}>
                <img src="../../../img/about.jpg" style={imgStyle}/>
              </div>
              <div class="col-md-8" style={textDivStyle}>
                <h4>About</h4>
                <p>What is this page, our clients and specialties.</p>
              </div>
            </div>

            <div class="col-md-4" style={boxStyle}>
              <div class="col-md-4" style={imgDivStyle}>
                <img src="../../../img/about.jpg" style={imgStyle}/>
              </div>
              <div class="col-md-8" style={textDivStyle}>
                <h4>About</h4>
                <p>What is this page, our clients and specialties.</p>
              </div>
            </div>

            <div class="col-md-4" style={boxStyle}>
              <div class="col-md-4" style={imgDivStyle}>
                <img src="../../../img/about.jpg" style={imgStyle}/>
              </div>
              <div class="col-md-8" style={textDivStyle}>
                <h4>About</h4>
                <p>What is this page, our clients and specialties.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
