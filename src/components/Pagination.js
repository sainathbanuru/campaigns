import React from "react";
import _ from "lodash";

const Pagination = ({ numberOfpages, page, updatePage }) => {
  return (
    <div className="flex-row marginTop justifyCenter">
      {_.map([...Array(numberOfpages).keys()], (key) => (
        <div
          className="paginationItem"
          style={{
            color: page == key ? "#fff" : "#121212",
            backgroundColor: page == key ? "#410daa" : "transparent",
          }}
          onClick={() => updatePage(key)}
          key={key}
        >
          {key + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
