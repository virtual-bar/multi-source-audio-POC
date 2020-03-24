import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexCentered, Button } from './styles';

const ButtonContainer = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: vertical;
  ${flexCentered};
`;

const Master = ({ audioElement }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlaying = () => {
    setPlaying(!playing);
    audioElement.paused ? audioElement.play() : audioElement.pause();
  };

  return (
    <>
      <ButtonContainer>
        <Button
          data-playing={playing}
          className="control-play"
          role="switch"
          onClick={togglePlaying}
        >
          {playing ? 'Playing' : 'Paused'}
        </Button>
      </ButtonContainer>
    </>
  );
};
export default Master;
