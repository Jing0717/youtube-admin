import React from 'react';
import "./topbar.css";
import { NotificationsNone as NotificationsNoneIcon, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">jingadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://i.pravatar.cc/300" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
