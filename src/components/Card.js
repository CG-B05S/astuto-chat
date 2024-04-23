import React from "react";

function Card({ tips, title, body }) {
  return (
  <div>
      <div>{tips}</div>
    <div className="border-2 border-success rounded-md flex flex-col gap-4 p-4 bg-base-100">
      <div className="font-bold">{title}</div>
      <div className="text-sm">{body}</div>
    </div>
  </div>
  );
}

export default Card;
