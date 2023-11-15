import React from "react";
import { Link } from "react-router-dom";
import "../responsive/responsive.css";

const subTitle = "Chọn bất kỳ sản phẩm bạn thích";
const title = "Mua mọi thứ tại cửa hàng Vdevshop";
const btnText = "Bắt đầu ngay bây giờ";

const categoryList = [
  {
    imgUrl:
      "https://lzd-img-global.slatic.net/g/p/22a68b3b73b428418899f7d02ba65a8c.jpg_720x720q80.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-fast-food",
    title: "Món ăn vặt",
  },
  {
    imgUrl:
      "https://laforce.vn/wp-content/uploads/2023/05/app-giup-phoi-do-cho-nam.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-baby-cloth",
    title: "Quần áo",
  },
  {
    imgUrl:
      "https://phongvu.vn/cong-nghe/wp-content/uploads/2022/09/pc-choi-game-intel-core-i3.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Máy tính",
  },
  {
    imgUrl:
      "https://vatvostudio.vn/wp-content/uploads/2023/07/15-pro-max-14-pro-max.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Điện thoại",
  },
  {
    imgUrl:
      "https://media.mia.vn/uploads/tin-tuc/tui-xach-sieu-cap-2-1675189652.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-school-bag",
    title: "Túi sách",
  },
  {
    imgUrl:
      "https://file.hstatic.net/200000355547/article/avt_ff9e142d308f4174bd1f034939324e26.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Giày dép",
  },
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 ">
      <div className="section-header text-center">
        <span className="subtitle text-black">
          {/* <strong>{subTitle}</strong> */}
        </span>
        <p>{title}</p>
      </div>
      <div className="section-wrapper">
        <div className="row mx-auto g-4 check-res justify-content-center row-cols-1 row-cols-md-3 row-cols-sm-2">
          {categoryList.map((category, i) => (
            <div className="category-item" key={i}>
              <Link to={"/shop"} className="category-item">
                <div className="category-inner">
                  {/* img thumnail */}
                  <div>
                    <img className="check-img" src={category.imgUrl} alt={category.imgAlt} />
                  </div>
                  {/* content */}
                  <div className="category-content">
                    <div className="cate-icon">
                      <i className={`${category.iconName}`}></i>
                    </div>
                    <Link className="text-white" to={`/shop`}>
                      {category.title}
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to={`/shop`} className="" style={{padding:"8px 8px", backgroundColor:"#ffdf40", color:"black"}}>
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
