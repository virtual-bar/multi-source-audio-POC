import React from 'react';
import AudioTrack from './AudioTrack';
import styled from 'styled-components';
import { flexCentered } from '../components/styles';

const ButtonContainer = styled.div`
  ${flexCentered}
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
      <h1>Hello!</h1>
      <h2>Hello!</h2>
      <h3>Hello!</h3>
      <h4>Hello!</h4>
      <p>Hello!</p>
      <ButtonContainer>
        <AudioTrack audioElement={getAudio('/outfoxing.mp3')} />
        <AudioTrack audioElement={getAudio('/fadedTwo.mp3')} />
      </ButtonContainer>
    </>
  );
};

export default Master;
