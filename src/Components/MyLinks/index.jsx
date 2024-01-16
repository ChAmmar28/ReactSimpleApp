import React from "react";

import { NavLink } from "react-router-dom";

function MyLinks({ aText, href, sClass }) {
  return (
    <NavLink to={href} className={sClass}>
      {aText}
    </NavLink>
  );
}

export default MyLinks;
