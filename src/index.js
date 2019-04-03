import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "normalize.css";
import App from "./components/App";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
