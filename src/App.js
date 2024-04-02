import React, { useState, useEffect } from 'react';
import './App.css';

const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState('00:00');
  const [totalDuration, setTotalDuration] = useState('00:00');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    loadTrack(trackIndex);
  }, [trackIndex]);

  const musicList = [
    {
      img: 'imgs/asap.jpg',
      name: 'Praise the Lord',
      artist: 'A$aap Rocky, Skepta ft Da Shine',
      music: 'playlist/praise the lord.mp3'
    },
    // Add other tracks here...
  ];

  const currTrack = new Audio();

  useEffect(() => {
    const updateTimer = setInterval(setUpdate, 1000);
    return () => clearInterval(updateTimer);
  }, []);

  const loadTrack = (index) => {
    reset();

    currTrack.src = musicList[index].music;
    currTrack.load();

    setTotalDuration('00:00');

    currTrack.addEventListener('ended', nextTrack);
    randomBgColor();
  };

  const seekTo = (event) => {
    const seekTime = event.target.value;
    // Logic for seeking track
  };

  const setVolumeHandler = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    // Logic for setting volume
  };

  const randomTrack = () => {
    // Logic for playing a random track
  };

  const prevTrack = () => {
    // Logic for playing previous track
  };

  const randomBgColor = () => {
    // Logic for random background color
  };

  const repeatTrack = () => {
    // Logic for repeating track
  };

  const reset = () => {
    setCurrentTime('00:00');
    setTotalDuration('00:00');
  };

  const playpauseTrack = () => {
    isPlaying ? pauseTrack() : playTrack();
  };

  const playTrack = () => {
    currTrack.play();
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    currTrack.pause();
    setIsPlaying(false);
  };

  const nextTrack = () => {
    let newIndex;
    if (!isRandom) {
      newIndex = trackIndex < musicList.length - 1 ? trackIndex + 1 : 0;
    } else {
      newIndex = Math.floor(Math.random() * musicList.length);
    }
    setTrackIndex(newIndex);
  };

  const setUpdate = () => {
    let seekPosition = 0;
    if (!isNaN(currTrack.duration)) {
      seekPosition = currTrack.currentTime * (100 / currTrack.duration);
      // Update other UI elements
    }
  };

  return (
    <div className="player">
      <div className="wrapper">
        <div className="details">
          <div className="now-playing">PLAYING x OF y</div>
          <div className="track-art"></div>
          <div className="track-name">Track Name</div>
          <div className="track-artist">Track Artist</div>
        </div>

        <div className="slider_container">
          <div className="current-time">{currentTime}</div>
          <input
            type="range"
            min="1"
            max="100"
            value="0"
            className="seek_slider"
            onChange={seekTo}
          />
          <div className="total-duration">{totalDuration}</div>
        </div>

        <div className="slider_container">
          <i className="fa fa-volume-down"></i>
          <input
            type="range"
            min="1"
            max="100"
            value={volume}
            className="volume_slider"
            onChange={setVolumeHandler}
          />
          <i className="fa fa-volume-up"></i>
        </div>

        <div className="buttons">
          <div className="random-track" onClick={randomTrack}>
            <i className="fas fa-random fa-2x" title="random"></i>
          </div>
          <div className="prev-track" onClick={prevTrack}>
            <i className="fa fa-step-backward fa-2x"></i>
          </div>
          <div className="playpause-track" onClick={playpauseTrack}>
            <i className={`fa fa-${isPlaying ? 'pause' : 'play'}-circle fa-5x`}></i>
          </div>
          <div className="next-track" onClick={nextTrack}>
            <i className="fa fa-step-forward fa-2x"></i>
          </div>
          <div className="repeat-track" onClick={repeatTrack}>
            <i className="fa fa-repeat fa-2x" title="repeat"></i>
          </div>
        </div>

        <div id="wave">
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
