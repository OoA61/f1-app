import React, { useState } from "react";

const TabDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block", position: "relative" }}
    >
      <div style={{ cursor: "pointer" }}>Tab Item</div>
      {showDropdown && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            listStyle: "none",
            padding: 0
          }}
        >
          <li>Dropdown Item 1</li>
          <li>Dropdown Item 2</li>
          <li>Dropdown Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default TabDropdown;
