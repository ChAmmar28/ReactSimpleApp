import React, { useEffect, useState } from "react";
import Cards from "../Cards";

function CardContainer() {
  const [array, GetData] = useState();
  useEffect(() => {
    fetch(
      "https://private-anon-f56ea27a4e-pizzaapp.apiary-mock.com/restaurants/2/menu"
    )
      .then((data) => data.json())
      .then((res) => GetData(res));
  }, []);
  console.log(array);
  return (
    <div>
      {array && array.map((item) => <Cards key={item.id} data={item} />)}
    </div>
  );
}

export default CardContainer;
