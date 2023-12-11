import Title from "../title/Title";
import { mockUserData } from "./data";
import UserCard from "./user-card/UserCard";
// css
import "./category.scss";

const Category = () => {
  return (
    <div className="category">
      <Title>Категории </Title>
      <div className="cards">
        {mockUserData.map(({ category, image }) => (
          <UserCard key={category} category={category} image={image} />
        ))}
      </div>
    </div>
  )
}


export default Category