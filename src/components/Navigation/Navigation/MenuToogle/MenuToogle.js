import React from "react";
import "./MenuToogle.css";
const MenuToogle = props => {
  const cls = ["MenuToogle", "fa"];
  if (props.isOpen) {
    cls.push("fa-times");
    cls.push("open");
  } else {
    cls.push("fa-bars");
  }
  return <i className={cls.join(" ")} onClick={props.onToogle} />;
};
export default MenuToogle;
