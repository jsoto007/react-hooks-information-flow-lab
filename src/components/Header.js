import React from "react";

function Header({ onDarkModeClick, onIsDarkMode }) {
    
    return (
      <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {onIsDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
    )
  }

  export default Header;