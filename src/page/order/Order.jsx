import { useContext, useEffect, useState } from "react";
import AddToCart from "../../components/cart/AddToCart";
import BottomCart from "../../components/cart/BottomCart";
import { UserContext } from "../../context/UserContext";
import MenuService from "../../services/menu.service";
import TokenService from "../../services/token.service";
import "../../style/menu.css";

const Order = () => {
  const { user, setUser } = useContext(UserContext);
  const [menus, setMenus] = useState([]);
  const [selectedMenuCategories, setSelectedMenuCategories] = useState([]);
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
  const [displayType, setDisplayType] = useState("menus");

  useEffect(() => {
    getMenus();
  }, []);

  const formatImageUrl = (imageUrl) => {
    const absoluteUrl = "http://localhost:3000";
    const formattedUrl = imageUrl.replace("dist", "");
    return `${absoluteUrl}${formattedUrl}`;
  };

  const getMenus = async () => {
    try {
      const res = await MenuService.getMenus();
      const formattedMenus = res.map((menu) => ({
        ...menu,
        imageUrl: formatImageUrl(menu.imageUrl),
      }));
      setMenus(formattedMenus);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (menu) => {
    setSelectedMenuCategories(menu.categories);
    setSelectedCategoryProducts([]);
    setDisplayType("categories");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategoryProducts(category.products);
    setDisplayType("products");
  };

  const handleBack = () => {
    if (displayType === "categories") {
      setSelectedMenuCategories([]);
      setDisplayType("menus");
    } else if (displayType === "products") {
      setSelectedCategoryProducts([]);
      setDisplayType("categories");
    }
  };

  return (
    <div className="order">
      {displayType === "menus" && (
        <div className="mainChoice">
          <h2>Choississez votre Menu</h2>
          <div className="choice">
            {menus.map((menu) => (
              <div
                className="menu"
                key={menu.id}
                onClick={() => handleClick(menu)}
              >
                <h2>{menu.name}</h2>
                <img className="imgMenu" src={menu.imageUrl} alt="" />
                <p>{menu.price} €</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {displayType === "categories" && (
        <div className="mainChoice">
          <h2>Choississez votre Viande</h2>
          <div className="choice">
            {selectedMenuCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="menu"
              >
                <h3>{category.name}</h3>
                <img
                  className="imgMenu"
                  src={formatImageUrl(category.imageUrl)}
                  alt=""
                />
                <p>{category.price} €</p>
              </div>
            ))}
            <button onClick={handleBack}>Retour</button>
          </div>
        </div>
      )}
      {displayType === "products" && (
        <div className="mainChoice">
          <h2>Products</h2>
          <div className="choice">
            {selectedCategoryProducts.map((product) => (
              <div key={product.id} className="menu">
                <h4>{product.name}</h4>
                <img
                  className="imgMenu"
                  src={formatImageUrl(product.imageUrl)}
                  alt=""
                />
                <p>{product.price} €</p>
                <AddToCart product={product} />
              </div>
            ))}
            <button onClick={handleBack}>Retour</button>
          </div>
        </div>
      )}
      <BottomCart />
    </div>
  );
};

export default Order;
