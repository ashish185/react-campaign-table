import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import campaignReducer from "./Store/campaign-reducer";
import MainCompaignPage from "./Containers/MainCompaignPage";

const data1=[
{
  "name": "Super man",
  "region": "US",
  "createdOn": 1559807714999,
  "price": "Price info of Test Whatsapp",
  "csv": "Some CSV link for Whatsapp",
  "report": "Some report link for Whatsapp",
  "image_url": "Dashboard/Row Copy 1-Row/Thumb/Bitmap.png"
},
{
  "name": "Super Jewels Quest",
  "region": "CA, FR",
  "createdOn": 1559806715124,
  "price": "Price info of Super Jewels Quest",
  "csv": "Some CSV link for Super Jewels Quest",
  "report": "Some report link for Super Jewels Ques",
  "image_url": "Dashboard/Row Copy 2-Row/Thumb/Bitmap.png"
},
{
  "name": "Mole Slayer",
  "region": "FR",
  "createdOn": 1559806711124,
  "price": "Price info of Mole Slayer",
  "csv": "Some CSV link for Mole Slayer",
  "report": "Some report link for Mole Slayer",
  "image_url": "Dashboard/Row Copy 3-Row/Thumb/Bitmap.png"
},
{
  "name": "Mancala Mix",
  "region": "JP",
  "createdOn": 1559806680124,
  "price": "Price info of Mancala Mix",
  "csv": "Some CSV link for Mancala Mix",
  "report": "Some report link for Mancala Mix",
  "image_url": "Dashboard/Row Copy 4-Row/Thumb/Bitmap.png"
}
];
// BACKEND ENDPOINT BASE URL
console.log("(process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  campaignReducer,
  composeEnhancers()
);
ReactDOM.render(
    <Provider store={store}>
      <MainCompaignPage data={data1}/>
    </Provider>,
  document.getElementById("root")
);
