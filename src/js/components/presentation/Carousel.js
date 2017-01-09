import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super();
  }

  buildLiList() {
    return this.props.imgList.map(
      (_,i) => (<li data-target="#myCarousel"
                  data-slide-to="{i}"
                  class={i === 0 ? "active" : ""}>
                </li>)
    );
  }

  buildDivImgList() {
    return this.props.imgList.map(
      (imgSrc,i) => ( <div class={i === 0 ? "item active" : "item"}>
                        <img src={imgSrc} />
                      </div>)
    );
  }

  render() {

    const liList = this.buildLiList();
    const divImgList = this.buildDivImgList();

    return (
      <div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">

          <ol class="carousel-indicators">
            {liList}
          </ol>

          <div class="carousel-inner" role="listbox">
            {divImgList}
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
