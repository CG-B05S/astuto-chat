import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faDownload } from "@fortawesome/free-solid-svg-icons";

const ButtonActions = ({ exportData, refreshPage }) => {
  return (
    <div className="flex justify-between items-end mt-2 mb-4">
      <div className="flex gap-2 items-center text-xs">
        <FontAwesomeIcon
          icon={faClone}
          className="text-success"
        />
        <span className="text-success cursor-pointer">Add to Dashboard</span>
      </div>
      {exportData ? (
        <div className="flex gap-2 items-center mt-2 text-xs">
          <FontAwesomeIcon
            icon={faDownload}
            className="text-success"
          />
          <span className="text-success cursor-pointer">Export</span>
        </div>
      ) : (
        <span
          className="link link-error text-xs"
          onClick={refreshPage}
        >
          End prototype
        </span>
      )}
    </div>
  );
};

export default ButtonActions;
