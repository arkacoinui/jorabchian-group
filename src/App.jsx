import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/AboutMe.jsx';
import Collaboration from './components/Collaboration.jsx';
import WhyWorkWithMe from './components/WhyWorkWithMe.jsx';
import CollaborationModels from './components/CollaborationModels.jsx';
import Workflow from './components/Workflow.jsx';
import Industries from './components/Industries.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div style={{ background: '#071820', color: '#ffffff', fontFamily: "'DM Sans',sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Collaboration />
        <WhyWorkWithMe />
        <CollaborationModels />
        <Workflow />
        <Industries />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
