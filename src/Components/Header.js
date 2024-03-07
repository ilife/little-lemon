import React from "react";
import Logo from '../Images/Logo.svg'

const Header = () => {
  return (
    <header>
        <meta name="description" content="Little Lemon restaurant app"/>
        <meta name="og:title" content="Little Lemon"/>
        <meta name="og:description" content=""/>
        <meta name="og:image" content=""/>
        <img src={Logo} alt="Visit the MDN site" />
    </header>
  );
};

export default Header;
