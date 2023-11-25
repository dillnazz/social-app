import { Outlet } from "react-router-dom"
import SideBar from "./sidebar/SideBar"
import "./layout.scss"

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <div>
        <SideBar />
      </div>
      <div>
        Header
        <Outlet />
      </div>
    </div>
  )
}

export default Layout