import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function AtmosphericBackground() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere-glow atmosphere-glow-1" />
      <div className="atmosphere-glow atmosphere-glow-2" />
      <div className="atmosphere-glow atmosphere-glow-3" />
      {/* Additional glow for depth */}
      <div className="atmosphere-glow" style={{
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, #0A84FF, transparent 70%)',
        bottom: '40%',
        right: '10%',
        opacity: 0.06,
        animation: 'float2 30s ease-in-out infinite reverse',
      }} />
    </div>
  );
}

function App() {
  return (
    <>
      <AtmosphericBackground />
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <ExperienceTimeline />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
