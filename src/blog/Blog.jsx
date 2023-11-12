import React from "react";
import PageHeader from "../components/PageHeader";
import BlogList from "../utilis/blogdata";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <PageHeader curPage="Blog" title="Trang Blog" />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
              {BlogList.map((item, index) => (
                <div key={index} className="col">
                  <div className="post-item">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <Link to={`/blog/${item.id}`}>
                          <img src={item.imgUrl} alt={item.imgAlt} />
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link to={`/blog/${item.id}`}>
                          <p>
                            <strong>{item.title}</strong>
                          </p>
                        </Link>
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
                      </div>
                      <div className="post-footer">
                        <div className=" pf-left">
                          <Link
                            to={`/blog/${item.id}`}
                            className="lab-btn-text"
                          >
                            <span>{item.btnText}</span>
                            <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                        <div className="pf-right">
                          <Link
                            to={`/blog/${item.id}`}
                            className="lab-btn-text d-flex align-items-center"
                          >
                             <span>{item.commentCount}</span>
                            <i className="icofont-comment me-2"></i>
                         
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
