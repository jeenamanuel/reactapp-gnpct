import React from "react";
import {render} from "react-dom";
import Routes from "./app/Routes";
import store from "./app/Store";
import { Provider } from "react-redux";

//host react App in root div element
render(<Provider store={store}>
            <Routes /> 
     </Provider>, 
document.getElementById("root"));



