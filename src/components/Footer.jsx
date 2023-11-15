import React from "react";

const title = "Về Vdevshop";
const desc =
  "Tận hưởng các chương trình khuyến mãi hấp dẫn, siêu tiết kiệm đến từ Shop bán hàng uy tín nhất.";
const ItemTitle = "Thể loại";
const quickTitle = "Link";
const tweetTitle = "Bài đăng Facebook gần đây";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "Xa Bau Nang, Tay Ninh City, Viet Nam.",
  },
  {
    iconName: "icofont-phone",
    text: "+113",
  },
  {
    iconName: "icofont-envelope",
    text: "vdevshop@shopcart.com",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const ItemList = [
  {
    text: "All Products",
    link: "/shop",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Chính sách    ",
    link: "#",
  },
  {
    text: "FAQs",
    link: "/about",
  },
];

const quickList = [
  {
    text: "Phiên mùa hè",
    link: "#",
  },
  {
    text: "Sự kiện",
    link: "#",
  },
  {
    text: "Phòng trưng bày",
    link: "#",
  },
  {
    text: "Diễn đàn",
    link: "#",
  },
  {
    text: "Chính sách bảo mật",
    link: "#",
  },
  {
    text: "Điều khoản sử dụng",
    link: "#",
  },
];

const tweetList = [
  {
    iconName: "icofont-facebook",
    desc: (
      <p>
        Vdevshop <a href="#">Giảm giá nhận dịp lễ Halloween</a> Flash sale lên đến 50% !!
      </p>
    ),
  },
  {
    iconName: "icofont-facebook",
    desc: (
      <p>
      Vdevshop <a href="#">Giảm giá nhận dịp lễ Noel</a> Flash sale lên đến 20% !!
    </p>
    ),
  },
];


const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4 className="" style={{color: "#ffc107 !important"}}>{title}</h4>
                    </div>
                    <div className="content">
                        <p>{desc}</p>
                        <ul className="lab-ul office-address">
                            {
                                addressList.map((val, i) => (
                                    <li key={i}>
                                        <i className={`${val.iconName} `}> {val.text}</i>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="lab-ul social-icons">
                            {
                                socialList.map((val, i) => (
                                    <li key={i}>
                                        <a href="#" className={` ${val.className}`}>
                                            <i className={`${val.iconName}`}>{val.text}</i>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                    <h4 className="" style={{color: "#ffc107 !important"}}>{quickTitle}</h4>
                    </div>
                    <div className="content">
                        <ul className="lab-ul office-address">
                            {
                                quickList.map((val, i) => (
                                    <li key={i}>
                                        <a href={`${val.link}`}>{val.text}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                    <h4 className="" style={{color: "#ffc107 !important"}}>{ItemTitle}</h4>
                    </div>
                    <div className="content">
                        <ul className="lab-ul office-address">
                            {
                                ItemList.map((val, i) => (
                                    <li key={i}>
                                        <a href={`${val.link}`}>{val.text}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                        <ul className="lab-ul office-address">
                            {
                                tweetList.map((val, i) => (

                                    <li key={i}>
                                    <i className={`${val.iconName}`}></i>
                                    <p>{val.desc}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
