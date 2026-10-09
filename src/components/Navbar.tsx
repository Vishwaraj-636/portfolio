import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X, FileText, ExternalLink } from 'lucide-react';
import { links } from '../data/portfolio';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          width: '100%',
          maxWidth: '1000px',
          padding: '0 16px',
        }}
      >
        <div
          style={{
            background: scrolled
              ? 'rgba(15, 15, 20, 0.88)'
              : 'rgba(28, 28, 30, 0.70)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            borderRadius: '16px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background 0.3s ease, box-shadow 0.3s ease',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)'
              : '0 4px 16px rgba(0,0,0,0.3)',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
              marginRight: '8px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0A84FF, #5E5CE6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '13px',
                color: '#fff',
                fontFamily: 'var(--font-sans)',
                flexShrink: 0,
                boxShadow: '0 0 12px rgba(10, 132, 255, 0.35)',
              }}
            >
              VS
            </div>
            <span
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Vishwaraj Shekhawat
            </span>
          </a>

          {/* Nav Links (desktop) */}
          <div
            className="nav-links-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {navItems.map(item => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 500,
                    color: isActive ? '#fff' : 'rgba(235, 235, 245, 0.55)',
                    textDecoration: 'none',
                    background: isActive ? 'rgba(10, 132, 255, 0.15)' : 'transparent',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(235, 235, 245, 0.85)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(235, 235, 245, 0.55)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: '#0A84FF',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexShrink: 0,
              marginLeft: '8px',
            }}
          >
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon nav-icon"
              title="GitHub"
              aria-label="GitHub profile"
            >
              <Github size={15} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon nav-icon"
              title="LinkedIn"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={links.resume}
              download
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: '#0A84FF',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 0 16px rgba(10, 132, 255, 0.35)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#1a90ff';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(10, 132, 255, 0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#0A84FF';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(10, 132, 255, 0.35)';
              }}
            >
              <FileText size={13} />
              Resume
            </a>

            {/* Mobile menu toggle */}
            <button
              className="btn-icon mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '76px',
              left: '16px',
              right: '16px',
              zIndex: 99,
              background: 'rgba(20, 20, 25, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '16px',
              padding: '12px',
              boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: activeSection === item.href.replace('#', '')
                    ? '#0A84FF'
                    : 'rgba(235, 235, 245, 0.75)',
                  textDecoration: 'none',
                  background: activeSection === item.href.replace('#', '')
                    ? 'rgba(10, 132, 255, 0.10)'
                    : 'transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </motion.a>
            ))}
            <div style={{
              display: 'flex',
              gap: '8px',
              padding: '8px 16px 4px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              marginTop: '8px',
            }}>
              <a href={links.github} target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(235,235,245,0.6)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', textDecoration: 'none' }}>
                <Github size={14} /> GitHub
              </a>
              <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(235,235,245,0.6)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', textDecoration: 'none' }}>
                <Linkedin size={14} /> LinkedIn
              </a>
              <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
              <a href={links.resume} download
                style={{ color: '#0A84FF', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', textDecoration: 'none' }}>
                <ExternalLink size={14} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .nav-icon { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
