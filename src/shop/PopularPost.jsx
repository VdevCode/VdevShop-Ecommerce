import React from "react";
import { Link } from "react-router-dom";

const Title = "Bài post phổ biến";

const postList = [
  {
    id: 1,
    imgUrl:
      "https://document-export.canva.com/7Kb6M/DAFz687Kb6M/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231120T001632Z&X-Amz-Expires=91813&X-Amz-Signature=c614a0a8f2b91a17926ccfc63debe4d3908186ffd97f25f87d697b6fb66e3031&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2021%20Nov%202023%2001%3A46%3A45%20GMT",
    imgAlt: "Loi image cmnr",
    title: "Vdevshop khai trương shop mọi sản phẩm",
    date: "Ngày 11 tháng 11 năm 2023",
  },
  {
    id: 2,
    imgUrl:
      "https://document-export.canva.com/U8KsM/DAFz7AU8KsM/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231120T064608Z&X-Amz-Expires=67205&X-Amz-Signature=6455f162cf97ce20321ead54880d909a95fdd5d6de2b1cab2baa1af8c790d7e1&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2021%20Nov%202023%2001%3A26%3A13%20GMT",
    imgAlt: "Loi image cmnr",
    title: "Chào đón Halloween, Fash Sale lên đến 50%.",
    date: "Ngày 4 tháng 11 năm 2023",
  },
  {
    id: 3,
    imgUrl:
      "https://images.hindustantimes.com/img/2022/12/23/550x309/merry_christmas_2022_1671778807710_1671778827251_1671778827251.jpg",
    imgAlt: "Loi image cmnr",
    title: "Mừng lễ Noel, Vdevshop quyết định Fash Sale",
    date: "Ngày 6 tháng 11 năm 2023",
  },
  {
    id: 4,
    imgUrl:
      "https://document-export.canva.com/8djuY/DAFz7C8djuY/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231120T193700Z&X-Amz-Expires=21306&X-Amz-Signature=d724d71a49077a4c0a7b97487bd7b036fe31eeb8d685412ac4ddfaafff97c222&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2021%20Nov%202023%2001%3A32%3A06%20GMT",
    imgAlt: "Loi image cmnr",
    title: "Tết Nguyên Đán 2024, Sale các mặt hàng giảm còn 80%",
    date: "Ngày 3 tháng 11 năm 2023",
  },
];

const PopularPost = () => {
  return (
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">{Title}</h5>
      </div>

      <ul className="widget-wrapper">
        {postList.map((post, index) => (
          <li key={index} className="d-flex flex-wrap justify-content-between">
            <div className="post-thumb">
              <Link to={`/blog/${post.id}`}>
                <img src={post.imgUrl} alt={post.imgAlt} />
              </Link>
            </div>
            <div className="post-content">
              <Link to={`/blog/${post.id}`}>
                <p>
                  <strong>{post.title}</strong>
                </p>
              </Link>
              <span>{post.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
