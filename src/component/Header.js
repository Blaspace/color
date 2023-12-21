import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <Nav />
      <div className="header-con"></div>
      <span>
        <h1>Simply the Best</h1>
        <br />
        <h3>Reasons for Choosing Us</h3>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          dolore ab nam accusamus sit, nihil voluptatibus quia odio earum
        </p>
        <br />
        <button>Contact Us</button>
      </span>
    </header>
  );
}

export default Header;
