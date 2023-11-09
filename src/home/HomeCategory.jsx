import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Chọn bất kỳ sản phẩm bạn thích";
const title = "Mua mọi thứ với chúng tôi";
const btnText = "Bắt đầu ngay bây giờ";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Máy Ảnh DSLR",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Giày",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Nhiếp ảnh",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Trang phục trang trọng",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Túi đầy màu sắc",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Trang trí nội thất",
  },
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="section-header text-center">
        <span className="subtitle">{subTitle}</span>
        <p>{title}</p>
      </div>
      <div className="section-wrapper">
        <div className="row mx-auto g-4 justify-content-center row-cols-1 row-cols-md-3 row-cols-sm-2">
          {categoryList.map((category, i) => (
            <div className="category-item" key={i}>
              <Link to={"/shop"} className="category-item">
                <div className="category-inner">
                {/* img thumnail */}
                  <div>
                    <img src={category.imgUrl} alt={category.imgAlt} />
                  </div>
                {/* content */}
                  <div className="category-content">
                    <div className="cate-icon">
                        <i className={`${category.iconName}`}></i>
                    </div>
                    <Link className="text-white" to={`/shop`} >{category.title}</Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
            <Link to={`/shop`} className="lab-btn">{btnText}</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
