import Master from '../components/Master';

//const audio = new Audio('/outfoxing.mp3');
const faded = new Audio('/fadedTwo.mp3');

const Home = () => <Master audioElement={faded} />;

export default Home;
