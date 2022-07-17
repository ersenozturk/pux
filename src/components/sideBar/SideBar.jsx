// import React, { useState } from "react";
import "./sideBar.css";
import { menuItemData } from "../../helper/DropDownData";
import logoipsum from "../../assets/logoipsum-logo-17.svg";
import MenuItem from "./menuItem/MenuItem";

const SideBar = () => {
  return (
    <div className="leftBar">
      <div className="logoipsum">
        <img src={logoipsum} alt="logo" />
      </div>

      {menuItemData.map((eachItem) => (
        <MenuItem
          text={eachItem.text}
          icon={eachItem.icon}
          class1={eachItem.class1}
          class1C={eachItem.class1C}
          class2={eachItem.class2}
          class2C={eachItem.class2C}
          classText={eachItem.classText}
          classMenuItem={eachItem.classMenuItem}
        />
      ))}
    </div>
  );
};

export default SideBar;
