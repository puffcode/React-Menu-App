import "../../App.css";
import Menu from "../Menu";

const MenuApp = (props) => {
  return (
    <div className="App">
      <Menu menuName={props.menuName} menuItems={props.menuItems}></Menu>
    </div>
  );
};

export default MenuApp;
