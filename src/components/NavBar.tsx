import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="nav-fixed">
      <div className="px-2 px-md-5 pt-4">
        <div className="d-flex align-items-center justify-content-between">
          <h1>
            <NavLink to="/">
              <img className="logo_size" src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="" />
            </NavLink>
          </h1>
          <ul className="d-md-flex gap-5 d-none">
            <li className="d-flex align-items-center">
              <NavLink to="/room">
                客房旅宿
              </NavLink>
            </li>
            <li className="d-flex align-items-center">
              <NavLink to="/member">
                會員登入
              </NavLink>
            </li>
            <li>
              <button type="button" className="btn btn-primary text-light">
                立即訂房
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar