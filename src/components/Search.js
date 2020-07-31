import React, { useState } from "react";
import { connect } from "react-redux";
import { updateSearchResults } from "../actions";
import { SEARCH_PLACEHOLDER_TEXT } from "../constants";
import { debounce } from "../utils";

const Search = (props) => {
  const [searchWord, setSearchWord] = useState("");

  const onSearchWordChange = (e) => {
    setSearchWord(e.target.value);
    props.updateSearchResults(e.target.value, props.campaigns);
  };

  return (
    <div className="flex-row">
      <input
        className="inputBox"
        value={searchWord}
        onChange={onSearchWordChange}
        placeholder={SEARCH_PLACEHOLDER_TEXT}
      />
      <button className="buttonStyle">Advanced Filters</button>
    </div>
  );
};

const mapsStateToProps = (state) => {
  return {
    campaigns: state.campaigns.campaigns,
  };
};

export default connect(mapsStateToProps, { updateSearchResults })(Search);
