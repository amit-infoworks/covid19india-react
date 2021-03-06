import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./toggle";
import PropTypes from "prop-types";

Navbar.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};

function Navbar(props) {
  const { darkMode, setDarkMode } = props;
  const [view, setView] = useState("Home");

  if (window.location.pathname !== "/summary") {
    return (
      <div
        className="Navbar"
        style={{
          animationDelay: "0.5s",
          height: view === "Clusters" ? "2.5rem" : "",
          transition: "all 0.3s ease-in-out"
        }}
      >
        <img
          className="fadeInUp"
          src={darkMode ? "/icon-dark.png" : "/icon.png"}
          style={{
            animationDelay: "0.0s",
            width: view === "Clusters" ? "1.5rem" : "",
            height: view === "Clusters" ? "1.5rem" : "",
            transition: "all 0.3s ease-in-out"
          }}
        />

        <div className="navbar-left">
          <Link
            to="/"
            onClick={() => {
              setView("Home");
            }}
          >
            <span
              className={`fadeInUp ${view === "Home" ? "focused" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              Home
            </span>
          </Link>

          <Link
            to="/clusters"
            onClick={() => {
              setView("Clusters");
            }}
          >
            <span
              className={`fadeInUp ${view === "Network Map" ? "focused" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              Clusters
            </span>
          </Link>

          <Link
            to="/links"
            onClick={() => {
              setView("Helpful Links");
            }}
          >
            <span
              className={`fadeInUp ${
                view === "Helpful Links" ? "focused" : ""
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              Helpful Links
            </span>
          </Link>

          <Link
            to="/faq"
            onClick={() => {
              setView("FAQs");
            }}
          >
            <span
              className={`fadeInUp ${view === "FAQs" ? "focused" : ""}`}
              style={{ animationDelay: "0.4s" }}
            >
              FAQ
            </span>
          </Link>
        </div>

        <div className="navbar-right">
          <ToggleButton setValue={setDarkMode} value={darkMode} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Navbar;
