import React, { useState, useEffect } from 'react';
import AudioTrack from './AudioTrack';
import styled from 'styled-components';
import { flexCentered } from './styles';

// Stylized buttons!
const ButtonContainer = styled.div`
  ${flexCentered}
  flex-direction: column;
  margin: 10px 0;
`;

const Notes = styled.p`
  width: 50%;
  text-align: center;
`;

// Get an audio source
const getAudio = source => {
  if (typeof window !== 'undefined') {
    const audio = new Audio(source);
    return audio;
  }
};

// Custom hook to initialize the audioContext and groupGainNode
const useAudio = ({ initialGain }) => {
  const AudioContext = window.AudioContext;
  const [audioCtx] = useState(new AudioContext());
  const [groupGain] = useState(audioCtx.createGain());

  groupGain.gain.setValueAtTime(initialGain, audioCtx.currentTime);

  return { audioCtx, groupGain };
};

//Main Function
const Group = () => {
  // Initialize masterVolume and create setter
  const [groupVolume, setGroupVolume] = useState(1); //! Hardset initial groupGain here

  // Initialization of audio states
  const { audioCtx, groupGain } = useAudio({ initialGain: 1 });

  //? Not used in current functionality
  // Function definition to change MasterVolume on slider event
  const changeGroupVolume = e => {
    const {
      target: { value }
    } = e;
    setGroupVolume(value);
  };

  //? Not used in current functionality
  // Function to set groupGain on slider change if we want that functionality
  useEffect(() => {
    groupGain.gain.setValueAtTime(groupVolume, audioCtx.currentTime);
  }, [groupVolume]);

  // Kill audioCtx before unloading
  window.addEventListener('beforeunload', () => {
    audioCtx.close();
  });

  // Good ol' JSX
  return (
    <>
      <ButtonContainer>
        <AudioTrack
          audioElement={getAudio('/outfoxing.mp3')}
          audioCtx={audioCtx}
          groupGainNode={groupGain}
        />
      </ButtonContainer>

      <ButtonContainer>
        <AudioTrack
          audioElement={getAudio('/fadedTwo.mp3')}
          audioCtx={audioCtx}
          groupGainNode={groupGain}
        />
      </ButtonContainer>

      <h4>Group Gain</h4>
      <p>Changeable in Group.tsx</p>
      <input
        type="range"
        id="volume"
        className="control-volume"
        min="0"
        max="2"
        value={groupVolume}
        list="gainVals"
        step="0.01"
      />
      <datalist id="gainVals">
        <option value="1" label="unity" />
      </datalist>

      <h4>Notes</h4>
      <Notes>
        This example does not include mapping an array of sources, but each
        track is already in its own component. Moving forward, in this system,
        the sources will need to come from one component level higher and be
        sent to the group, and then into their components.
      </Notes>
    </>
  );
};

export default Group;
