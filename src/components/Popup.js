import React, { Children } from "react";

const Popup = ({ onClose, showModal, children }) => {
  if (!showModal) {
    return null;
  }
  return (
    <div
      className="popupOverlay"
      onClick={() => {
        onClose();
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          opacity: "100%",
          display: "block",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
