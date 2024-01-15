import React, { useState, useEffect } from 'react';
import VoiceRenring from "../../assets/svg/voice-57.png";
import Voice from "../../assets/svg/kisspng-computer-icons-clip-art-5ae1fac6412a67.4024205715247592382669.jpg";
import "./voiceSender.scss"

interface VoiceSenderProps {
  onVoiceSent: (voiceData: Blob) => void;
  className?: string;
}

const VoiceSender: React.FC<VoiceSenderProps> = ({ onVoiceSent, className }) => {
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [recording, setRecording] = useState<boolean>(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [startRecordingVisible, setStartRecordingVisible] = useState<boolean>(true);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          setAudioStream(stream);
        })
        .catch((error) => {
          console.error('Error accessing microphone:', error);
        });
    }
  }, []);

  const toggleImages = () => {
    setStartRecordingVisible(!startRecordingVisible);
    setRecording(!recording);
    setAudioChunks([]);

    if (audioStream) {
      const mediaRecorder = new MediaRecorder(audioStream);
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        onVoiceSent(audioBlob);
      };

      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
      }, 5000);
    }
  };

  return (
    <div>
      {startRecordingVisible ? (
        <img
        className='voiceStop'
          src={VoiceRenring}
          alt="Start Recording"
          onClick={toggleImages}
          style={{ cursor: 'pointer', width: 40, height: 40, borderRadius:20}}
        />
      ) : (
        <img
          className='voiceStop'
          src={Voice}
          alt="Stop Recording"
          onClick={toggleImages}
          style={{ cursor: 'pointer', width: 30, height: 30}}
        />
      )}
    </div>
  );
};

export default VoiceSender;
