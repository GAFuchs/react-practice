import React from "react";

export default class Home extends React.Component {
  render() {
    const googleProfilePic = "img/PerfilGabrielFuchs.jpg";
    const imgStyle = {
      maxHeight: "150px",
    };

    return (
      <div class="text-center col-lg-12">
        <img src={googleProfilePic}
         class="img-responsive img-circle center-block"
         style={imgStyle}/>
        <h1>Gabriel Amaral Fuchs</h1>
        <p>Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie</p>
      </div>
    );
  }
}
