import React, { useState } from "react";

export default function Collapse({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`collapse-container ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="collapse-wrapper">
          <div
            className="collapse-title collapse"
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <i
              className={`fa-solid ${
                openIndex === index ? "fa-chevron-down" : "fa-chevron-up"
              }`}
            ></i>
          </div>
          {openIndex === index && (
            <div className="collapse-bg">
              <div className="collapse-content">
                {item.title === "Équipements" ? (
                  <ul>
                    {item.content.split(", ").map((equipment, i) => (
                      <li key={i}>{equipment}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
