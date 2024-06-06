import { Outlet } from "react-router-dom"
import SideBar from "./sidebar/SideBar"
import "./layout.scss"
import AppHeader from "../appHeader/AppHeader"
import { ProfilePhotoProvider } from '../../components/profileContext/ProfilePhotoContext';


const Layout: React.FC = () => {
  return (
    <div className="layout">
      <ProfilePhotoProvider>
      <div>
        <SideBar />
      </div>
      <div className="grow">
        <AppHeader/>
        <Outlet />
      </div>
      </ProfilePhotoProvider>
    </div>
  )
}

export default Layout