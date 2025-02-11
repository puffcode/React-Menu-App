import "./App.css";
import MenuApp from "./components/MenuApp";

let data = {
  menuName: "Dessert",
  menuItems: [
    {
      itemId: 1,
      itemPrice: "7",
      itemName: "Chocolate Cake",
      itemDescription:
        "A slice of chocolate cake, covered in a chocolate frosting and served with a scoop of vanilla ice cream.",
    },
    {
      itemId: 2,
      itemPrice: "10",
      itemName: "Cinnamon Roll",
      itemDescription:
        "A freshly baked cinnamon roll, topped with cream cheese frosting.",
    },
    {
      itemId: 3,
      itemPrice: "12",
      itemName: "Guava Pastry",
      itemDescription:
        "A flaky puff pastry filled with guava paste and cream cheese.",
    },
    {
      itemId: 4,
      itemPrice: "10",
      itemName: "Cheesecake",
      itemDescription:
        "A slice of New York-style cheesecake, served with a strawberry sauce.",
    },
    {
      itemId: 5,
      itemPrice: "11",
      itemName: "Mochi Ice Cream",
      itemDescription:
        "A scoop of ice cream wrapped in a layer of mochi rice cake. Available in chocolate, strawberry, and matcha flavors.",
    },
    {
      itemId: 6,
      itemPrice: "12",
      itemName: "Lava Brownie",
      itemDescription: "A chocolate brownie with a molten chocolate center.",
    },
  ],
};

const App = () => {
  return (
    <div className="App">
      <MenuApp menuName={data.menuName} menuItems={data.menuItems} />
    </div>
  );
};

export default App;
