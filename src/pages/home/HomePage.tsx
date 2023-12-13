import Category from "../../components/category/Category"
import UserData from "../messages/MessagesPage"


const HomePage: React.FC = () => {
  return (
    <div>
      <Category />
      <UserData/>
    </div>
  )
}

export default HomePage