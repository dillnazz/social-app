
import React from "react";

interface UserCardProps {
  category: string;
  image: string;
  style?: React.CSSProperties;
}

const UserCard: React.FC<UserCardProps> = ({ category, image, style }) => {
  return (
    <div className="user-card" style={style}>
      <img src={image} alt={category} />
      <h3>{category}</h3>
    </div>
  );
};

export default UserCard;
