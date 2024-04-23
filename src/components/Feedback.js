import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function Feedback() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (type) => {
    if (type === "up") {
      setFeedback("Thanks for your feedback!");
    } else {
      setFeedback("We're sorry to hear that. We'll strive to do better.");
    }
  };

  return (
    <div className="flex gap-4 mb-6 mt-2">
      {!feedback && (
        <>
          <div className="text-xs">Have the answers been satisfactory so far?</div>
          <FontAwesomeIcon 
            icon={faThumbsUp} 
            className="cursor-pointer"
            onClick={() => handleFeedback("up")}
          />
          <FontAwesomeIcon 
            icon={faThumbsDown} 
            className="cursor-pointer"
            onClick={() => handleFeedback("down")}
          />
        </>
      )}
      {feedback && <div className="text-xs">{feedback}</div>}
    </div>
  );
}

export default Feedback;
