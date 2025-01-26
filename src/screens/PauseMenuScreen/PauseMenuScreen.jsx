import React from "react";
import { Link } from "react-router-dom";
import "./PauseMenuScreen.css";
import bg from "../../assets/paper1.png"; 

const PauseMenuScreen = ({ setScreen }) => {
  return (
    <div id="pause-menu-screen">
      <div id="pause-container">
        <img src={bg} alt="Background" id="pause-bg" />
        <div id="pause-content">
          <h2>PAUSE</h2>
          <ul className="menu-options">
            <li>
              <Link to="/resume" className="menu-item">
                RESUME
              </Link>
            </li>
            <li>
              <Link to="/home" className="menu-item">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/how-to-play" className="menu-item">
                HOW TO PLAY
              </Link>
            </li>
            <li>
              <Link to="/mode-selection" className="menu-item">
                CHANGE GAME MODE
              </Link>
            </li>
            <li>
              <Link to="/settings" className="menu-item">
                SETTINGS
              </Link>
            </li>
          </ul>
          <Link to="/quit" className="menu-footer">
            QUIT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PauseMenuScreen;
