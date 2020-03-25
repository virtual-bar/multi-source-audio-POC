import React, { useEffect, useState } from 'react';
import Master from '../components/Master';
import styled from 'styled-components';
import { flexCentered } from '../components/styles';

const Home = styled.div`
  ${flexCentered};
  flex-direction: column;
`;

const isServer = () => typeof window === 'undefined';

const Index = () => {
  return (
    <Home>
      <h1>Multisource Audio Control POC</h1>
      <p>
        A proof of concept using multiple audio sources attached through Web
        Audio API.
      </p>
      {!isServer() && <Master />}
    </Home>
  );
};

export default Index;
