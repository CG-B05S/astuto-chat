import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const EnterMessage = ({ onEnterMessage }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onEnterMessage(query);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex relative mb-8">
      <input
        value={query}
        onChange={handleChange}
        placeholder={
          window.innerWidth < 768
            ? "Search..."
            : "Start typing your query here..."
        }
        className="input input-md input-bordered pl-[2.3rem] w-full"
      />

      <FontAwesomeIcon
        icon={faCode}
        className="absolute right-14 top-[35%] -translate-x-2/4 text-base-content/70"
      />

      <button type="button" onClick={handleSubmit} disabled={!query.trim()}>
        <FontAwesomeIcon
          icon={faPaperPlane}
          className={`absolute right-5 top-[35%] -translate-x-2/4 text-base-content/70 ${!query.trim() ? 'text-base-content/30' : 'cursor-pointer'}`}
        />
      </button>
    </form>
  );
};

export default EnterMessage;
