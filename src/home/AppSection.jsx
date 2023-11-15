import React from 'react'
import { Link } from 'react-router-dom'

const btnText = "Đăng ký ngay"
const Title = "Nhiều sản phẩm đa dạng, Freeship cho bạn luôn."
const des = "Tận hưởng các chương trình khuyến mãi hấp dẫn, siêu tiết kiệm đến từ các Shop bán hàng uy tín nhất."

const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <Link to="#" className="lab-btn mb-4">{btnText}</Link>
                <h2>{Title}</h2>
                <p>{des}</p>
            </div>
            <di className="section-wrapper">
                <ul className='lab-ul'>
                    <li>
                        <a href='#'>
                            <img style={{height:"150px"}} src='https://kissenglishcenter.com/wp-content/uploads/2022/05/tu%CC%9B%CC%80-vu%CC%9B%CC%A3ng-thu%CC%9Bo%CC%9B%CC%80ng-du%CC%80ng-khi-vie%CC%82%CC%81t-doa%CC%A3n-va%CC%86n-tie%CC%82%CC%81ng-anh-ve%CC%82%CC%80-shopping-1024x1024.jpg' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img style={{height:"150px"}} src='https://omisell.com/vi-vn/wp-content/uploads/sites/2/2021/09/tao-gian-hang-shopee-1.jpg' />
                        </a>
                    </li>
                </ul>
            </di>
        </div>
    </div>
  )
}

export default AppSection
