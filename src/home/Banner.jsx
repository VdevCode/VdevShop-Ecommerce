import React from "react";
import productData from "../product/products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";

const Title = (
  <h2 className="fs-2">
    Tìm kiếm sản phẩm của bạn từ <span>hàng ngàn</span> sản phẩm
  </h2>
);
const Desc = "Chúng tôi có những bộ sưu tập lớn";

const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1,5 triệu khách hàng" },
  { iconName: "icofont-notification", text: "Hơn 2000 Marchent" },
  { iconName: "icofont-globe", text: "Mua bất cứ thứ gì trực tuyến" },
];

const Banner = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const [filteredProduct, setFilteredProduct] = React.useState(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProduct(filtered);
    console.log(setFilteredProduct(filtered));
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
            <button type="submit" className="ml-4">
              <i className="icofont-search"></i>
            </button>
          </form>

          <p className="text-center mt-4 ">{Desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProduct.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
