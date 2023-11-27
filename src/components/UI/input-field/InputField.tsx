
import './input-field.scss'

const InputField = ({hint, type}) => {
  return (
    <input type={type} placeholder={hint} />
  )
}

export default InputField