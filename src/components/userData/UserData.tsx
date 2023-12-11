import './userData.scss';
import { Spin } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Title from '../title/Title';
import { Link } from 'react-router-dom';
import TwitterIcon from "../../assets/images/Vector.svg";
import Instagram from "../../assets/images/Vector (1).svg";
import Wk from "../../assets/images/Vector (2).svg";

interface User {
  createdAt: string,
  userName: string,
  userAvatar: string,
  userInfo: string,
  userCost: number,
  id: string
}

const UserData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>('https://656991a2de53105b0dd74202.mockapi.io/users/list');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (users.length === 0) {
    return <Spin size="large" />
  }

  return (
    <>
      <div> <Title>Рекомендуем </Title></div>
      <div className='usersCard'>
        {users.map(user => (
            <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className='userCard'>
      <div style={{
        backgroundImage:`url(${user.userAvatar})`,
        height:263,
        backgroundPosition:'center center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'

      }}>
<div className='cost'>10$</div>
      </div>
      <h1>{user.userName}</h1>
      <p>{user.userInfo.length > 45 ? user.userInfo.slice(0, 45) + "..." : user.userInfo } </p>
      <div className="contact">
        <div className="socials">
      <div className="socialLink">
        <div className='social'>
            <img className='socialImg1' src={TwitterIcon} alt="" />
        </div>
          <div className='social'>
            <img className='socialImg2' src={Instagram} alt="" />
          </div>
          <div className='social'>
            <img className='socialImg3' src={Wk} alt="" />
          </div>
      </div>
      <div className="empty"></div>
      <h3>RUSSIA</h3>
        </div>

        <div className="folowers">
          <h2>169k</h2>
          <p>подписчиков</p>
        </div>
        <div className="folowers">
          <h2>4.3</h2>
          <p>рейтинг</p>
        </div>
        <div className="folowers">
          <h2>3ч.</h2>
          <p>время ответа</p>
        </div>
      <button className='btn'>
        <Link to={'/message'} >Связаться</Link>

      </button>

      </div>
    </div>
  );
};

export default UserData;
