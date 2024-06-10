import React, { useState } from "react";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-wrapper">
      <div
        className="collapse-title collapse"
        onClick={() => {
          setIsOpen((previous) => !previous);
        }}
      >
        {title}
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>
      </div>
      {isOpen && (
        <div className="collapse-bg">
          <div className="collapse-content">{children}</div>
        </div>
      )}
    </div>
  );
}
