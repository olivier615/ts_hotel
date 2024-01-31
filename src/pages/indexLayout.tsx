import { Outlet, Link } from 'react-router-dom'
import {
  NavBar
} from '../components'
const IndexLayout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default IndexLayout