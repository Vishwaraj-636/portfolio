import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { links } from '../data/portfolio';

const TECH_CHIPS = ['React', 'Node.js', 'Python', 'C++', 'Machine Learning'];

const CODE_LINES = [
  { indent: 0, content: 'const vishwaraj = {', color: '#fff' },
  { indent: 1, content: 'role: "Full-Stack Developer",', color: 'rgba(235,235,245,0.75)' },
  { indent: 1, content: 'stack: ["React", "Node.js", "Python"],', color: 'rgba(235,235,245,0.75)' },
  { indent: 1, content: 'focus: "backend systems + applied AI",', color: 'rgba(235,235,245,0.75)' },
  { indent: 1, content: 'university: "VIT Chennai",', color: 'rgba(235,235,245,0.75)' },
  { indent: 1, content: 'cgpa: 8.70,', color: '#30D158' },
  { indent: 1, content: 'available: true ✓', color: '#30D158' },
  { indent: 0, content: '};', color: '#fff' },
];

export default function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const fullTitle = 'Building ideas into\nworking software.';
  const titleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i <= fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, i));
        i++;
        titleRef.current = setTimeout(type, 38);
      }
    };
    const start = setTimeout(type, 600);
    return () => {
      clearTimeout(start);
      if (titleRef.current) clearTimeout(titleRef.current);
    };
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(blink);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const lines = displayedTitle.split('\n');

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '48px',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left: Text Content */}
          <div>
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}
            >
              <span className="pill pill-green" style={{ gap: '8px' }}>
                <span
                  style={{
                    width: '7px', height: '7px',
                    borderRadius: '50%',
                    background: 'var(--color-green)',
                    display: 'inline-block',
                    animation: 'pulse-dot 2s ease-in-out infinite',
                  }}
                />
                Available for opportunities
              </span>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '12px', color: 'var(--color-text-tertiary)',
              }}>
                <MapPin size={11} />
                Chennai, India
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '20px',
                fontWeight: 500,
              }}
            >
              SOFTWARE ENGINEER · FULL-STACK · APPLIED AI
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                fontSize: 'clamp(42px, 6vw, 76px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                marginBottom: '24px',
                color: '#fff',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {lines.map((line, lineIdx) => (
                <span key={lineIdx} style={{ display: 'block' }}>
                  {lineIdx === lines.length - 1 && line.includes('working') ? (
                    <>
                      {line.split('working')[0]}
                      <span style={{
                        background: 'linear-gradient(135deg, #0A84FF 0%, #5E5CE6 60%, #BF5AF2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>
                        working
                      </span>
                      {line.split('working')[1]}
                    </>
                  ) : line}
                </span>
              ))}
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: 'clamp(40px, 5.5vw, 70px)',
                  background: 'var(--color-accent)',
                  marginLeft: '3px',
                  borderRadius: '2px',
                  verticalAlign: 'text-bottom',
                  opacity: cursorVisible ? 1 : 0,
                  transition: 'opacity 0.1s',
                }}
              />
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
                maxWidth: '540px',
                marginBottom: '36px',
              }}
            >
              I'm a Computer Science undergraduate at VIT Chennai focused on full-stack development,
              backend systems, and applied machine learning. I enjoy turning complex technical ideas
              into reliable, useful products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}
            >
              <button
                className="btn btn-primary"
                onClick={scrollToProjects}
                id="hero-explore-btn"
                style={{ fontSize: '15px', padding: '12px 24px' }}
              >
                Explore Projects
                <ArrowRight size={16} />
              </button>
              <a
                href={links.resume}
                download
                className="btn btn-ghost"
                id="hero-resume-btn"
                style={{ fontSize: '15px', padding: '12px 24px' }}
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Tech Chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                Core Technologies
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {TECH_CHIPS.map(tech => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="hero-code-window"
            style={{ width: '340px', flexShrink: 0 }}
          >
            <div className="mac-window">
              <div className="mac-titlebar">
                <div className="mac-dot mac-dot-red" />
                <div className="mac-dot mac-dot-yellow" />
                <div className="mac-dot mac-dot-green" />
                <span className="mac-title">profile.ts</span>
              </div>
              <div style={{ padding: '20px 20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.7 }}>
                {CODE_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + i * 0.08 }}
                    style={{
                      paddingLeft: `${line.indent * 16}px`,
                      color: line.color,
                    }}
                  >
                    {line.content}
                  </motion.div>
                ))}
              </div>
              {/* Status Bar */}
              <div style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                padding: '8px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  fontSize: '11px', color: 'var(--color-green)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: 'var(--color-green)',
                    animation: 'pulse-dot 2s ease-in-out infinite',
                  }} />
                  TypeScript
                </span>
                <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  CGPA: 8.70
                </span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  VIT Chennai
                </span>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              style={{ display: 'flex', gap: '8px', marginTop: '12px', justifyContent: 'center' }}
            >
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                style={{ flex: 1, justifyContent: 'center', fontSize: '13px', gap: '6px', padding: '10px' }}
                aria-label="GitHub"
              >
                <Github size={15} />
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>GitHub</span>
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                style={{ flex: 1, justifyContent: 'center', fontSize: '13px', gap: '6px', padding: '10px' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '32px',
            background: 'linear-gradient(to bottom, rgba(10,132,255,0.6), transparent)',
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-code-window {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
