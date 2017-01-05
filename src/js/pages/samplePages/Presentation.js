import React from "react";

export default class Presentation extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    return (
      <div>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">

          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="../../../img/slider/slider1.jpg" alt="Chania"/>
            </div>

            <div class="item">
              <img src="../../../img/slider/slider2.jpg" alt="Chania"/>
            </div>
          </div>

          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </div>
    );
  }
}
