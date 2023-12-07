
import { UserCardProps } from "./interface"

const UserCard: React.FC<UserCardProps> = ({ category, image }) =>
(
  <div className="card">
    <p className="CategoryText">{category}</p>
    <img className="categoryImg" src={image} alt="" />
  </div>
)


export default UserCard