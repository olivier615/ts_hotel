import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="d-flex justify-content-between flex-column flex-md-row">
            <div className="mb-5">
              <img className="mb-5" src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="" />
              <div className="d-flex gap-3">
                <div className="iconBorder">
                  <BsInstagram size={24} style={{ color: '#fff' }} />
                </div>
                <div className="iconBorder">
                  <FaFacebook size={24} style={{ color: '#fff' }} />
                </div>
              </div> 
            </div>
            <div className="d-flex flex-column justify-content-between">
                <div className="d-flex mb_40 flex-column flex-md-row">
                  <div className="me_80 mt-2 mt-mb-0">
                    <p className="mb-1">TEL</p>
                    <p>+886-7-1234567</p>
                  </div>
                  <div className="mt-2 mt-mb-0">
                    <p className="mb-1">MAIL</p>
                    <p className="">elh@hexschool.com</p>
                  </div>
                </div>
                <div className="d-flex mt-0 mt-md-4 flex-column flex-md-row">
                  <div className="me_80 mt-2 mt-mb-0">
                    <p className="mb-1">FAX</p>
                    <p className="">+886-7-1234567</p>
                  </div>
                  <div className="mt-2 mt-mb-0">
                    <p className="mb-1">WEB</p>
                    <p className="">www.elhhexschool.com.tw</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="d-flex justify-content-between flex-column flex-md-row" style={{marginTop: '80px'}}>
            <p className="mb-2 mb-md-0">806023 台灣高雄市新興區六角路123號</p>
            <p>© 享樂酒店 2023 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer