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

    const boxDivStyle = {
      marginTop: "50px",
    }

    const imgList = [
      "../../../img/carousel/architecture.jpg",
      "../../../img/carousel/concrete.jpg",
      "../../../img/carousel/wave.jpg",
      "../../../img/carousel/scotland.jpg"
    ];

    return (
      <div>
        <Carousel
          imgList={imgList}/>

        <div class="col-xs-12 col-md-12 container" style={containerStyle}>
          <h1>Presentation Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <div class="row" style={boxDivStyle}>

            <Box
              title="About"
              text="What is this page, our clients and specialties."
              imgSrc="../../../img/about.jpg"/>
            <Box
              title="Portfolio"
              text="Web design, app design, print works and photography."
              imgSrc="../../../img/portfolio.jpg"/>
            <Box
              title="Contacts"
              text="Where to find, contact module and more."
              imgSrc="../../../img/contacts.jpg"/>

          </div>
        </div>
      </div>
    );
  }
}
