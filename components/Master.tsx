import React, { useState, useEffect } from 'react';
import AudioTrack from './AudioTrack';
import styled from 'styled-components';
import { flexCentered } from '../components/styles';

// Stylized buttons!
const ButtonContainer = styled.div`
  ${flexCentered}
  flex-direction: column;
  margin: 10px 0;
`;

// Get an audio source
const getAudio = source => {
  if (typeof window !== 'undefined') {
    const audio = new Audio(source);
    return audio;
  }
};

// Custom hook to initialize the audioContext and masterGainNode
const useAudio = ({ initialGain }) => {
  const AudioContext = window.AudioContext;
  const [audioCtx] = useState(new AudioContext());
  const [masterGain] = useState(audioCtx.createGain());

  masterGain.gain.value = initialGain;

  return { audioCtx, masterGain };
};

//Main Function
const Master = () => {
  // Initialization
  const { audioCtx, masterGain } = useAudio({ initialGain: 1 });

  // Initialize masterVolume and create setter
  const [masterVolume, setMasterVolume] = useState(1);

  // Function definition to change MasterVolume on slider event
  const changeMasterVolume = e => {
    const {
      target: { value }
    } = e;
    setMasterVolume(value);
  };

  useEffect(() => {
    masterGain.gain.value = masterVolume;
  }, [masterVolume]);

  // Good ol' JSX
  return (
    <>
      <ButtonContainer>
        <AudioTrack
          audioElement={getAudio('/outfoxing.mp3')}
          audioCtx={audioCtx}
          masterGainNode={masterGain}
        />
      </ButtonContainer>

      <ButtonContainer>
        <AudioTrack
          audioElement={getAudio('/fadedTwo.mp3')}
          audioCtx={audioCtx}
          masterGainNode={masterGain}
        />
      </ButtonContainer>

      <input
        type="range"
        id="volume"
        className="control-volume"
        min="0"
        max="2"
        value={masterVolume}
        onChange={changeMasterVolume}
        list="gainVals"
        step="0.01"
      />
      <datalist id="gainVals">
        <option value="1" label="unity" />
      </datalist>
    </>
  );
};

export default Master;
