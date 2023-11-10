import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const subTitle = "Chất lượng hàng đầu";
const title = "Trở thành một pro";
const desc =
  "Tham gia các khóa học trên bất kỳ thiết bị nào của bạn với ứng dụng của chúng tôi và tìm hiểu tất cả về kinh doanh những gì bạn muốn. Chỉ cần tải xuống, cài đặt và bắt đầu tìm hiểu";
const btnText = "Áp dụng ngay bây giờ";

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
                <img src="/src/assets/images/instructor/01.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
