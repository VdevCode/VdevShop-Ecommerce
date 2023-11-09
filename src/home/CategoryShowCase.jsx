import React from "react";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const title = "Sản phẩm";

const ProductData = [
  {
    imgUrl: "src/assets/images/categoryTab/01.jpg",
    cate: "Giày",
    title: "Nike Premier X",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "799.000VND",
    id: 1,
  },
  {
    imgUrl: "src/assets/images/categoryTab/02.jpg",
    cate: "Túi",
    title: "Túi Thẩm Mỹ",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "169.000VND",
    id: 2,
  },
  {
    imgUrl: "src/assets/images/categoryTab/03.jpg",
    cate: "Điện thoại",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "11.599.000VND",
    id: 3,
  },
  {
    imgUrl: "src/assets/images/categoryTab/04.jpg",
    cate: "Túi",
    title: "Túi đi bộ đường dài 15 Nh100",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "249.000VND",
    id: 4,
  },
  {
    imgUrl: "src/assets/images/categoryTab/05.jpg",
    cate: "Giày",
    title: "Giày thể thao ngoài trời",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "1.299.000VND",
    id: 5,
  },
  {
    imgUrl: "src/assets/images/categoryTab/06.jpg",
    cate: "Sắc đẹp",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "3.999.000VND",
    id: 6,
  },
  {
    imgUrl: "src/assets/images/categoryTab/07.jpg",
    cate: "Túi",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "450.000VND",
    id: 7,
  },
  {
    imgUrl: "src/assets/images/categoryTab/08.jpg",
    cate: "Giày",
    title: "Giày thể thao thông thường",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "230.000VND",
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = React.useState(ProductData);

  const filterItems = (cateItems) => {
    const updateItems = ProductData.filter((items) => items.cate === cateItems);
    setItems(updateItems)
  };

  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src="/src/assets/images/shape-img/icon/01.png" />
      </div>
      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.png" />
      </div>

      {/* main section  */}
      <div className="container">
        {/* section header  */}
        <div className="section-header">
          <h2 className="fs-2">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(ProductData)}>Tất cả</li>
              <li onClick={() => filterItems("Giày")}>Giày</li>
              <li onClick={() => filterItems("Túi")}>Túi</li>
              <li onClick={() => filterItems("Điện thoại")}>Điện thoại</li>
              <li onClick={() => filterItems("Sắc đẹp")}>Sắc đẹp</li>
            </ul>
          </div>
        </div>
        {/* section body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center mx-auto row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
            {items.map((item) => (
              <div className="col" key={item.id}>
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={`${item.imgUrl}`} />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{item.cate}</a>
                        </div>
                        <div className="course-review">
                          <Rating />
                        </div>
                      </div>
                    </div>
                    <div className="course-content">
                      <Link to={`/shop/${item.id}`}>{item.title}</Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link className="ca-name">{item.brand}</Link>
                        </div>
                        <div className="course-price">
                          <Link to={`/shop/${item.id}`}>{item.price}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
