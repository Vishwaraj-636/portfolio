import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { links } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '32px 24px',
      background: 'rgba(9,9,15,0.6)',
      backdropFilter: 'blur(16px)',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        {/* Left: Copyright */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{
              width: '24px', height: '24px', borderRadius: '6px',
              background: 'linear-gradient(135deg, #0A84FF, #5E5CE6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '10px', fontWeight: 700, color: '#fff',
            }}>
              VS
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>
              Vishwaraj Shekhawat
            </span>
          </div>
          <p style={{
            fontSize: '12px', color: 'var(--color-text-tertiary)',
            display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            © {year} · Built with{' '}
            <Heart size={11} style={{ color: '#FF453A', fill: '#FF453A' }} />
            {' '}using React + Vite
          </p>
        </div>

        {/* Right: Social links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${links.email}`}
            className="btn-icon"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
