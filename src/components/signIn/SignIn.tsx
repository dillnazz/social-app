import { CloseOutlined } from "@ant-design/icons";
import "./signIn.scss";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "../../fireBase/FireBase";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
        }
      });
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const handleButtonClick = () => {
    setFormVisibility(true);
  };

  return (
    <div className="signIn">
      {!user && (
        <button className="signInBtn" onClick={handleButtonClick}>
          Войти
        </button>
      )}
      {isFormVisible && !user && (
        <div className="form">
          <div className="form-container">
            <button
              onClick={() => setFormVisibility(false)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "3px 6px",
                fontSize: "22px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              <CloseOutlined />
            </button>
            <h2 className="formText">Авторизация</h2>
            <h3 className="SignInBtn" style={{ margin: "30px 30px 30px 90px" }}><Link style={{ background: "#f2f2fe", padding: "10px", borderRadius: "20px", margin: "50px", color: "#4e3f6f" }} to="settings">Зарегистрироваться</Link></h3>
            <p className="text">
              Выберите код страны и введите номер телефона
            </p>
            <section className="bg-emerald-500 flex items-center justify-center h-screen">
              <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>
                {!user && (
                  <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                    {showOTP ? (
                      <>
                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                          <BsFillShieldLockFill size={30} />
                        </div>
                        <label
                          style={{ color: "#4e3f6f ", padding: "10px" }}
                          htmlFor="otp"
                          className="font-bold text-xl text-white text-center"
                        >
                          Введите свой одноразовый код
                        </label>
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          OTPLength={6}
                          otpType="number"
                          disabled={false}
                          autoFocus
                          className="opt-container "
                        ></OtpInput>
                        <button
                          onClick={onOTPVerify}
                          className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                        >
                          {loading && (
                            <CgSpinner
                              size={20}
                              className="mt-1 animate-spin"
                            />
                          )}
                          <span
                            className="signInBtn"
                            style={{ color: " #4e3f6f" }}
                          >
                            Подтвердить одноразовый код
                          </span>
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full"></div>
                        <PhoneInput
                          country={"in"}
                          value={ph}
                          onChange={setPh}
                        />
                        <button
                          onClick={onSignup}
                          className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                        >
                          {loading && (
                            <CgSpinner
                              size={20}
                              className="mt-1 animate-spin"
                            />
                          )}
                          <span className="signInBtn">
                            Отправить код по СМС
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
      {user && (
        <div className="loggedInContent">
          {/* Здесь размещается контент для авторизованного пользователя */}
          {/* <h2></h2> */}
        </div>
      )}
    </div>
  );
};

export default SignIn;


