
import React, { useState, useEffect } from "react";
import { Input as AntInput } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./input.scss"
import Vector from '../../../assets/svg/Vector.svg';
import Vector1 from "../../../assets/svg/Vector (1).svg";
import Vector2 from "../../../assets/svg/Vector (2).svg";


interface User {
  id: string;
  name: string;
  avatar: string;
}

const Input: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Получение списка пользователей с сервера
    fetch('https://65f1366bda8c6584131d1388.mockapi.io/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase() === searchText.toLowerCase()
  );

  return (
    <div className="custom-input">
      <AntInput
        placeholder="Поиск"
        suffix={<SearchOutlined />}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="user">
        {filteredUsers.map(user => (
          <div key={user.id}>
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
                <button className="contactBtn">
                  <a className="contact" href="http://localhost:5173/message">Связаться</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Input;

