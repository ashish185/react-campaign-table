import { getFormattedDate } from "../utility-functions";
import {
  FETCH_DATA,
  FORM_SUB_SUCC,
  FORM_SUB_FAIL,
  SET_MODAL_SHOW_UNSHOW_STATE,
  SET_DELETE_MODAL_SHOW_UNSHOW_STATE,
  SET_MARK_AS_UPDATE_SHOW_UNSHOW_STATE
} from "./actions-constants";
/* const tableData = [
  {
    id: 1,
    updated_at: "2019-06-12T12:11:39.127842Z",
    created_at: "2019-06-12T12:11:39.127901Z",
    first_name: "Nilesh",
    last_name: "Agarwal",
    mobile: "9871028111",
    email: "abc@gmail.com",
    location_type: "City",
    location_string: "India",
    status: "Created",
    communication: null,
    tags: null,
  },
]; */
const intialState = {
  tableData: [],
  formRes: null,
  formFail: false,
  showModal: false,
  showDeleteModal: false,
  showMarkAsUpdateModal: false,
  comTxt:'',
  live_events:[],
  upcoming_events:[],
  past_events:[]
};
const campaignReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      const data=action.data;
      const live_events=[];
        const upcoming_events=[];
        const past_events=[];
        data.forEach(compObj => {
            const obj = getFormattedDate(compObj.createdOn)
            if(obj.daysDiff>0){
                past_events.push(compObj);
            }
            else if(obj.daysDiff<0){
                upcoming_events.push(compObj);
            }
            else{
              live_events.push(compObj);
            }
        });
      return {
        ...state,
        tableData: [],
        live_events: live_events,
        upcoming_events:upcoming_events,
        past_events:past_events
      };
    case FORM_SUB_SUCC: {
      return {
        ...state,
        formRes: action.payload,
        showModal: action.payload ? false : true,
      };
    }
    case FORM_SUB_FAIL:
      return {
        ...state,
        formFail: action.payload,
      };
    case SET_MODAL_SHOW_UNSHOW_STATE:
      return {
        ...state,
        showModal: action.payload
      };
    case SET_DELETE_MODAL_SHOW_UNSHOW_STATE:
      return {
        ...state,
        showDeleteModal: action.showState,
        id: action.id
      };
    case SET_MARK_AS_UPDATE_SHOW_UNSHOW_STATE:
      return {
        ...state,
        showMarkAsUpdateModal: action.showState,
        id: action.id,
        comTxt: action.comTxt
      };
    default:
      return state;
  }
};
export default campaignReducer;
