import React from 'react';
import PropTypes from 'prop-types';
import styles from './Volume.module.scss';

const Volume = ({ volume, onVolumeChange }) => {
  return (
    <div className={styles.volumeControl}>
      <input
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={onVolumeChange}
        aria-label="Volume control"
        className={styles.volumeSlider}
      />
    </div>
  );
};

Volume.propTypes = {
  volume: PropTypes.number.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
};

export default Volume;
