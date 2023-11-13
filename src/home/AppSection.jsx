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
                <Link to="/sign-up" className="lab-btn mb-4">{btnText}</Link>
                <h2>{Title}</h2>
                <p>{des}</p>
            </div>
            <di className="section-wrapper">
                <ul className='lab-ul'>
                    <li>
                        <a href='#'>
                            <img src='/src/assets/images/app/01.jpg' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src='/src/assets/images/app/02.jpg' />
                        </a>
                    </li>
                </ul>
            </di>
        </div>
    </div>
  )
}

export default AppSection
