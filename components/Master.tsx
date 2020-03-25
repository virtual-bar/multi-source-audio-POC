import React from 'react';
import AudioTrack from './AudioTrack';
import styled from 'styled-components';
import { flexCentered } from '../components/styles';

const ButtonContainer = styled.div`
  ${flexCentered}
  flex-direction: column;
  margin: 10px 0;
`;

const getAudio = source => {
  if (typeof window !== 'undefined') {
    const audio = new Audio(source);
    return audio;
  }
};

const Master = () => {
  return (
    <>
      <ButtonContainer>
        <AudioTrack audioElement={getAudio('/outfoxing.mp3')} />
      </ButtonContainer>
      <ButtonContainer>
        <AudioTrack audioElement={getAudio('/fadedTwo.mp3')} />
      </ButtonContainer>
    </>
  );
};

export default Master;
