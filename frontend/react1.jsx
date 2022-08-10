import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () =>{
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
});
/*
Write an entry point file that renders the `Root` component, with a `store`
prop passed in, inside the div with id 'root'.
*/
