import React from "react";
import { Link } from "react-router-dom";


const PageHeader = ({title, curPage}) => {
  return (
    <div className="pageheader-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pageheader-content text-center">
              <h2>{title}</h2>
              <nav className="breadcrumb justify-content-center">
                <ol className="breadcrumb justify-content-center text-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link to="/shop" aria-current="page">
                      {curPage}
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
