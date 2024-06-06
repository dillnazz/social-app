import React, { useState, useEffect } from 'react';
import './settingPage.scss';
import UserProfile from '../../components/userProfile/UserProfile';
import { useProfilePhoto } from '../../components/profileContext/ProfilePhotoContext';

interface SettingPageProps {
  onComplete: (userData: User) => void;
}

const SettingPage: React.FC<SettingPageProps> = ({ onComplete }) => {
  const { profilePhoto, setProfilePhoto } = useProfilePhoto();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [surname, setSurname] = useState(localStorage.getItem('surname') || '');
  const [profession, setProfession] = useState(localStorage.getItem('profession') || '');
  const [additionalInfo, setAdditionalInfo] = useState(localStorage.getItem('additionalInfo') || '');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoURL, setPhotoURL] = useState(localStorage.getItem('photoURL') || profilePhoto);
  const [savingChanges, setSavingChanges] = useState(false);

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('profession', profession);
    localStorage.setItem('additionalInfo', additionalInfo);
    localStorage.setItem('photoURL', photoURL);
    setProfilePhoto(photoURL);
  }, [name, surname, profession, additionalInfo, photoURL]);

  const handleDeleteAccount = () => {
    setName('');
    setSurname('');
    setProfession('');
    setAdditionalInfo('');
    setPhoto(null);
    setPhotoURL('');
    setConfirmDelete(false);
    localStorage.clear();
    setProfilePhoto('');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value);
  const handleProfessionChange = (e: React.ChangeEvent<HTMLInputElement>) => setProfession(e.target.value);
  const handleAdditionalInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setAdditionalInfo(e.target.value);
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setPhoto(file);
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPhotoURL(imageURL);
    }
  };

  const handleSaveChanges = () => {
    setSavingChanges(true);
    const userData = {
      id: 'current-user',
      name: name,
      avatar: photoURL,
      info: additionalInfo,
      position: profession,
      createdAt: new Date().toISOString(),
      cost: 0,
      like: 0,
    };
    setTimeout(() => {
      setSavingChanges(false);
      onComplete(userData);
    }, 2000);
  };

  return (
    <div className='profileForm'>
      <UserProfile profilePhoto={profilePhoto} profileName={`${name} ${surname}`} />
      <h2>Настройки</h2>
      <div className="userInfo">
        <label>
          Фото профиля
          <input type="file" onChange={handlePhotoChange} />
        </label>
        {photoURL && <img src={photoURL} alt="" style={{ maxWidth: '300px', maxHeight: '250px', borderRadius: '70px' }} />}
        <label>
          <input type="text" placeholder='Имя' value={name} onChange={handleNameChange} />
        </label>
        <label>
          <input type="text" placeholder='Фамилия' value={surname} onChange={handleSurnameChange} />
        </label>
        <label>
          <input type="text" placeholder='Профессия' value={profession} onChange={handleProfessionChange} />
        </label>
        <label>
          <textarea placeholder='О себе' value={additionalInfo} onChange={handleAdditionalInfoChange} />
        </label>
        {!savingChanges && (
          <>
            <button onClick={() => setConfirmDelete(true)}>Удалить аккаунт</button>
            <button onClick={handleSaveChanges}>Сохранять</button>
          </>
        )}
        {confirmDelete && (
          <div>
            <p>Вы уверены, что хотите удалить свою учетную запись?</p>
            <button onClick={handleDeleteAccount}>Подтвердите удаление</button>
            <button onClick={() => setConfirmDelete(false)}>Отмена</button>
          </div>
        )}
        {savingChanges && <p>Сохраняем изменения...</p>}
      </div>
    </div>
  );
}

export default SettingPage;
