import React, { useState } from 'react';
import AppRoutes from '../../routes/AppRoutes';


const App: React.FC = () => {
  const [isSettingsCompleted, setIsSettingsCompleted] = useState(false);

  return (
    <AppRoutes isSettingsCompleted={isSettingsCompleted} setIsSettingsCompleted={setIsSettingsCompleted} />
  );
};

export default App;
