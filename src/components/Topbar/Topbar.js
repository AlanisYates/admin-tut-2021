import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons/";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">ayAdmin</span>
        </div>
        <div className="top-right">
          <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Language />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
