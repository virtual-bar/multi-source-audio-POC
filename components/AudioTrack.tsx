import React, { useState, useEffect } from 'react';
import { Button } from './styles';

const useAudio = ({ initialGain }) => {
  const AudioContext = window.AudioContext;
  const [audioCtx] = useState(new AudioContext());
  const [gainNode] = useState(audioCtx.createGain());

  gainNode.gain.value = initialGain;

  return { audioCtx, gainNode };
};

const AudioTrack = ({ audioElement }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  const changeVolume = e => {
    const {
      target: { value }
    } = e;
    setVolume(value);
  };

  const { audioCtx, gainNode } = useAudio({ initialGain: 1 });

  const getAudioElement = () => audioElement;

  useEffect(() => {
    const audioElement = getAudioElement();
    const track = audioCtx.createMediaElementSource(audioElement);

    track.connect(gainNode).connect(audioCtx.destination);
  }, []);

  useEffect(() => {
    const audioElement = getAudioElement();

    if (playing && audioElement.paused) {
      audioElement.play();
    } else if (!playing && !audioElement.paused) {
      audioElement.pause();
      console.log(playing);
    }

    gainNode.gain.value = volume;
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
