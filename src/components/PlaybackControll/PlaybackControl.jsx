import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlaybackControl.module.scss';

const PlaybackControl = ({ currentTime, duration, onTimeChange }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={styles.playbackControl}>
      <input
        type="range"
        min="0"
        max={duration}
        step="0.01"
        value={currentTime}
        onChange={onTimeChange}
        className={styles.playbackSlider}
      />
      <span className={styles.duration}>{formatTime(duration)}</span>
    </div>
  );
};

PlaybackControl.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  onTimeChange: PropTypes.func.isRequired,
};

export default PlaybackControl;
