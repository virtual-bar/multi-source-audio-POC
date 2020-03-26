import React, { useState, useEffect } from 'react';
import { Button } from './styles';

// Main function
const AudioTrack = ({ audioElement, audioCtx, groupGainNode }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  // Function definition to toggle playing
  const togglePlaying = () => {
    setPlaying(!playing);
  };

  // Function to create elementGainNode
  const useElementGain = ({ initialGain }) => {
    const [elementGain] = useState(audioCtx.createGain());
    elementGain.gain.setValueAtTime(initialGain, audioCtx.currentTime);
    return { elementGain };
  };

  // Initialize elementGain
  const { elementGain } = useElementGain({ initialGain: 1 });

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
      .connect(groupGainNode)
      .connect(audioCtx.destination);
  }, []);

  // Repeatable settings for playing and volume states
  useEffect(() => {
    const audioElement = getAudioElement();

    if (playing && audioElement.paused) {
      audioElement.play();
    } else if (!playing && !audioElement.paused) {
      audioElement.pause();
    }

    elementGain.gain.setValueAtTime(volume, audioCtx.currentTime);
  }, [playing, volume]);

  // More JSX
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
        step="0.05"
      />
      <datalist id="gainVals">
        <option value="1" label="unity" />
      </datalist>
    </>
  );
};

export default AudioTrack;
