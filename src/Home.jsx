import React, { useRef, useState, useEffect } from 'react';
import styles from './Home.module.scss';
import Volume from './components/Volume/Volume';
import PlaybackControl from './components/PlaybackControll/PlaybackControl';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Default volume is 1 (100%)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateCurrentTime);
    audio.addEventListener('loadedmetadata', setAudioData);

    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
      audio.removeEventListener('loadedmetadata', setAudioData);
    };
  }, []);

  const handleToggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <>
      <div className={styles.main} onClick={handleToggleMusic}>
        <img
          src='https://dotawallpapers.com/wallpaper/dotawallpapers.com-dota-wallpaper-4330-2560x1440.gif'
          className={styles.bgdota}
          alt="Background"
        />
        <img
          src='https://i.pinimg.com/originals/9c/d1/25/9cd125379672047a6d273ab30bf298d2.gif'
          className={styles.retroeffect}
          alt="Retro Effect"
        />
        <audio ref={audioRef} src='serega-pirat-pochemu-ty-eshe-ne-fanat-mp3.mp3'></audio>
      </div>
      <Volume volume={volume} onVolumeChange={handleVolumeChange} />
      <PlaybackControl
        currentTime={currentTime}
        duration={duration}
        onTimeChange={handleTimeChange}
      />
    </>
  );
}

export default App;
