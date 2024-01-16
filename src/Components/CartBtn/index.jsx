import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CartBtn({ sClass }) {
  const [state, funct] = useState();
  return (
    <NavLink to="/CartPage" className={sClass}>
      <span>{}</span>| #<span>{}</span>
    </NavLink>
  );
}

export default CartBtn;
