import React from "react";
import { Link } from "react-router-dom";


const Title = "Bài post phổ biến"

const postList = [
  {
    id: 1,
    imgUrl: 'https://document-export.canva.com/7Kb6M/DAFz687Kb6M/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231112T001632Z&X-Amz-Expires=91813&X-Amz-Signature=f919be4c4d522e029d47e142acbc37da05a02494c95fd6032a525e06862a120d&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2013%20Nov%202023%2001%3A46%3A45%20GMT',
    imgAlt: "rajibraj91",
    title: 'Vdevshop khai trương shop mọi sản phẩm',
    date: "Ngày 11 tháng 11 năm 2023",
  },
  {
    id: 2,
    imgUrl: 'https://document-export.canva.com/U8KsM/DAFz7AU8KsM/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231112T064608Z&X-Amz-Expires=67205&X-Amz-Signature=e5a04925d2e20bba93f589dbe91733af04a1d728169d8c5ec76e1773088ac39c&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2013%20Nov%202023%2001%3A26%3A13%20GMT',
    imgAlt: "rajibraj91",
    title: 'Chào đón Halloween, Fash Sale lên đến 50%.',
    date: "Ngày 4 tháng 11 năm 2023",
  },
  {
    id: 3,
    imgUrl: 'https://images.hindustantimes.com/img/2022/12/23/550x309/merry_christmas_2022_1671778807710_1671778827251_1671778827251.jpg',
    imgAlt: "rajibraj91",
    title: "Mừng lễ Noel, Vdevshop quyết định Fash Sale",
    date: "Ngày 6 tháng 11 năm 2023",
  },
  {
    id: 4,
    imgUrl: 'https://document-export.canva.com/8djuY/DAFz7C8djuY/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231112T193700Z&X-Amz-Expires=21306&X-Amz-Signature=b0a4cd9f90991e6ca75bdc53de30d0dccf7168bd42c74d2b83d085e349490df0&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2013%20Nov%202023%2001%3A32%3A06%20GMT',
    imgAlt: "rajibraj91",
    title: 'Tết Nguyên Đán 2024, Sale các mặt hàng giảm còn 80%',
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
            {
                postList.map((post,index) => (
                    <li key={index} className="d-flex flex-wrap justify-content-between">
                        <div className="post-thumb">
                            <Link to={`/blog/${post.id}`}>
                                <img src={post.imgUrl} alt={post.imgAlt} />
                            </Link>
                        </div>
                        <div className="post-content">
                            <Link to={`/blog/${post.id}`}>
                                <p><strong>{post.title}</strong></p>
                            </Link>
                            <span>{post.date}</span>
                        </div>
                    </li>
                ))
            }
      </ul>
    </div>
  );
};

export default PopularPost;
