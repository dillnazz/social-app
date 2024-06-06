import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ProfileContextProps {
  profilePhoto: string;
  setProfilePhoto: (photo: string) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profilePhoto, setProfilePhoto] = useState<string>('');

  return (
    <ProfileContext.Provider value={{ profilePhoto, setProfilePhoto }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
