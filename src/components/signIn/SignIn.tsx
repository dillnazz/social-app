import "./signIn.scss"
import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const handleButtonClick = () => {
    console.log('button clicked');

    setFormVisibility(!isFormVisible);

  };

  return (
    <div className="signIn">
      <button className="signInBtn" onClick={handleButtonClick}>Войти</button>
      {isFormVisible && (
        <div className="form">
        <div className="form-container">
              <h2 className="formText">Авторизация</h2>
              <p>Выберите код страны и введите номер телефона</p>
          <form>
            <label>
                <input type="text" placeholder="+996" />
            </label>
            <label>
                <input type="text" placeholder="phone number" />
            </label>
          </form>
            <button className="continueBtn" type="submit">Далее</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;

