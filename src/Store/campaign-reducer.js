import { getFormattedDate } from "../utility-functions";
import {
  FETCH_DATA,
  UPDATE_TIMESTAMP,
} from "./actions-constants";

const intialState = {
  tableData: [],
  live_events: [],
  upcoming_events: [],
  past_events: []
};

const campaignReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      const data = action.data;
      const live_events = [];
      const upcoming_events = [];
      const past_events = [];
      data.forEach(compObj => {
        const obj = getFormattedDate(compObj.createdOn)
        if (obj.daysDiff > 0) {
          past_events.push(compObj);
        }
        else if (obj.daysDiff < 0) {
          upcoming_events.push(compObj);
        }
        else {
          live_events.push(compObj);
        }
      });
      return {
        ...state,
        tableData: [],
        live_events: live_events,
        upcoming_events: upcoming_events,
        past_events: past_events
      };
    case UPDATE_TIMESTAMP:
      const rowInfo = action.payload;
      const updateObject = (key, pastEventsCopy, arr) => {
        const obj = { ...pastEventsCopy[rowInfo.rowIndex] };
        obj.createdOn = rowInfo.timeStamp;
        const upcoming_events = [...state[key], obj];
        return {
          ...state,
          past_events: arr,
          [key]: upcoming_events
        };
      }
      const updateTheTimeStamp = (pastEventsCopy, eventType) => {
        pastEventsCopy[rowInfo.rowIndex].createdOn = rowInfo.timeStamp;
        return {
          ...state,
          [eventType]: pastEventsCopy
        };
      }
      const getEventType = (eventType) => {
        const pastEventsCopy = [...state[eventType]];
        const diff = getFormattedDate(rowInfo.timeStamp).daysDiff;
        const arr = [...pastEventsCopy.slice(0, rowInfo.rowIndex), ...pastEventsCopy.slice(rowInfo.rowIndex + 1)];

        if (diff > 0) {
          if (eventType === "past_events") {
            return updateTheTimeStamp(pastEventsCopy, eventType)
          }
          if (eventType === "upcoming_events") {
            const obj = { ...pastEventsCopy[rowInfo.rowIndex] };
            obj.createdOn = rowInfo.timeStamp;
            const past_events = [...state["past_events"], obj];
            return {
              ...state,
              past_events: past_events,
              upcoming_events: arr
            };
          }
          return updateObject("past_events", pastEventsCopy, arr);
          //past_events
        } if (diff < 0) {
          //future_events
          if (eventType === "upcoming_events") {
            return updateTheTimeStamp(pastEventsCopy, eventType)
          }
          return updateObject("upcoming_events", pastEventsCopy, arr);
        } else {
          //live Comapaign
          if (eventType === "live_events") {
            return updateTheTimeStamp(pastEventsCopy, eventType)
          }
          if (eventType === "upcoming_events") {
            const obj = { ...pastEventsCopy[rowInfo.rowIndex] };
            obj.createdOn = rowInfo.timeStamp;
            const past_events = [...state["live_events"], obj];
            return {
              ...state,
              live_events: past_events,
              upcoming_events: arr
            };
          }
          const obj = { ...pastEventsCopy[rowInfo.rowIndex] };
          obj.createdOn = rowInfo.timeStamp;
          const live_events = [...state["live_events"], obj];
          return {
            ...state,
            past_events: arr,
            live_events: live_events
          }
        }
      }

      if (rowInfo.tabIndex === 2) {
        return getEventType("past_events");
      }
      else if (rowInfo.tabIndex === 1) {
        return getEventType("live_events");
      }
      else {
        return getEventType("upcoming_events");
      }
    default:
      return state;
  }
};
export default campaignReducer;
