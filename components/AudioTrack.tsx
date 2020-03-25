import React, { useState, useEffect } from 'react';
import { Button } from './styles';

// Main function
const AudioTrack = ({ audioElement, audioCtx, masterGainNode }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  // Function definition to toggle playing
  const togglePlaying = () => {
    setPlaying(!playing);
  };

  // Custom hook to create elementGainNode
  const useElementGain = ({ initialGain }) => {
    const [elementGain] = useState(audioCtx.createGain());

    elementGain.gain.value = initialGain;

    return { elementGain };
  };

  // Function definition to change element volume
  const changeVolume = e => {
    const {
      target: { value }
    } = e;
    setVolume(value);
  };

  // Getter for audio source for use in useEffect
  const getAudioElement = () => audioElement;

  // One-Time post-render setup and connections
  useEffect(() => {
    const audioElement = getAudioElement();
    const track = audioCtx.createMediaElementSource(audioElement);

    track
      .connect(elementGain)
      .connect(masterGainNode)
      .connect(audioCtx.destination);
  }, []);

  const { elementGain } = useElementGain({ initialGain: 1 });

  useEffect(() => {
    const audioElement = getAudioElement();

    if (playing && audioElement.paused) {
      audioElement.play();
      console.log(playing);
    } else if (!playing && !audioElement.paused) {
      audioElement.pause();
      console.log(playing);
    }

    console.log('audio event changed');

    elementGain.gain.value = volume;
  }, [playing, volume]);

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

      <input
        type="range"
        id="volume"
        className="control-volume"
        min="0"
        max="2"
        value={volume}
        onChange={changeVolume}
        list="gainVals"
        step="0.01"
      />
      <datalist id="gainVals">
        <option value="1" label="unity" />
      </datalist>
    </>
  );
};

export default AudioTrack;
