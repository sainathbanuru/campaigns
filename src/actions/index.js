import { CAMPAINGNS } from "../constants";

export const actionTypes = {
  UPDATE_PAGE: "updatePage",
  UPDATE_SEARCH_RESULTS: "updateSearchResults",
  UPDATE_SEARCH_ITEM: "updateSearchItem",
  DELETE_CAMPAIGN: "deleteCampaign",
  ADD_CAMPAIGN_LIST: "addCampaignList",
};

export const addCampaignList = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_CAMPAIGN_LIST,
      payload: CAMPAINGNS,
    });
  };
};

export const updateCampaign = (campaignDetails) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_SEARCH_ITEM,
      payload: campaignDetails,
    });
  };
};

export const deleteCampaign = (campaignId) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.DELETE_CAMPAIGN,
      payload: campaignId,
    });
  };
};

export const updatePage = (page) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_PAGE,
      payload: page,
    });
  };
};

export const updateSearchResults = (word, campaigns) => {
  return (dispatch) => {
    const filteredResults = campaigns.filter(
      (campaign) =>
        campaign.name.toLowerCase().includes(word) ||
        campaign.type.toLowerCase().includes(word)
    );
    dispatch({
      type: actionTypes.UPDATE_SEARCH_RESULTS,
      payload: filteredResults,
    });
  };
};
