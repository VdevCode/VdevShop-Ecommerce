import React, { useState } from "react";
import Rating from "../components/Rating.jsx";

const reviewTitle = "Khách hàng nhiệm vụ";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "nhi225588",
    date: "2023-03-05 01:06",
    desc: "Chất lượng là điều mà shop quan tâm hàng đầu. mình dùng thấy ok vl",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "vdevcode",
    date: "2023-03-05 01:06",
    desc: "Bao đổi trả hàng nếu bị lỗi nhé mọi người. xài yên tâm",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Ẩn danh",
    date: "2023-03-05 01:06",
    desc: "Sản phẩm đi đôi với chất lượng. oke ",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "hêh",
    date: "2023-03-05 01:06",
    desc: "Shop này luôn cố gắng để đem đến cho tui sự hài lòng. thanks shop nhá",
  },
];
const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  const handleShow = (e) => {
    // setReviewShow(!reviewShow)
    if (e.target.value === 1) {
      setReviewShow(false);
    }
    if (e.target.value === 2) {
      setReviewShow(true);
    }
  };

  return (
    <div>
      <ul
        className={` review-nav lab-ul  ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" value={1} onClick={handleShow}>
          Mô tả
        </li>
        <li className="rev" value={2} onClick={handleShow}>
          Đánh giá (4)
        </li>
      </ul>

      <div
        className={`review-content ? ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((item, index) => (
              <li key={index} className="">
                <div className="post-thumb">
                  <img src={item.imgUrl} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#" className="">
                        {item.name}
                      </a>
                      <p className="">{item.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewTitle}</h5>
              </div>

              <form className="row">
                <div className="col-md-4 col-12">
                  <input type="text" name="name" placeholder="Tên" />
                </div>
                <div className="col-md-4 col-12">
                  <input type="email" name="email" placeholder="Họ tên" />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating align-items-center d-flex">
                    <span className="me-2">Đánh giá</span>
                    <Rating />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    placeholder="Nội dung"
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="default-button" type="submit">
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            Mô tả sản phẩm của Shop là những thông tin giới thiệu đặc tính chất
            lượng, chức năng, lợi ích… của một sản phẩm được đăng tải trên shop
            cart nhằm mang đến cho Người Mua các thông tin đầy đủ về sản phẩm để
            họ có cơ sở lựa chọn khi Mua hàng của bạn.
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/logo/01.png" />
            </div>
            <div className="post-content">
                <ul className="lab-ul">
                    <li>Shop cảm ơn bạn đã ghé thăm</li>
                    <li>Chúc bạn có một ngày vui vẻ</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
