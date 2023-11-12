import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../modal/modal.css";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [show, setShow] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("mbbank");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("Thanh toán thành công");
    localStorage.removeItem("cart");
    navigate(from, { replace: true });
  };

  return (
    <div className="modalCard">
      <Button variant="primary" onClick={handleShow}>
      Thanh toán qua thẻ
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3 mt-3 text-center">
            Chọn phương thức thanh toán
          </h5>
          <div className="modal-content">
            <div className="modal-body" style={{overflowY: "scroll"}}>
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      href="#mbbank"
                      className={`nav-link ${
                        activeTab === "mbbank" ? "active" : ""
                      }`}
                      id="mbbank-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="mbbank"
                      aria-selected={activeTab === "mbbank"}
                      onClick={() => handleTabChange("mbbank")}
                    >
                      <img width={80} src="https://i.imgur.com/gpViSkn.jpeg" />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#acb"
                      className={`nav-link ${
                        activeTab === "acb" ? "active" : ""
                      }`}
                      id="acb-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="acb"
                      aria-selected={activeTab === "acb"}
                      onClick={() => handleTabChange("acb")}
                    >
                      <img width={80} src="https://i.imgur.com/ivKMPHL.png" />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#paypal"
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                    >
                      <img
                        width={80}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJdjso_lcyN_0SmKZH4T0LwvUKVms39KghA&usqp=CAU"
                      />
                    </a>
                  </li>
                </ul>

                {/* content */}
                <div className="tab-content" id="myTabContent">
                  {/* mbbank */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "mbbank" ? "show active" : ""
                    }`}
                    id="mbbank"
                    role="tabpanel"
                    aria-labelledby="mbbank-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <p>Ngân hàng MBBank</p>
                      </div>

                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            required="required"
                          />
                          <span>Tên chủ thẻ</span>
                        </div>
                        <div className="inputbox mt-2">
                          <input
                            className="form-control"
                            type="number"
                            name="number"
                            id="number"
                            min={1}
                            max={999}
                            required="required"
                          />
                          <span>Mã số thẻ</span>
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row mt-3 justify-content-between">
                          <div className="inputbox mt-2 me-3 ">
                            <i className="fa fa-eye"></i>
                            <input
                              className="form-control"
                              type="number"
                              name="number"
                              id="number"
                              min={1}
                              max={999}
                              required="required"
                            />
                            <span>Ngày hết hạn</span>
                          </div>
                          <div className="inputbox mt-2">
                            <input
                              className="form-control"
                              type="number"
                              name="number"
                              id="number"
                              min={1}
                              max={999}
                              required="required"
                            />
                            <span>Mã bảo mật thẻ</span>
                            <i className="fa fa-eye"></i>
                          </div>
                        </div>
                        <div className="px-5 pay justify-content-center text-center">
                          <button className="btn btn-success btn-block mt-3 ">
                          Đặt hàng
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* acb bank  */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "acb" ? "show active" : ""
                    }`}
                    id="acb"
                    role="tabpanel"
                    aria-labelledby="acb-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <p>Ngân hàng ACB Bank</p>
                      </div>

                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            required="required"
                          />
                          <span>Tên chủ thẻ</span>
                        </div>
                        <div className="inputbox mt-2">
                          <input
                            className="form-control"
                            type="number"
                            name="number"
                            id="number"
                            min={1}
                            max={999}
                            required="required"
                          />
                          <span>Mã số thẻ</span>
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row mt-3 justify-content-between">
                          <div className="inputbox mt-2 me-3 ">
                            <i className="fa fa-eye"></i>
                            <input
                              className="form-control"
                              type="number"
                              name="number"
                              id="number"
                              min={1}
                              max={999}
                              required="required"
                            />
                            <span>Ngày hết hạn</span>
                          </div>
                          <div className="inputbox mt-2">
                            <input
                              className="form-control"
                              type="number"
                              name="number"
                              id="number"
                              min={1}
                              max={999}
                              required="required"
                            />
                            <span>Mã bảo mật thẻ</span>
                            <i className="fa fa-eye"></i>
                          </div>
                        </div>
                        <div className="px-5 pay justify-content-center text-center">
                          <button className="btn btn-success btn-block mt-3 ">
                          Đặt hàng
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* paypal bank  */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <p>Paypal</p>
                      </div>

                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            required="required"
                          />
                          <span>Email của bạn</span>
                        </div>
                        <div className="inputbox mt-2">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                          
                            required="required"
                          />
                          <span>Họ tên</span>
                      
                        </div>
                        <div className="d-flex flex-row mt-3 justify-content-between">
                          <div className="inputbox mt-2 me-3 ">
                            <i className="fa fa-eye"></i>
                            <input
                              className="form-control"
                              type="number"
                              name="number"
                              id="number"
                              min={1}
                              max={999}
                              required="required"
                            />
                            <span>Thông tin bổ sung</span>
                          </div>
                        </div>
                        <div className="px-5 pay justify-content-center text-center">
                          <button className="btn btn-success btn-block mt-3 " onClick={handleOrderConfirm}>
                        Đặt hàng ngay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* payment des */}
                <p className="mt-3 px-4 p-Disclaimer">
                    <em>Thông báo miễn trừ trách nhiệm thanh toán:</em> trong mọi trường hợp, chủ sở hữu sẽ không phải trả một phần tiền cho bất kỳ vật liệu hoặc dịch vụ nào
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
