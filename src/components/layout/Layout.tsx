import { Outlet } from "react-router-dom"
import SideBar from "./sidebar/SideBar"
import "./layout.scss"
import AppHeader from "../appHeader/AppHeader"

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <div>
        <SideBar />
      </div>
      <div>
        <AppHeader/>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout