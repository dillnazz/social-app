import "./category.scss";
import Card1 from "../../assets/images/Rectangle 457.svg";
import Card2 from "../../assets/images/Rectangle 459.svg";
import Card3 from "../../assets/images/Rectangle 461.svg";
import Card4 from "../../assets/images/Rectangle 465.svg";
import Card5 from "../../assets/images/Rectangle 466.svg";
import Card6 from "../../assets/images/Rectangle 467.svg";
import Title from "../title/Title";
const Category = () => {
  return (
    <div className="category">
      <Title>Категории </Title>
        <div className="cards">
          <div className="card">
            <p className="CategoryText">Музыканты</p>
            <img className="categoryImg" src={Card1} alt="" />
          </div>
          <div className="card">
            <p className="CategoryText">Актёры</p>
            <img className="categoryImg" src={Card2} alt="" />
          </div>
          <div className="card">
            <p className="CategoryText">YouTubers</p>
            <img className="categoryImg" src={Card3} alt="" />
          </div>
          <div className="card">
            <p className="CategoryText">Блогеры</p>
            <img className="categoryImg" src={Card4} alt="" />
          </div>
          <div className="card">
            <p className="CategoryText">Комики</p>
            <img className="categoryImg" src={Card5} alt="" />
          </div>
          <div className="card">
            <p className="CategoryText">Модели</p>
            <img className="categoryImg" src={Card6} alt="" />
          </div>
        </div>
    </div>
  )
}


export default Category