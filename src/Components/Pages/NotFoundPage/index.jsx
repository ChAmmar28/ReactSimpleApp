import React from "react";
import MyLinks from "../../MyLinks";
import style from "./style.module.scss";

function NotFoundPage() {
  return (
    <div className={style.NotFoundText}>
      <p>Page Not Found </p> <MyLinks aText=" Go Home Page" href="/" />
    </div>
  );
}

export default NotFoundPage;
