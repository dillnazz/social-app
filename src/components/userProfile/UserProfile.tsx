import React from 'react';
import './userProfile.scss';

interface UserProfileProps {
  profilePhoto: string;
  profileName: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ profilePhoto, profileName }) => {
  return (
    <div className='userProfile'>
      <div className="profile">
        <img style={{ width: "40px", height: "40px" }} src={profilePhoto} alt="" />
      </div>
      <div className="empty">
      </div>
    </div>
  );
}

export default UserProfile;