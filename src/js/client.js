import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Sample from "./pages/Sample";
import Todos from "./pages/Todos";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";

// Inside Sample
import Presentation from "./pages/samplePages/Presentation";
import FormData from "./pages/samplePages/FormData";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="sample" component={Sample}>
        <Route path="presentation" component={Presentation}></Route>
        <Route path="formdata" component={FormData}></Route>
      </Route>
      <Route path="todos" component={Todos}></Route>
      <Route path="favorites" component={Favorites}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
