import "./input.scss"
import { Input as AntInput } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const Input = () => {
  const onSearch = (value: string) => {
    console.log(value)

  }
  return (
    <div className="custom-input">
      <AntInput placeholder="Поиск" suffix={
        <SearchOutlined />
      } />
    </div>
  )
}

export default Input