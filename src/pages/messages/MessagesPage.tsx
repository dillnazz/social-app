import "./messages.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import { Spin } from 'antd';
import { LinkOutlined, SendOutlined } from '@ant-design/icons';
import VoiceSender from "../../components/voiceSender/VoiceSender";

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
  const [singleUser, setSingleUser] = useState<User>();

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
  const [messageInput, setMessageInput] = useState<string>('');
  const [messages, setMessages] = useState<Array<string | Blob[] >>([]);

  const handleSendMessage = async (content : string | Blob) => {
    setMessages([...messages, content]);
    setMessageInput('');
  };

  const handleUserClick = async (userId: string) => {
    try {
      const { data } = await axios.get("https://656991a2de53105b0dd74202.mockapi.io/users/list/" + userId)
      setSingleUser(data)
    } catch (error) {
      console.log(error);
    }
  };

  if (users.length === 0) {
    return <Spin size="large" />;
  }

  return (
    <>
      <div className="usersMessage">
        <div className="chat">
          <div className="chatContact">
            <div className="chatBtns">
              <button>Выбрать</button>
              <button>Архивировать</button>
              <button>Удалить</button>
            </div>
            <div>
              {users.map(user => (
                <div key={user.id} onClick={() => handleUserClick(user.id)}>
                  <MessagesPage user={user} />
                </div>
              ))}
            </div>
          </div>
          {singleUser && (
            <div className="chatMessage">
              <div className="message">
                <div className="chatUser">
                  <img src={singleUser.userAvatar} alt="" />
                  <div className="online">
                    <p>
                      {singleUser.userName}
                    </p>
                    <p>online</p>
                  </div>
                </div>
                <div className="ellipse">
                  <h2>...</h2>
                </div>
              </div>
              <div style={{ width: 703, height: 3, borderRadius: 3, backgroundColor: '#f2f2fe', marginLeft: 30 }} className="empty"></div>
              <div className="messagesWindow">
                {messages.map((content, index) => (
                  <div className="messagesSent" key={index}>
                    {typeof content === 'string' ? content : (
                      <audio controls>
                        <source src={URL.createObjectURL(content)} type="audio/mp3" />
                        Your browser does not support the audio tag.
                      </audio>
                    )}
                  </div>
                ))}
              </div>
              <div className="inputToSentMessages">
                <LinkOutlined className="linkOutLinedIcon" />
                <span className="inputStyle">
                  <span className="inputWithSender" style={{display:'flex', position:"relative"}}>
                  <input id="messageSender" type="text" value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)} />
                  <VoiceSender className="voiceSender" onVoiceSent={(voiceData) => handleSendMessage(voiceData)} />
                  </span>
                  <SendOutlined onClick={() => handleSendMessage(messageInput)} />
                </span>
              </div>
            </div>


          )}
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
