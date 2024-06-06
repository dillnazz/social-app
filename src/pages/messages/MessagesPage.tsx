import "./messages.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import { Spin } from 'antd';
import { LinkOutlined, SendOutlined, DeleteOutlined } from '@ant-design/icons'; // Добавлен иконка удаления
import VoiceSender from "../../components/voiceSender/VoiceSender";

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
  const [singleUser, setSingleUser] = useState<User>();
  const [messageInput, setMessageInput] = useState<string>('');
  const [messages, setMessages] = useState<Array<string | Blob[]>>([]);

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
  }, []);

  const handleSendMessage = async (content: string | Blob) => {
    setMessages([...messages, content]);
    setMessageInput('');
  };

  const handleUserClick = async (id: string) => {
    try {
      const user = users.find(user => user.id === id);
      if (user) {
        setSingleUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteMessage = (index: number) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
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
              {/* <button>Выбрать</button> */}
              {/* <button>Архивировать</button> */}
              {/* <button>Удалить</button> */}
            </div>
            <div style={{ height: "630px", overflowY: "auto" }}>
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
                  <img src={singleUser.avatar} alt="" />
                  <div className="online">
                    <p>
                      {singleUser.name}
                    </p>
                    {/* <p>online</p> */}
                  </div>
                </div>
                {/* <div className="ellipse">
                  <h2>...</h2>
                </div> */}
              </div>
              <div style={{ width: 703, height: 3, borderRadius: 3, backgroundColor: '#f2f2fe', marginLeft: 30 }} className="empty"></div>
              <div>
                <div className="messagesWindow">
                  {messages.map((content, index) => (
                    <div className="messagesSent" key={index}>
                      {typeof content === 'string' ? content : (
                        <audio controls>
                          <source src={URL.createObjectURL(content)} type="audio/mp3" />
                          Your browser does not support the audio tag.
                        </audio>
                      )}
                    <div>
                      <DeleteOutlined style={{color:"red"}} onClick={() => handleDeleteMessage(index)} /> {/* Кнопка удаления */}
                    </div>
                    </div>
                  ))}
                </div>
                <div className="inputToSentMessages">
                  {/* <LinkOutlined className="linkOutLinedIcon" /> */}
                  <span className="inputStyle">
                    <span className="inputWithSender" style={{ display: 'flex', position: "relative" }}>
                      <input id="messageSender" type="text" value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)} />
                      <VoiceSender className="voiceSender" onVoiceSent={(voiceData) => handleSendMessage(voiceData)} />
                    </span>
                    <SendOutlined onClick={() => handleSendMessage(messageInput)} />
                  </span>
                </div>
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
        backgroundImage: `url(${user.avatar})`,
        height: 81,
        width: 71,
        borderRadius: 15,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>
      <div className="userInfo">
        <h4>{user.name}</h4>
      </div>
    </div>
  );
};

export default UserData;

