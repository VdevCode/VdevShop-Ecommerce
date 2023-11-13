import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const subTitle = "Khoá học marketing bán hàng";
const title = "Trở thành một người bán hàng thành công";
const desc =
  "Xem thêm các khoá học marketing bán hàng";
const btnText = "Đăng ký ngay";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Đã đăng ký",
  },
  {
    iconName: "icofont-graduate-alt",
    count: "30",
    text: "Khóa học được chứng nhận",
  },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Phần thưởng và Thẻ Git",
  },
];

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center justify-content-center row-cols-1 row-cols-lg-3 g-4 row-cols-md-2">
            <div className="col">
              {countList.map((count, i) => (
                <div className="count-item" key={i}>
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={count.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h2>
                        <span className="count">
                          <CountUp end={count.count} />
                        </span>
                        <span>+</span>
                        <p>{count.text}</p>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col">
                <div className="instructor-content">
                    <p>{subTitle}</p>
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                    <Link to="" className="lab-btn">{btnText}</Link>
                </div>
            </div>
            <div className="col">
              <div className="instructor-thumb">
                <img src="https://document-export.canva.com/bPG5M/DAFz7QbPG5M/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231112T194039Z&X-Amz-Expires=24763&X-Amz-Signature=c2f8478f976a5eef4f79a71fe1c87468a50308a672c56315cf74e8a77b55d34a&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2013%20Nov%202023%2002%3A33%3A22%20GMT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
