import React from "react";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const title = "Sản phẩm";

const ProductData = [
  {
    imgUrl: "https://static.vinwonders.com/production/banh-trang-phoi-suong-Ha-Noi-6.jpg",
    cate: "Món ăn vặt",
    title: "Bánh tráng phơi sương",
    author: "https://img.ws.mms.shopee.vn/464239421c948394be3f9595b88c524a",
    brand: "Ơ Diêng Store",
    price: "169.000",
    id: 1,
  },
  {
    imgUrl: "https://hanghieusales.com/wp-content/uploads/2023/03/6be90680a7b97ae723a8.jpg",
    cate: "Quần áo",
    title: "Áo thun nam Calvin Kelvin ",
    author: "assets/images/course/author/02.jpg",
    brand: "Calvin Klevin",
    price: "2.689.000VND",
    id: 2,
  },
  {
    imgUrl: "https://www.netcost-security.fr/wp-content/uploads/2023/04/1681813207_iPhone-15-et-iPhone-15-Plus-seront-disponibles-dans-une.jpg",
    cate: "Điện thoại",
    title: "iPhone 15 Pro",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "43.599.000VND",
    id: 3,
  },
  {
    imgUrl: "https://my-live-01.slatic.net/p/a1967d9e87b211dfa42cbdf9709c3bab.jpg",
    cate: "Túi sách",
    title: "Túi GUCCI VANITY",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "2.249.000VND",
    id: 4,
  },
  {
    imgUrl: "https://mitdecor.com/wp-content/uploads/2023/07/custom-giay-cung-mit-decor.jpg",
    cate: "Giày",
    title: "Giày thể thao ngoài trời",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "1.499.000VND",
    id: 5,
  },
  {
    imgUrl: "https://i.pinimg.com/736x/5e/5b/34/5e5b346295c9ec6ab13dba8d1da86276.jpg",
    cate: "Sắc đẹp",
    title: "Mỹ phẩm COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "2.999.000VND",
    id: 6,
  },
  {
    imgUrl: "https://bizweb.dktcdn.net/100/419/649/products/z3426585741785-c38e091e67ea53b892e4202ee409ba2a.jpg?v=1661597828310",
    cate: "Túi",
    title: "Túi xách Canvas",
    author: "assets/images/course/author/01.jpg",
    brand: "Canvas",
    price: "450.000VND",
    id: 7,
  },
  {
    imgUrl: "https://bizweb.dktcdn.net/100/467/298/articles/anhbia-10-thuong-hieu-giay-viet-nam-duoc-ua-chuong-nhat-hien-nay.jpg?v=1665652007547",
    cate: "Giày",
    title: "Giày thể thao thông thường",
    author: "assets/images/course/author/02.jpg",
    brand: "Sneaker",
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
