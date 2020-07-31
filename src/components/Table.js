import React from "react";

const Table = ({
  tableItems,
  onEditClick,
  onDeleteClick,
  gridColumns,
  headings = [],
}) => {
  return (
    <>
      <div
        className="tableRowStyle borderTop marginTop"
        style={{
          gridTemplateColumns: gridColumns,
        }}
      >
        <div>
          <input type="checkbox" />
        </div>
        {headings.map((heading) => (
          <div style={{ fontWeight: "bold", fontSize: 12 }} key={heading}>
            {heading}
          </div>
        ))}
      </div>
      {tableItems.map((tableItem, index) => {
        return (
          <div
            className="tableRowStyle"
            style={{
              gridTemplateColumns: gridColumns,
            }}
            key={tableItem.id || tableItem._id}
          >
            <div>
              <input type="checkbox" />
            </div>
            <div className="font12">
              {tableItem.name || tableItem.first_name}
            </div>
            <div className="font12">
              {tableItem.type || tableItem.last_name}
            </div>
            <div className="font12">
              {tableItem.lastSaved || tableItem.email}
            </div>
            <div className="font12">
              <i
                className="fa fa-edit edit updateStyle"
                onClick={() => {
                  onEditClick(tableItem);
                }}
                style={{ marginRight: 24 }}
              ></i>
              <i
                className="fa fa-times-circle-o delete deleteStyle"
                onClick={() => {
                  onDeleteClick(tableItem);
                  // props.deleteCampaign(campaign._id);
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Table;
