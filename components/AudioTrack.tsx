import React, { useState, useEffect } from 'react';
import { Button } from './styles';

const Master = ({ audioElement }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlaying = () => {
    setPlaying(!playing);
    audioElement.paused ? audioElement.play() : audioElement.pause();
  };

  return (
    <>
      <Button
        data-playing={playing}
        className="control-play"
        role="switch"
        onClick={togglePlaying}
      >
        {playing ? 'Playing' : 'Paused'}
      </Button>
    </>
  );
};
export default Master;
