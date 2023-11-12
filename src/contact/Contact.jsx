import React from "react";
import PageHeader from "../components/PageHeader";
import AddressMap from "../components/AddressMap";

const subTitle = "Hãy liên hệ với chúng tôi";
const title = "Vdevshop luôn mong muốn được nghe góp ý từ bạn!";
const conSubTitle = "Liên hệ với chúng tôi tại đây";
const conTitle =
  "Điền vào biểu mẫu bên dưới để Shop có thể hiểu rõ hơn về bạn và nhu cầu của bạn.";
const btnText = "Xác nhận";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Địa chỉ văn phòng   ",
    desc: "Tổ 20, Ấp Ninh Phú, Xã Bàu Năng, Huyện DMC, Tỉnh Tây Ninh",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Số điện thoại",
    desc: "+84 353 421 697",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Gửi email",
    desc: "admin@vdevshop.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Website của chúng tôi",
    desc: "www.vdevshop.com",
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeader title="Liên hệ" curPage="Liên hệ" />
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span> 
            <p>{title}</p>
            <span className="line"></span>
          </div>
          <div className="section-wrapper">
            <div className="row flex-row-reverse justify-content-center">
                <div className="col-xl-4 col-lg-5 col-12">
                    <div className="contact-wrapper">
                        {
                            contactList.map((item, i) => (
                                <div className="contact-item" key={i}>
                                    <div className="contact-thumb">
                                        <img src={item.imgUrl} alt={item.imgAlt} />
                                    </div>
                                    <div className="contact-content">
                                        <h6>{item.title}</h6>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* map */}
                <div className="col-xl-8 col-lg-7 col-12">
                    <AddressMap />
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section padding-tb">
        <div className="container">
            <div className="section-header text-center">
                <span className="subtitle">{conSubTitle}</span> 
                <p>{conTitle}</p>
                <span className="line"></span>
            </div>
            <div className="section-wrapper">
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" id="name" name="name" placeholder="Tên" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="phone" name="phone" placeholder="Số điện thoại" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="subject" name="subject" placeholder="Chú đề" />
                    </div>
                    <div className="form-group w-100">
                        <textarea name="message" id="message" rows={8} placeholder="Nội dung"></textarea>
                    </div>
                    <div className="form-group w-100 text-center">
                        <button className="lab-btn" type="submit">
                            <span>{btnText}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
