import "./App.css";
import MenuApp from "./components/MenuApp";

let data = {
  dessertMenu: {
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
  },

  dinnerMenu: {
    menuName: "Dinner",
    menuItems: [
      {
        itemId: 7,
        itemPrice: "17",
        itemName: "Salmon Alfredo",
        itemDescription:
          "Grilled salmon served over fettuccine alfredo with a side of garlic bread.",
      },
      {
        itemId: 8,
        itemPrice: "22",
        itemName: "Ribeye Steak",
        itemDescription:
          "A grilled ribeye steak served with garlic mashed potatoes and steamed vegetables.",
      },
      {
        itemId: 9,
        itemPrice: "20",
        itemName: "Chicken Marsala",
        itemDescription:
          "Pan-seared chicken breast in a marsala wine sauce with mushrooms, served over spaghetti.",
      },
      {
        itemId: 10,
        itemPrice: "22",
        itemName: "Lobster Ravioli",
        itemDescription:
          "Homemade lobster ravioli in a creamy tomato vodka sauce.",
      },
      {
        itemId: 11,
        itemPrice: "20",
        itemName: "Vegetable Stir-Fry",
        itemDescription:
          "A mix of fresh vegetables stir-fried in a savory sauce, served over steamed rice.",
      },
    ],
  },
};

const App = () => {
  return (
    <div className="App">
      <MenuApp
        menuName={data.dinnerMenu.menuName}
        menuItems={data.dinnerMenu.menuItems}
      />
      <MenuApp
        menuName={data.dessertMenu.menuName}
        menuItems={data.dessertMenu.menuItems}
      />
    </div>
  );
};

export default App;
