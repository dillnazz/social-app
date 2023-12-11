import Input from "../../components/UI/input/Input"

const MessagesPage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      border: '1px solid red',
    }}>
      <div style={{
        width:400,
        border:'1px solid black'
      }}>
        Чаты
      </div>
      <div style={{
        flex: 1,
      }}>
        Чат
      </div>
    </div>
  )
}

export default MessagesPage