import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import MenuService from "../../services/menu.service";
import TokenService from "../../services/token.service";
import "../../style/menu.css";

const Order = () => {
  const { user, setUser }: any = useContext(UserContext);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus();
  }, []);
  const formatImageUrl = (imageUrl: any) => {
    const absoluteUrl = "http://localhost:3000";
    const formattedUrl = imageUrl.replace("dist", "");
    return `${absoluteUrl}${formattedUrl}`;
  };

  useEffect(() => {
    console.log("menus: ", menus);
  }, [setMenus]);

  const getMenus = async () => {
    try {
      const res = await MenuService.getMenus();
      const formattedMenus = res.map((menu: any) => ({
        ...menu,
        imageUrl: formatImageUrl(menu.imageUrl),
      }));
      setMenus(formattedMenus);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="menus">
      <h1>Menus</h1>
      {menus &&
        menus.map((menu: any) => {
          return (
            <div className="menu" key={menu.id}>
              <h2>{menu.name}</h2>
              <img className="imgMenu" src={menu.imageUrl} alt="" />
              {/* <p>{menu.description}</p> */}
              <p>{menu.price} €</p>
            </div>
          );
        })}
    </div>
  );
};

export default Order;
