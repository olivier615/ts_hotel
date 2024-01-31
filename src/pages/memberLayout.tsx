import { Outlet, Link } from 'react-router-dom'
import { createContext, useContext, useState } from 'react'
const MyContext = createContext();

const MemberLayout = () => {
  const contextValue = {
    password: '',
    email: ''
  };
  const screenWidth = window.innerWidth;
  const hide = { display: 'none' }
  return (
    <>
      <div className="d-flex position-relative">
        <div style={screenWidth >= 768 ? hide : {}} className="py-md-4 py-3 bg-dark logo_box position-absolute top-0 start-0">
          <Link to="/">
            <img className="logo_size" src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="" />
          </Link>
        </div>
        <div className={screenWidth >= 768 ? 'register_left' : 'register_hide'}>
          <div className="py-4 bg-dark logo_box">
            <Link to="/">
              <img className="logo_size" src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="" />
            </Link>
          </div>
        </div>
        <div className="register_right">
          <MyContext.Provider value={contextValue}>
            <Outlet />
          </MyContext.Provider>
        </div>
      </div>
    </>
  )
}

export { MemberLayout, MyContext };