///////////////////////////////////////////////////////////////////////////////
// POC for client-side multi-source audio control using Web-Audio
// API.
//
// Brandon Whittle, Christian Fuller, Kevin Jacobson, Gabe "The Twilio Man"
// Bring Your Own Bar (BYOB)
// 2020
///////////////////////////////////////////////////////////////////////////////

import Group from '../components/Group';
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
      <h1>Multi-source Audio Control POC (One Group)</h1>
      <p>
        A proof of concept using multiple audio sources attached through Web
        Audio API.
      </p>
      {!isServer() && <Group />}
    </Home>
  );
};

export default Index;
