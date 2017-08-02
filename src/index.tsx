import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";

// import { Hello } from "./components/Hello";
import { App } from "./components/app";

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );

const reducer = function() {

}

// const store = createStore(reducer, {});

ReactDOM.render(
    <App someDefaultValue="Jason" />,
    document.getElementById("example")
);