import { Metadata } from 'next';
import HomeContent from './content';

export const metadata: Metadata = {
  title: 'Map | VATSIM Visualized',
};

const Home = () => <HomeContent />;

export default Home;
