
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SettingPage from '../pages/setting//SettingPage';
import SignIn from '../components/signIn/SignIn';
import { routes } from './routes';
import AdminPanel from "../components/api/adminPanel/AdminPanel";
import Autorization from '../pages/autorization/Autorization';

interface AppRoutesProps {
  isSettingsCompleted: boolean;
  setIsSettingsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isSettingsCompleted, setIsSettingsCompleted }) => {
  useEffect(() => {
    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');
    const profession = localStorage.getItem('profession');
    const additionalInfo = localStorage.getItem('additionalInfo');
    const photoURL = localStorage.getItem('photoURL');

    if (name && surname && profession && additionalInfo && photoURL) {
      setIsSettingsCompleted(true);
    }
  }, [setIsSettingsCompleted]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="settings"
            element={<SettingPage onComplete={() => setIsSettingsCompleted(true)} />}
          />
          <Route
            path="signin"
            element={
              isSettingsCompleted ? (
                <SignIn />
              ) : (
                <Navigate to="/settings" replace />
              )
            }
          />
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route
            path="*"
            element={<Navigate to={isSettingsCompleted ? "/signin" : "/settings"} replace />}
          />
        </Route>
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
