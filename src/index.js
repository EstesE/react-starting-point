import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import 'bootstrap';
import './scss/app.scss';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.hydrate(document.getElementById('root'), App);
