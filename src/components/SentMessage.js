import React from "react";
import userImage from "../assets/user.jpeg";

const SentMessage = ({ message }) => {
  return (
    <div className="flex items-center mx-4 bg-info/10 rounded-lg px-4">
      <img
        src={userImage}
        alt="My Pic"
        className="w-8 h-8 rounded-lg"
      />
      <div className="p-4 rounded-lg sm:text-sm min-[280px]:text-xs">{message.text}</div>
    </div>
  );
};

export default SentMessage;
