import Button from "../UI/button/Button"
import Input from "../UI/input/Input"
import UserProfile from "../userProfile/UserProfile"
import "./appHeader.scss";
import SignIn from "../../components/signIn/SignIn";

const AppHeader = () => {
  return (
    <div className="header">
      <Input />
      <UserProfile/>
        <SignIn/>
    </div>
  )
}

export default AppHeader