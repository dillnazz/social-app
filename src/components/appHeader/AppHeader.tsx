import Button from "../UI/button/Button"
import Input from "../UI/input/Input"
import UserProfile from "../userProfile/UserProfile"
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <div className="header">
      <Input />
      <UserProfile />
      <Button>Войти</Button>
    </div>
  )
}

export default AppHeader