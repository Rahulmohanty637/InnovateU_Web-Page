import { Footer, Navbar, Navigation } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-black">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div/>
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div/>
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
