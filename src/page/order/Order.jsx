import { useContext, useEffect, useState } from "react";
import AddToCart from "../../components/AddToCart";
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
    <div className="menus">
      <h1>Menus</h1>
      {displayType === "menus" &&
        menus.map((menu) => (
          <div className="menu" key={menu.id} onClick={() => handleClick(menu)}>
            <h2>{menu.name}</h2>
            <img className="imgMenu" src={menu.imageUrl} alt="" />
            <p>{menu.price} €</p>
          </div>
        ))}
      {displayType === "categories" && (
        <div className="categories">
          <h2>Categories</h2>
          {selectedMenuCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
            >
              <h3>{category.name}</h3>
            </div>
          ))}
          <button onClick={handleBack}>Retour</button>
        </div>
      )}
      {displayType === "products" && (
        <div className="products">
          <h2>Products</h2>
          {selectedCategoryProducts.map((product) => (
            <div key={product.id}>
              <h4>{product.name}</h4>
            </div>
          ))}
          <button onClick={handleBack}>Retour</button>
        </div>
      )}
    </div>
  );
};

export default Order;
