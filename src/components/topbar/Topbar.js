import React from "react";
import Avatar from "../../components/avatar/Avatar"
import "./Topbar.css"

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Administrator</span>
        </div>
        <div className="topRight">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Topbar;