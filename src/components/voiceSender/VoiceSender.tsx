import React, { useState, useEffect } from 'react';
import "./voiceSender.scss";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { MdOutlineKeyboardVoice } from "react-icons/md";

interface VoiceSenderProps {
  onVoiceSent: (voiceData: Blob) => void;
  className?: string;
}

const VoiceSender: React.FC<VoiceSenderProps> = ({ onVoiceSent, className }) => {
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [recording, setRecording] = useState<boolean>(false);

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

  useEffect(() => {
    if (audioStream) {
      const recorder = new MediaRecorder(audioStream);
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };
      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        onVoiceSent(audioBlob);
        setAudioChunks([]);
      };
      setMediaRecorder(recorder);
    }
  }, [audioStream, onVoiceSent, audioChunks]);

  const toggleRecording = () => {
    if (mediaRecorder) {
      if (!recording) {
        mediaRecorder.start();
      } else {
        mediaRecorder.stop();
      }
      setRecording(!recording);
    }
  };

  return (
    <div>
      {!recording ? (
        <MdOutlineKeyboardVoice
          className='voiceButton'
          onClick={toggleRecording}
          style={{ cursor: 'pointer', width: 35, height: 35, marginTop: "12px" }}
        />
      ) : (
        <MdOutlineSettingsVoice
          className='voiceButton'
          onClick={toggleRecording}
          style={{ cursor: 'pointer', width: 35, height: 35, marginTop: "12px" }}
        />
      )}
    </div>
  );
};

export default VoiceSender;
