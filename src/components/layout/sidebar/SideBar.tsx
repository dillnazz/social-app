import { Link } from "react-router-dom"
import LogoIcon from "../../../assets/svg/Logo.svg?react"
import { sidebarMenu } from "../../../utils/constants"
import { IMenuType } from "./interface"
import "./sidebar.scss"

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="app-logo">
        <Link to="/home">
          <LogoIcon />
        </Link>
      </div>
      <div className="menu">
        {sidebarMenu.map((menu: IMenuType) => {
          return (
            <div key={menu.title} className="menu__wrap">
              <Link className="menu__item" to={menu.path}>
                <menu.icon />
                {menu.title}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar