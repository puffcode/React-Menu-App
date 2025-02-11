import React from "react";

const MenuItem = ({ itemId, itemPrice, itemName, itemDescription }) => {
  return (
    <div className="menu-item">
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
      <p>Price: ${itemPrice}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default MenuItem;
