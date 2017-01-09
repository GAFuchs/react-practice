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
    };

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

        <div class="container" style={containerStyle}>
          <h1>Presentation Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <div class="col-md-4">
            <div class="media">
              <div class="row">
                <div class="media-img  pull-left  col-sm-5  col-md-4 ">
                  <img src="../../../img/about.jpg" alt="About" width="150" height="150"/>
                </div>
                <div class="media-body col-sm-7 col-md-8">
                  <h4>About</h4>
                  <p class="hiden-sm">What is this page, our clients and specialties.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
          </div>
          <div class="col-md-4">
          </div>
        </div>

      </div>
    );
  }
}
