import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import campaignReducer from "./Store/campaign-reducer";
import MainCompaignPage from "./Containers/MainCompaignPage";

// BACKEND ENDPOINT BASE URL
console.log("(process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  campaignReducer,
  composeEnhancers()
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainCompaignPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
