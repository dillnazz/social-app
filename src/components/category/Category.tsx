
import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../title/Title";
import { mockUserData } from "./data";
import UserCard from "./user-card/UserCard";
import "./category.scss";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (selectedCategory) {
      axios.get("https://65f1366bda8c6584131d1388.mockapi.io/users")
        .then(response => {
          const filteredUsers = response.data.filter((user: any) =>
            user.position && user.position.toLowerCase().startsWith(selectedCategory.toLowerCase().slice(0, 3))
          );
          setUsers(filteredUsers);
        })
        .catch(error => {
          console.error("Error fetching users:", error);
        });
    }
  }, [selectedCategory]);

  return (
    <div className="category">
      <Title>Категории</Title>
      <div className="cards">
        {mockUserData.map(({ category, image }) => (
          <div className="card" key={category} onClick={() => setSelectedCategory(category)}>
            <UserCard style={{display:"flex", alignItems:"center"}} category={category} image={image} />
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="user-list">
          <h2>Пользователи в категории: {selectedCategory}</h2>
          {users.length > 0 ? (
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  <img className="userImg" src={user.avatar} alt={user.name} />
                  <p>{user.position}</p>
                  <br/>
                  <p>{user.name}</p>
                  <br/>
                  <p> {user.info}</p>
                  <button className="contactBtn">
                    <a className="contact" href="http://localhost:5173/message">Связаться</a>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Нет пользователей в этой категории.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
