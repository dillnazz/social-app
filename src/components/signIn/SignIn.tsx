import { CloseOutlined } from "@ant-design/icons";
import "./signIn.scss"
import React, { useEffect, useState } from 'react';
import InputField from "../UI/input-field/InputField";

const ShowTimer = () => {
  const [secund, setSecund] = useState<number>(59)
  let intervalId: number = 0

  useEffect(() => {
    intervalId = setInterval(() => {
      setSecund((state) => state -= 1)
    }, 1000)

    if (secund < 1) {
      console.log("stop");
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [secund])

  if (secund > 0) return <span>Повторная отправка возможна через {secund} секунд.</span>

  return <span>Повторная отправка возможна через 0 секунд.</span>
}

const SignIn: React.FC = () => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleButtonClick = () => {
    setFormVisibility(true);
  };
  const handleContinueClick = () => {
    setCurrentStep(currentStep + 1);
  };

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
                <InputField type={'text'} hint={'+996'} />
              </label>
              <label className="input-phone">
                <InputField type={'text'} hint={'phone number'} />
              </label>
              {currentStep === 1 && (
                <button className="continueBtn" type="button" onClick={handleContinueClick}>Далее</button>
              )}
              {currentStep === 2 && (
                <>
                  <label>
                    <p className="textPassword">Введите 4-х значный код из смс</p>
                    <InputField type={'text'} hint={'4565'} />
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

