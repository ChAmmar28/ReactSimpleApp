import React from "react";
import HeaderLogo from "../../HeaderLogo";
import HeaderNavBar from "../../HeaderNavBar";

// scss
import style from "./style.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <HeaderLogo></HeaderLogo>
      <HeaderNavBar></HeaderNavBar>
    </header>
  );
}

export default Header;
