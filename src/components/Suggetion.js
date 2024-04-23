import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import data from "./data.json";

function Suggetions({
  message,
  onClick,
  setActiveSuggestion,
  clickedSuggestions,
  setClickedSuggestions,
}) {
  const [showSendButton, setShowSendButton] = useState(false);
  const isDisabled = clickedSuggestions.includes(message);

  const handleMouseEnter = () => {
    if (!isDisabled) {
      setShowSendButton(true);
    }
  };

  const handleMouseLeave = () => {
    setShowSendButton(false);
  };

  const handleClick = () => {
    if (!isDisabled) {
      setActiveSuggestion(message);

      const updatedClickedSuggestions = [...clickedSuggestions, message];
      setClickedSuggestions(updatedClickedSuggestions);

      if (updatedClickedSuggestions.length === data.length) {
        setActiveSuggestion(null);
      }

      onClick(message);
    }
  };
  return (
    <div
      className={`card bg-base-200 border-base-content/20 hover:bg-base-200 flex h-16 sm:h-14 min-[280px]:h-10 gap-4 flex-row items-center justify-between border px-8 shadow-sm cursor-pointer relative ${
        isDisabled ? "pointer-events-none opacity-50" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className="sm:text-sm min-[280px]:text-xs">{message}</span>
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        {showSendButton && (
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-success text-base-content/70"
          />
        )}
      </div>
    </div>
  );
}

export default Suggetions;
