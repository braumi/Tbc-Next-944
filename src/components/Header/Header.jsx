import React from "react";
import "@/app/globals.css";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="menu-icon">
        <span>☰</span>
        <span>Menu</span>
      </div>
      <div className="logo">
        <h1>Porsche 944</h1>{" "}
        {/* <img src="/path-to-logo.png" alt="Porsche Logo" /> fotos ro gavchitav chaismeva
         */}
      </div>
      <div className="profile-icon">
        <span>👤</span>
      </div>
    </header>
  );
};

export default Header;
