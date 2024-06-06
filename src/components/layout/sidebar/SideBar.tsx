import { Link } from "react-router-dom"
import LogoIcon from "../../../assets/svg/ptichka.svg?react"
import { sidebarMenu } from "../../../utils/constants"
import { IMenuType } from "./interface"
import "./sidebar.scss";
// import Autorization from "../../../pages/autorization/Autorization";

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="app-logo">
        <Link to="/home">
          <div>
          <LogoIcon />
            <h1 style={{ color:"#503EA9"}}>KGApp</h1>
          </div>
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