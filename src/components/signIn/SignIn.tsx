import { CloseOutlined } from "@ant-design/icons";
import "./signIn.scss"
import React, { useState } from 'react';
import InputField from "../UI/input-field/InputField";

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
              cursor: 'pointer'
            }}>
              <CloseOutlined />
            </button>
            <h2 className="formText">Авторизация</h2>
            <p>Выберите код страны и введите номер телефона</p>
            <form>
              <label>
                <InputField type={'text'} hint={'+996'} />
              </label>
              <label>
                <InputField type={'text'} hint={'phone number'} />
              </label>
              {currentStep === 1 && (
                <button className="continueBtn" type="button" onClick={handleContinueClick}>Далее</button>
              )}
              {currentStep === 2 && (
                <label>
                  <p className="textPassword">Введите 4-х значный код из смс</p>
                  <InputField
                    type={'text'} hint={'4565'} />
                </label>
              )}
            </form>
            {currentStep === 2 && (
              <button className="continueBtn" type="button">Войти</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;

