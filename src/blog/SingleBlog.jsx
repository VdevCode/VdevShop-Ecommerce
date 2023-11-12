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
                              <img src="/src/assets/images/blog/single/01.jpg" />
                              <div className="video-thumb">
                                <img src="/src/assets/images/blog/single/02.jpg" />
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
