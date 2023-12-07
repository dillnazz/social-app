import { CloseOutlined } from "@ant-design/icons";
import "./signIn.scss"
import { useEffect, useState } from 'react';
import InputField from "../UI/input-field/InputField";
import AntSelect from "../UI/select/AntSelect";
const ShowTimer = () => {
  const [second, setSecond] = useState<number>(5)

  let intervalId: ReturnType<typeof setTimeout>;

  useEffect(() => {
    intervalId = setInterval(() => {
      setSecond((state) => state - 1)
    }, 1000)

    if (second < 1) {
      console.log("stop");
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [second])

  if (second > 0) return <span>Повторная отправка возможна через {second} секунд.</span>

  return <span>Повторная отправка возможна через 0 секунд.</span>
}

const SignIn: React.FC = () => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState<string>("")


  const handleButtonClick = () => {
    setFormVisibility(true);
  };
  const handleContinueClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSendOTP = () => { }

  return (
    <div className="signIn">
      <button className="signInBtn" onClick={handleButtonClick}>Войти</button>
      {isFormVisible && (
        <div className="form">
          <div className="form-container">
            <button onClick={() => setFormVisibility(false)} style={{
              backgroundColor: 'transparent',
              border: 'none',
              padding: '3px 6px',
              fontSize: '22px',
              cursor: 'pointer',
              marginTop: "20px"
            }}>
              <CloseOutlined />
            </button>
            <h2 className="formText">Авторизация</h2>
            <p>Выберите код страны и введите номер телефона</p>
            <form>
              <label className="input-phone-code">
                <AntSelect />
              </label>
              <label className="input-phone">
                <InputField
                  onChange={(value) => {
                    console.log(value)
                    setPhoneNumber(value)
                  }}
                  type={'tel'} hint={'phone number'} />
              </label>
              {currentStep === 1 && (
                <button className="continueBtn" type="button"
                  onClick={handleContinueClick}>Далее</button>
              )}
              {currentStep === 2 && (
                <>
                  <label>
                    <p className="textPassword">Введите 4-х значный код из смс</p>
                    <InputField onChange={(value) => {
                      console.log(value)
                      setPhoneNumber(value)
                    }} type={'text'} hint={'4565'} />
                  </label>
                  <button className="continueBtn" type="button">Войти</button>
                </>
              )}
            </form>
            {currentStep === 2 && (
              <div className="form-helper">
                Неверный номер телефона?&nbsp;
                <span className="span">
                  Введите правильный
                </span>
                <br />
                <ShowTimer />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;

