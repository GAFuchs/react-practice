import React from "react";
import Carousel from "nuka-carousel";

export default class Presentation extends React.Component {
  constructor(props) {
    super();
  }
/*
<img
  src="../../../img/slider/slider1.jpg"/>
<img
  src="../../../img/slider/slider2.jpg"/>
<Carousel>
  <img
    src="../../../img/slider/slider1.jpg"/>
  <img
    src="../../../img/slider/slider2.jpg"/>
  <img
    src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
  <img
    src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
  <img
    src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
  <img
    src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
  <img
    src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
  <img
    src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
</Carousel>
*/
  render() {

    return (
      <div>
        <Carousel>
          <img
            src="../../../img/slider/slider1.jpg"/>
          <img
            src="../../../img/slider/slider2.jpg"/>
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
          <img
            src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
        </Carousel>
      </div>
    );
  }
}
