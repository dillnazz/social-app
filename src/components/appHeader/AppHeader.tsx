import React from 'react';
import { useProfilePhoto } from '../../components/profileContext/ProfilePhotoContext';
import SignIn from "../../components/signIn/SignIn";
import Input from "../UI/input/Input";
import "./appHeader.scss";

const AppHeader: React.FC = () => {
  const { profilePhoto } = useProfilePhoto();

  return (
    <div className="header">
      <Input />
      <img className='profileImg' src={profilePhoto} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
      <SignIn />
    </div>
  );
}

export default AppHeader;
