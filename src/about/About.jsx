import React from "react";
import PageHeader from "../components/PageHeader";

const subTitle = "Về thương hiệu của Vdevshop";
const title = "Sản phẩm chất lượng, giao hàng nhiệt tình.";
const desc =
  "Chúng tôi có niềm tin mạnh mẽ rằng trải nghiệm mua sắm trực tuyến phải đơn giản, dễ dàng và mang đến cảm xúc vui thích. Niềm tin này truyền cảm hứng và thúc đẩy chúng tôi mỗi ngày tại Vdevshop.";

const year = "< 1 ngày";
const expareance = "Vừa khai trương";

const aboutList = [
  {
    imgUrl: "https://amis.misa.vn/wp-content/uploads/2021/07/giai-doan-tu-van.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Bộ phận tư vấn khách hàng",
    desc: "Chuyên môn và kĩ năng cao, vào khẳng vấn đề chính để phục vụ khách.",
  },
  {
    imgUrl: "https://lh4.googleusercontent.com/YUHmD0GAqy7pMIkLYYCo4sG0yimbvUEwh8El6hFPd87KFTj3hNjiJqk9_rgIT0LmB_hIkGYQ1egXyIhCKzkLHUH3aiwWt_jfEmmv6DwUUa10pS2wzA50Dsxvc84LpAjUObUeZrCD",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Danh hiệu của shop",
    desc: "Mới khai trương nên chưa có, có lẽ sắp tới làm thêm về tiktok với youtube",
  },
  {
    imgUrl: "https://cdn.vietnambiz.vn/2019/9/4/4613564984-15675998684692104562758.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Chất lượng sản phẩm",
    desc: "Bao chất lượng, do Vdevshop luôn chọn lọc kĩ trước khi nhập nên hàng Tàu không lọt vào được.",
  },
];
const About = () => {
  return (
    <div className="">
      <PageHeader title="Thông tin về cửa hàng" curPage="Về chúng tôi" />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="https://document-export.canva.com/C5JaI/DAFz7IC5JaI/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231112T204622Z&X-Amz-Expires=43497&X-Amz-Signature=93e3a894ee14db242aea5507813332553974c5ad922915fe20127cfd4c87a003&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2013%20Nov%202023%2008%3A51%3A19%20GMT" alt="about" />
                </div>
                <div className="abs-thumb">
                  <img src="/src/assets/images/about/01.png" alt="about" />
                </div>
                <div className="about-left-content">
                  <h3>{expareance}</h3>
                  <p>{year}</p>
                </div>
              </div>
            </div>
            <div className="col">
               <div className="about-right">
                <div className="section-header">
                    <span className="subtitle text-center">{subTitle}</span>
                    <p className="title "><strong>{title}</strong></p>
                    <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                    <ul className="lab-ul">
                        {
                            aboutList.map((item,index) => (
                                <li className="" key={index}>
                                    <div className="sr-left">
                                        <img src={item.imgUrl} alt={item.imgAlt} />
                                    </div>
                                    <div className="sr-right">
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
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
  );
};

export default About;
