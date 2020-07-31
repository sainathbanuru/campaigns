import React, { useState } from "react";
import { connect } from "react-redux";
import { tableHeadings } from "../constants";
import Pagination from "./Pagination";
import Popup from "./Popup";
import {
  updateCampaign,
  deleteCampaign,
  updatePage,
  addCampaignList,
} from "../actions";
import Table from "./Table";
import { getCampaignsSelector, getCampaignTotal } from "../selectors";

const SearchList = ({ campaigns, page, ...props }) => {
  const [showUpdateModal, toggleShowUpdateModal] = useState(false);
  const [selectedSearchItem, setSelectedSearchItem] = useState(null);
  const [campaignName, setCampaignName] = useState(null);
  const [type, setType] = useState(null);
  const [lastSaved, setLastSaved] = useState(null);

  const onUpdateClicked = () => {
    const updatedCampaignDetails = {
      _id: selectedSearchItem,
      name: campaignName,
      type: type,
    };
    props.updateCampaign(updatedCampaignDetails);
    setCampaignName(null);
    setType(null);
    setLastSaved(null);
    toggleShowUpdateModal(false);
  };

  if (props.updating) {
    return <div className="loader"></div>;
  }

  const onEditClick = (item) => {
    toggleShowUpdateModal(true);
    setSelectedSearchItem(item._id);
    setCampaignName(item.name);
    setType(item.type);
    setLastSaved(item.lastSaved);
  };

  const onDeleteClick = (item) => {
    props.deleteCampaign(item._id);
  };

  return (
    <div>
      <Table
        tableItems={campaigns}
        gridColumns={"0.5fr 1fr 1fr 1fr 0.5fr"}
        headings={[
          tableHeadings.CAMPAIGN,
          tableHeadings.TYPE,
          tableHeadings.LAST_SAVED,
          tableHeadings.ACTIONS,
        ]}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
      />

      <Pagination
        numberOfpages={Math.ceil(props.total / 10)}
        page={page}
        updatePage={(page) => {
          props.updatePage(page);
        }}
      />
      <Popup
        showModal={showUpdateModal}
        onClose={() => toggleShowUpdateModal(false)}
      >
        <div className="popupContentContainer">
          <p style={{ marginBottom: 8, fontSize: 12, fontWeight: "bold" }}>
            Campaign Name
          </p>

          <input
            className="inputBox"
            onChange={(e) => setCampaignName(e.target.value)}
            value={campaignName}
          />
          <p style={{ marginBottom: 8, fontSize: 12, fontWeight: "bold" }}>
            Type
          </p>
          <input
            className="inputBox"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <p style={{ marginBottom: 8, fontSize: 12, fontWeight: "bold" }}>
            Last Updated:{" "}
            <span style={{ fontWeight: "normal" }}>{lastSaved}</span>
          </p>
          <button className="updateButton" onClick={onUpdateClicked}>
            Update
          </button>
          <p
            className="cancelText"
            onClick={() => toggleShowUpdateModal(false)}
          >
            Cancel
          </p>
        </div>
      </Popup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  campaigns: getCampaignsSelector(state),
  total: getCampaignTotal(state),
  page: state.campaigns.page,
  updating: state.campaigns.updating,
});

export default connect(mapStateToProps, {
  updateCampaign,
  deleteCampaign,
  updatePage,
})(SearchList);
