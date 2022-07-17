import React, { useState } from "react";
import "./menuItem.css";

const MenuItem = ({
  icon,
  text,
  class1,
  class1C,
  class2,
  class2C,
  classText,
  classMenuItem,
}) => {
  const [bgColorCyan, setBgColorCyan] = useState(false);

  const handleClick = () => {
    setBgColorCyan(!bgColorCyan);
  };

  return (
    <div className={classMenuItem}>
      <div className={bgColorCyan ? class1C : class1} onClick={handleClick}>
        <div className={bgColorCyan ? class2C : class2}>{icon}</div>
      </div>
      <div className={classText}>{text}</div>
    </div>
  );
};

export default MenuItem;
