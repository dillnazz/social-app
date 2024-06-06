import React, { useState, useEffect } from 'react';
import './userData.scss';
import axios from 'axios';
import Title from '../../components/title/Title';
import { Spin } from 'antd';
import Vector from '../../assets/svg/Vector.svg';
import Vector1 from "../../assets/svg/Vector (1).svg";
import Vector2 from "../../assets/svg/Vector (2).svg";
import { Link } from 'react-router-dom';

interface User {
  createdAt: string;
  name: string;
  avatar: string;
  info: string;
  cost: number;
  position: string;
  like: number;
  id: string;
}

const UserData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>('https://65f1366bda8c6584131d1388.mockapi.io/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const storedUser = {
      id: 'current-user',
      name: localStorage.getItem('name') || '',
      avatar: localStorage.getItem('photoURL') || '',
      info: localStorage.getItem('additionalInfo') || '',
      position: localStorage.getItem('profession') || '',
      createdAt: new Date().toISOString(),
      cost: 0,
      like: 0,
    };

    if (storedUser.name) {
      setCurrentUser(storedUser);
    }
  }, []);

  if (users.length === 0 && !currentUser) {
    return <Spin size="large" />;
  }

  const allUsers = currentUser ? [currentUser, ...users] : users;

  return (
    <>
      <div>
        <Title>Рекомендуем </Title>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 30 }}>
            {allUsers.map((user) => (
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
          backgroundImage: `url(${user.avatar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: 241,
          height: 263,
          borderRadius: 15,
        }}>
        </div>
        <h4>{user.name}</h4>
        <p>{user.info}</p>
        <h3>{user.position}</h3>
        <div className="contact">
          <div className="socialLinks">
            <div className="socialSvgs">
              <div className="images">
                <div style={{ backgroundColor: "#1DA1F2", width: 35, height: 34, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img style={{ backgroundColor: "#1DA1F2" }} src={Vector} alt="" />
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
            <p>Kg</p>
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
          <button className="contactBtn">
            <Link className="contact" to="/message">Связаться</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserData;
