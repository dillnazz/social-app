import './recommendation.scss'
const Recommendation = (user:any) => {
  interface RecommendationProps {
    user: {
      createdAt: string;
      userName: string;
      userAvatar: string;
      userInfo: string;
      userCost: number;
      id: string;
    };
  }
  return (
    <div>
      <img style={{ width: '241px' }} src={user.userAvatar} alt="" />
      <h1>{user.userName}</h1>
      <p>{user.userInfo}</p>
      {/* Другие элементы интерфейса для рекомендации */}
    </div>
  )
}

export default Recommendation


