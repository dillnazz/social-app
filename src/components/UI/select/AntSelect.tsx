import { Select } from 'antd';
import "./ant-select.scss"

const handleChange = ({ value }: { value: string }) => {
  console.log(value);
  return value
};

const AntSelect = () => {
  return (
    <div className="ant-select-custom">
      <Select
        labelInValue
        defaultValue={{ value: '+996', label: '(Кыргызстан)' }}
        style={{ width: 120}}
        onChange={handleChange}
        options={[
          {
            value: '+996',
            label: '+996 (Кыргызстан)',
          },
          {
            value: '+7',
            label: '+7 (Россия)',
          },
        ]}
      />
    </div>
  )
}

export default AntSelect


/*
* <InputField type={'search'} hint={'+996'} list="character" />
                <datalist id="character">
                  <option value="+996 (Кыргызстан)"></option>
                  <option value="+7 (Россия)"></option>
                </datalist>
* */