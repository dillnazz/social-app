import "./messages.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import { Spin } from 'antd';

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
    return <Spin size="large" />;
  }

  return (
    <>
      <div>
        <Title>Рекомендуем </Title>
      </div>
      <div className='usersMessage'>
        <div className="chat">
          <div className="chatContact">
            <div className="chatBtns">
              <button>Выбрать</button>
              <button>Архивировать</button>
              <button>Удалить</button>
            </div>
            <div>
              {users.map(user => (
                <MessagesPage key={user.id} user={user} />
              ))}
            </div>
          </div>
          <div className="chatMessage">
            messages
          </div>
        </div>
      </div>
    </>
  );
};

interface UserCardProps {
  user: User;
}

const MessagesPage: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="messageHeader">
      <div style={{
        backgroundImage: `url(${user.userAvatar})`,
        height: 81,
        width: 71,
        borderRadius: 15,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>
      <div className="userInfo">
        <h4>{user.userName}</h4>
      </div>
    </div>
  );
};

export default UserData;
