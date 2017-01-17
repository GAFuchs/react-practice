import React from "react";
import Carousel from "../../components/presentation/Carousel";
import Box from "../../components/presentation/Box";

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

    return (
      <div>
        <Carousel
          imgList={imgList}/>

        <div class="col-xs-12 col-md-12 container" style={containerStyle}>
          <h1>Presentation Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <div class="row">

            <Box imgSrc="../../../img/about.jpg"/>
            <Box imgSrc="../../../img/about.jpg"/>
            <Box imgSrc="../../../img/about.jpg"/>

          </div>
        </div>
      </div>
    );
  }
}
