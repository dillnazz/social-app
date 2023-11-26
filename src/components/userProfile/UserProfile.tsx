
import './userProfile.scss';
import ProfilePhoto from "../../assets/images/Photo.svg";

const UserProfile = () => {
  return (
    <div className='userProfile'>
      <div className="profile">
      <img src={ProfilePhoto} alt="" />
      </div>
      <div className="profilCircle">
        <div className="circle">

        </div>
      </div>
      <div className='profileName'>
        <h4>Екатерина Варнава</h4>
      </div>
      <div className="empty">
        
      </div>
    </div>
  )
}

export default UserProfile