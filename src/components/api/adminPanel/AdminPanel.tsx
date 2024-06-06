import React, { useEffect, useState } from 'react';
import "./adminPanel.scss";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

interface Item {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  position: string;
  cost: number;
  info: string;
  like: number;
}

const AdminPanel = () => {
  const [items, setItems] = useState < Item[] > ([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState < Item > ({
    id: '',
    createdAt: '',
    name: '',
    avatar: '',
    position: '',
    cost: 0,
    info: '',
    like: 0,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  useEffect(() => {
    if (isLoggedIn) {
      fetchItems();
    }
  }, [isLoggedIn]);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://65f1366bda8c6584131d1388.mockapi.io/users');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await fetch(`https://65f1366bda8c6584131d1388.mockapi.io/users/${id}`, {
        method: 'DELETE',
      });
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  const editItem = (item: Item) => {
    setIsEditing(true);
    setCurrentItem(item);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const updateItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`https://65f1366bda8c6584131d1388.mockapi.io/users/${currentItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentItem),
      });
      setItems(items.map(item => (item.id === currentItem.id ? currentItem : item)));
      setIsEditing(false);
      setCurrentItem({
        id: '',
        createdAt: '',
        name: '',
        avatar: '',
        position: '',
        cost: 0,
        info: '',
        like: 0,
      });
    } catch (error) {
      console.error('Ошибка при обновлении:', error);
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = loginData;
    if (username === 'burul' && password === '040404') {
      setIsLoggedIn(true);
    } else {
      alert('Неправильный логин или пароль');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="login-form">
        <h2 style={{ color: "#1a236e" }}>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label>
            Имя пользователя:
            <br />
            <input
              style={{ width: "250px" }}
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
            />
          </label>
          <label>
            Пароль:
            <br />
            <input
              style={{ width: "250px" }}
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
          </label>
          <button style={{ marginLeft: "80px", backgroundColor: "#1a236e" }} type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <form onSubmit={updateItem}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={currentItem.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Avatar:
              <input
                type="text"
                name="avatar"
                value={currentItem.avatar}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Position:
              <input
                type="text"
                name="position"
                value={currentItem.position}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Cost:
              <input
                type="number"
                name="cost"
                value={currentItem.cost}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Info:
              <input
                type="text"
                name="info"
                value={currentItem.info}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Like:
              <input
                type="number"
                name="like"
                value={currentItem.like}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Обновить</button>
            <button onClick={() => setIsEditing(false)}>Отмена</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Items</h2>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} - {item.position}
                <button onClick={() => editItem(item)}><FaRegEdit /></button>
                <button onClick={() => deleteItem(item.id)}><MdDeleteOutline /></button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
