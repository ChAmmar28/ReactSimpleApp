import React from "react";
import siteLogo from "../../assets/Images/one-piece-straw-pirates-flag-512x512.png";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

function HeaderLogo() {
  return (
    <Link to="/" className={style.logo}>
      <img src={siteLogo} alt="AnimuStore" />
      SenkuAnimeStore
    </Link>
  );
}

export default HeaderLogo;
