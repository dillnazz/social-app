import SignIn from "../../components/signIn/SignIn";
import Input from "../UI/input/Input";
import UserProfile from "../userProfile/UserProfile";
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <div className="header">
      <Input />
      <UserProfile />
      <SignIn />
    </div>
  )
}

export default AppHeader