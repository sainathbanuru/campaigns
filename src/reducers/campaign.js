import moment from "moment";
import { actionTypes } from "../actions";
import { CAMPAINGNS } from "../constants";
import { AddTimeStamp } from "../utils";

const INITIAL_STATE = {
  updating: false,
  page: 0,
  total: CAMPAINGNS.length,
  campaigns: AddTimeStamp(CAMPAINGNS),
  searchList: AddTimeStamp(CAMPAINGNS),
};

const campaignReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PAGE: {
      return { ...state, page: action.payload };
    }
    case actionTypes.UPDATE_SEARCH_RESULTS: {
      return { ...state, page: 0, searchList: action.payload, updating: false };
    }

    case actionTypes.UPDATE_SEARCH_ITEM: {
      const updatedCampaigns = state.campaigns.map((campaign) => {
        if (campaign._id == action.payload._id) {
          return {
            ...campaign,
            ...action.payload,
            lastSaved: moment().format("ddd, MMM Do, hh:mm a "),
          };
        }
        return campaign;
      });
      return {
        ...state,
        campaigns: updatedCampaigns,
        searchList: updatedCampaigns,
        updating: false,
      };
    }

    case actionTypes.DELETE_CAMPAIGN: {
      const updatedCampaigns = state.campaigns.filter(
        (campaign) => campaign._id !== action.payload
      );
      return {
        ...state,
        campaigns: updatedCampaigns,
        searchList: updatedCampaigns,
        updating: false,
        total: state.total - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default campaignReducer;
