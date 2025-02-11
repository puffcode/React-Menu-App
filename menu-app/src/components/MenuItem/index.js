import React from "react";

const MenuItem = ({ itemId, itemPrice, itemName, itemDescription }) => {
  return (
    <div className="menu-item" data-item-id={itemId}>
      <p>${itemPrice}</p>
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default MenuItem;
