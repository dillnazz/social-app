import React, { createContext, useContext, useState, ReactNode } from 'react';

const ProfilePhotoContext = createContext<{
  profilePhoto: string;
  setProfilePhoto: React.Dispatch<React.SetStateAction<string>>;
}>({
  profilePhoto: '',
  setProfilePhoto: () => { },
});

export const useProfilePhoto = () => useContext(ProfilePhotoContext);

export const ProfilePhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profilePhoto, setProfilePhoto] = useState<string>('https://example.com/profile.jpg');

  return (
    <ProfilePhotoContext.Provider value={{ profilePhoto, setProfilePhoto }}>
      {children}
    </ProfilePhotoContext.Provider>
  );
};
