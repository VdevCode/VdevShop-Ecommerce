import React from "react";
import PageHeader from "../components/PageHeader";
import BlogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PopularPost from "../shop/PopularPost";

const SingleBlog = () => {
  const [blog, setBlog] = React.useState(BlogList);
  const { id } = useParams();

  const result = blog.filter((item) => item.id === Number(id));

  return (
    <div className="">
      <PageHeader
        curPage={`Blog ${result[0].id}`}
        title={`${result[0].title}`}
      />
      <div className="blog-section padding-tb section-bg blog-single">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-8 col-12">
              <article className="section-wrapper">
                <div className="row row-cols-1 g-4 justify-content-center">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        {result.map((item) => (
                          <div key={item.id}>
                            <div className="post-thumb">
                              <img src={item.imgUrl} alt={item.imgUrl} className="w-100" />
                            </div>
                            <div className="post-content">
                              <h3>{item.title}</h3>
                              <div className="meta-post">
                                <ul className="lab-ul">
                                  {item.metaList.map((meta, index) => (
                                    <li key={index}>
                                      <i className={meta.iconName}></i>
                                      {meta.text}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p>{item.desc}</p>
                              <blockquote>
                                <p>Cuộc sống chỉ có 1 lần, hãy mua hàng của Vdevshop ngay khi còn có thể.</p>
                                <cite>{item.metaList[0].text}</cite>
                              </blockquote>
                              <img src="https://document-export.canva.com/rJ2E8/DAFzKIrJ2E8/1/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231118T134342Z&X-Amz-Expires=41337&X-Amz-Signature=2cedf6ae9d90c64fc28ebd92977d29326fcc618ec98c2d5d08136d2dc72a54bb&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2019%20Nov%202023%2001%3A12%3A39%20GMT" />
                              <div className="video-thumb">
                                <img src="https://document-export.canva.com/RLtu0/DAFtjsRLtu0/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231112%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231112T173012Z&X-Amz-Expires=29089&X-Amz-Signature=240d6eca089b4947b8278473c9d78ea8e2e28da834fbfa00051751bc47ac259c&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2013%20Nov%202023%2001%3A35%3A01%20GMT" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-8 col-12">
                <PopularPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
