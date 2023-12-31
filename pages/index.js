import { Footer, Navbar, Particle } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <Explore />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
