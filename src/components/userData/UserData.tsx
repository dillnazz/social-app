import "./userData.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import { Spin } from 'antd';
import Vector from '../../assets/svg/Vector.svg';
import Vector1 from "../../assets/svg/Vector (1).svg";
import Vector2 from "../../assets/svg/Vector (2).svg";
import MessagesPage from '../../pages/messages/MessagesPage'
import { Link } from 'react-router-dom';


interface User {
  createdAt: string;
  userName: string;
  userAvatar: string;
  userInfo: string;
  userCost: number;
  id: string;
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
    return <Spin size="large" />;
  }

  return (
    <>
      <div>
        <Title>Рекомендуем </Title>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 30 }}>
            {users.map((user) => (
              <div key={user.id}>
                <UserDataRender user={user} />
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
};
interface UserCardProps {
  user: User;
}

const UserDataRender: React.FC<UserCardProps> = ({ user }) => {
  return (
    <>
      <div className="recomUsers">
        <div style={{
          backgroundImage: `url(${user.userAvatar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: 241,
          height: 263,
          borderRadius: 15,
        }}>
        </div>
        <h4>{user.userName}</h4>
        <p>{user.userInfo}</p>
        <div className="contact">
          <div className="socialLinks">
            <div className="socialSvgs">
              <div className="images">
                <div style={{ backgroundColor: "#1DA1F2", width: 35, height: 34, borderRadius: 10, display:'flex', justifyContent:'center', alignItems:'center'}}>
              <img style={{ backgroundColor:"#1DA1F2"}} src={Vector} alt="" />
                </div>
                <div style={{ backgroundColor: "#E4405F", width: 35, height: 34, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img style={{ backgroundColor: "#E4405F" }} src={Vector1} alt="" />
                </div>
                <div style={{ backgroundColor: "#4C75A3", width: 35, height: 34, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img style={{ backgroundColor: "#4C75A3" }} src={Vector2} alt="" />
                </div>
              </div>
            </div>
            <div className="emptyDiv"></div>
            <p>  RUSSIA</p>
      </div>
      <div className="followers">
            <h2>169к</h2>
            <p>подписчиков</p>
      </div>
          <div className="followers">
            <h2>4.3</h2>
            <p>рейтинг</p>
          </div>
          <div className="followers">
            <h2>3ч.</h2>
            <p>время ответа</p>
          </div>
          <Link to="/src/pages/messages/MessagesPage.tsx">
            <button className="contactBtn">Связаться</button>
          </Link>
        </div>
      </div>
    </>
  );
};


export default UserData;
