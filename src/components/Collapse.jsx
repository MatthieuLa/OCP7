import React, { useState } from "react";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false); // State variable to track whether the collapse is open or closed

  return (
    <div className="collapse-wrapper">
      <div
        className="collapse-title collapse"
        onClick={() => {
          setIsOpen((previous) => !previous); // Toggle the isOpen state when the title is clicked
        }}
      >
        {title} {/* Display the title */}
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`} // Display the chevron icon based on the isOpen state
        ></i>
      </div>
      {isOpen && (
        <div className="collapse-bg">
          <div className="collapse-content">{children}</div>{" "}
          {/* Display the content if the collapse is open */}
        </div>
      )}
    </div>
  );
}
