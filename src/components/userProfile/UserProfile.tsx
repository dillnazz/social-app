
import './userProfile.scss';
import ProfilePhoto from "../../assets/svg/Photo.svg";

const UserProfile = () => {
  return (
    <div className='userProfile'>
      <div className="profile">
        <img src={ProfilePhoto} alt="" />
      </div>
      <div className="profileCircle">
        <div className="circle">
        </div>
      </div>
      <div className='profileName'>
        <h4>Dilnaz Niazovna</h4>
      </div>
      <div className="empty">
      </div>
    </div>
  )
}

export default UserProfile