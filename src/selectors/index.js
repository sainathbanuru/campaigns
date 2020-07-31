import { createSelector } from "reselect";
import { PER_PAGE_CAMPAIGNS } from "../constants";

const getCampaigns = (state) => state.campaigns.searchList;
const currentPage = (state) => state.campaigns.page;

export const getCampaignsSelector = createSelector(
  getCampaigns,
  currentPage,
  (campaigns, page) =>
    campaigns.slice(
      page * PER_PAGE_CAMPAIGNS,
      page * PER_PAGE_CAMPAIGNS + PER_PAGE_CAMPAIGNS
    )
);

export const getCampaignTotal = createSelector(
  getCampaigns,
  (campaigns) => campaigns.length
);
