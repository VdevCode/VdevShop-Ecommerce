import React from "react";
import productData from "/src/product/products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";
import Sponsor from "./Sponsor";

const Title = <h2 className="fs-2">VDEVSHOP</h2>;
const Desc =
  "Vdevshop hứa hẹn mang đến cho bạn trải nghiệm mua hàng tuyệt vời.";

const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1,5 triệu khách hàng" },
  { iconName: "icofont-notification", text: "Hơn 2000 Marchent" },
  { iconName: "icofont-globe", text: "Mua bất cứ thứ gì trực tuyến" },
];

const Banner = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const [filteredProduct, setFilteredProduct] = React.useState(
    productData.product
  );
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
  
    if (!searchTerm) {
      setFilteredProduct(productData.product);
    } else {
      const filtered = productData.product.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProduct(filtered);
    }
  };
  

  const handleSearchBtn = (e) => {
    e.preventDefault();
    setSearchInput(searchInput);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {Title}
          <form className="">
            <SelectedCategory select={"electronics"} />
            <input
              type="text"
              name="search"
              id="search"
              value={searchInput}
              placeholder="Tìm kiếm sản phẩm của bạn"
              onChange={handleSearch}
            />
            <button type="submit" className="ml-4" onClick={handleSearchBtn}>
              <i className="icofont-search" style={{ marginLeft: "100%" }}></i>
            </button>
          </form>

          <p className="text-center mt-4 " style={{ fontSize: "14px" }}>
            {Desc}
          </p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProduct.map((product, i) => (
                <li key={i} className="" style={{ backgroundColor: "#ffc107" }}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Sponsor />
    </div>
  );
};

export default Banner;
