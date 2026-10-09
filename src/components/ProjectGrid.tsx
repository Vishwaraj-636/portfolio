import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, X, ChevronLeft } from 'lucide-react';
import { projects, Project } from '../data/portfolio';

function CategoryBadge({ color, label }: { color: Project['categoryColor']; label: string }) {
  const styles: Record<string, { bg: string; color: string; border: string }> = {
    blue: { bg: 'rgba(10,132,255,0.12)', color: '#0A84FF', border: 'rgba(10,132,255,0.25)' },
    emerald: { bg: 'rgba(50,215,75,0.12)', color: '#32D74B', border: 'rgba(50,215,75,0.25)' },
    purple: { bg: 'rgba(191,90,242,0.12)', color: '#BF5AF2', border: 'rgba(191,90,242,0.25)' },
    amber: { bg: 'rgba(255,159,10,0.12)', color: '#FF9F0A', border: 'rgba(255,159,10,0.25)' },
  };
  const s = styles[color];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '3px 10px',
      borderRadius: '999px', fontSize: '11px', fontWeight: 600,
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
      letterSpacing: '0.03em',
    }}>
      {label}
    </span>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const visuals: Record<string, JSX.Element> = {
    wearth: (
      <div style={{ background: '#0D0D12', padding: '20px', borderRadius: '12px', minHeight: '200px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          {['#FF5F57', '#FFBD2E', '#28C840'].map((c, i) => (
            <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>
            wearth.vercel.app
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px' }}>
          {['Wireless Earbuds', 'Smart Watch', 'Laptop Pro'].map((name, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '8px', padding: '10px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>
                {['🎧', '⌚', '💻'][i]}
              </div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>{name}</div>
              <div style={{ fontSize: '11px', color: '#0A84FF', fontWeight: 600 }}>
                ${['129', '249', '899'][i]}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          background: 'rgba(10,132,255,0.12)', border: '1px solid rgba(10,132,255,0.2)',
          borderRadius: '8px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>🛒 Cart (3 items)</span>
          <span style={{ fontSize: '12px', color: '#0A84FF', fontWeight: 700 }}>₹21,499</span>
        </div>
      </div>
    ),
    'plant-disease': (
      <div style={{ background: '#081208', padding: '20px', borderRadius: '12px', minHeight: '200px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 40%, rgba(50,215,75,0.08), transparent 70%)',
        }} />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
          <div style={{
            width: '120px', height: '120px', borderRadius: '12px',
            border: '2px solid rgba(50,215,75,0.4)',
            background: 'rgba(50,215,75,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            <span style={{ fontSize: '48px' }}>🌿</span>
            <div style={{
              position: 'absolute', top: '6px', left: '6px', right: '6px', bottom: '6px',
              border: '1px dashed rgba(50,215,75,0.4)', borderRadius: '8px',
            }} />
            <div style={{
              position: 'absolute', top: '0', left: '0',
              background: 'rgba(50,215,75,0.15)', color: '#32D74B',
              fontSize: '9px', padding: '2px 6px', borderRadius: '4px 0 4px 0', fontWeight: 600,
            }}>
              SCANNING
            </div>
          </div>
        </div>
        <div style={{
          background: 'rgba(50,215,75,0.08)', border: '1px solid rgba(50,215,75,0.2)',
          borderRadius: '8px', padding: '8px 12px', marginBottom: '8px',
        }}>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '2px' }}>PREDICTION</div>
          <div style={{ fontSize: '13px', color: '#32D74B', fontWeight: 600 }}>✓ Healthy Leaf</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
            99.2% confidence · 47 classes
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '6px', padding: '6px 8px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>4.6 MB</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>Model size</div>
          </div>
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '6px', padding: '6px 8px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#32D74B' }}>Offline</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>On-device</div>
          </div>
        </div>
      </div>
    ),
    nova: (
      <div style={{ background: '#0A070F', padding: '0', borderRadius: '12px', overflow: 'hidden', minHeight: '200px' }}>
        <div style={{
          background: 'rgba(191,90,242,0.08)', padding: '8px 12px',
          borderBottom: '1px solid rgba(191,90,242,0.15)', display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{ fontSize: '10px', color: 'rgba(191,90,242,0.8)', fontFamily: 'var(--font-mono)' }}>nova-repl — bash</span>
        </div>
        <div style={{ padding: '16px', fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 1.8 }}>
          {[
            { content: '// Nova Language Interpreter', color: 'rgba(255,255,255,0.25)' },
            { content: 'var x = 10;', color: '#BF5AF2' },
            { content: 'var msg = "Hello, Nova!";', color: '#FF9F0A' },
            { content: 'if (x > 5) {', color: '#0A84FF' },
            { content: '  print(msg);', color: 'rgba(255,255,255,0.7)', indent: true },
            { content: '}', color: '#0A84FF' },
            { content: '> Hello, Nova!', color: '#32D74B' },
            { content: '> x = 10 ✓', color: '#32D74B' },
          ].map((line, i) => (
            <div key={i} style={{
              paddingLeft: line.indent ? '12px' : '0',
              color: line.color,
            }}>
              {line.content}
            </div>
          ))}
        </div>
      </div>
    ),
    'fraud-detection': (
      <div style={{ background: '#0C0900', padding: '20px', borderRadius: '12px', minHeight: '200px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px' }}>
          {[
            { label: 'Analyzed', value: '6.36M+', color: '#fff' },
            { label: 'Accuracy', value: '99.97%', color: '#32D74B' },
            { label: 'F1-Score', value: '88%', color: '#FF9F0A' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '8px', padding: '10px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '16px', fontWeight: 700, color: stat.color, marginBottom: '2px' }}>{stat.value}</div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            { label: 'Transaction #8829', status: 'SAFE', pct: 95 },
            { label: 'Transaction #2213', status: 'FRAUD', pct: 12 },
            { label: 'Transaction #5571', status: 'SAFE', pct: 88 },
          ].map((tx, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '6px', padding: '7px 10px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', flex: 1 }}>
                {tx.label}
              </span>
              <div style={{
                width: '50px', height: '4px', borderRadius: '2px',
                background: 'rgba(255,255,255,0.08)', overflow: 'hidden',
              }}>
                <div style={{
                  width: `${tx.pct}%`, height: '100%',
                  background: tx.status === 'SAFE' ? '#32D74B' : '#FF453A',
                  borderRadius: '2px',
                }} />
              </div>
              <span style={{
                fontSize: '10px', fontWeight: 600, padding: '2px 6px', borderRadius: '4px',
                background: tx.status === 'SAFE' ? 'rgba(50,215,75,0.12)' : 'rgba(255,69,58,0.12)',
                color: tx.status === 'SAFE' ? '#32D74B' : '#FF453A',
              }}>
                {tx.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return visuals[project.id] || null;
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const hoverBorderColor: Record<string, string> = {
    blue: 'rgba(10,132,255,0.4)',
    emerald: 'rgba(50,215,75,0.35)',
    purple: 'rgba(191,90,242,0.35)',
    amber: 'rgba(255,159,10,0.35)',
  };

  const hoverGlow: Record<string, string> = {
    blue: '0 0 32px rgba(10,132,255,0.15)',
    emerald: '0 0 32px rgba(50,215,75,0.12)',
    purple: '0 0 32px rgba(191,90,242,0.12)',
    amber: '0 0 32px rgba(255,159,10,0.12)',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      style={{
        background: 'rgba(22, 22, 28, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = hoverBorderColor[project.categoryColor];
        (e.currentTarget as HTMLElement).style.boxShadow = `${hoverGlow[project.categoryColor]}, 0 16px 48px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Visual */}
      <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
        <ProjectVisual project={project} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div>
            <CategoryBadge color={project.categoryColor} label={project.category} />
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: '20px', fontWeight: 700, color: '#fff',
            letterSpacing: '-0.01em', marginBottom: '4px',
          }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '13px', color: 'rgba(10,132,255,0.9)', fontWeight: 500 }}>
            {project.subtitle}
          </p>
        </div>

        <p style={{
          fontSize: '14px', color: 'rgba(235,235,245,0.60)', lineHeight: 1.65,
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tech.slice(0, 5).map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', paddingTop: '4px' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              onClick={e => e.stopPropagation()}
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={15} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              onClick={e => e.stopPropagation()}
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={15} />
            </a>
          )}
          <button
            style={{
              marginLeft: 'auto',
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '7px 14px', borderRadius: '8px',
              background: 'rgba(10,132,255,0.12)',
              border: '1px solid rgba(10,132,255,0.2)',
              color: '#0A84FF', fontSize: '13px', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(10,132,255,0.22)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(10,132,255,0.12)';
            }}
            onClick={onClick}
          >
            Details
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(5,5,10,0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        overflowY: 'auto',
        padding: '24px 16px',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        style={{
          maxWidth: '800px',
          margin: '60px auto',
          background: 'rgba(20, 20, 26, 0.97)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
        }}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} project details`}
      >
        {/* Header */}
        <div style={{
          padding: '28px 32px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px',
        }}>
          <div>
            <div style={{ marginBottom: '10px' }}>
              <CategoryBadge color={project.categoryColor} label={project.category} />
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '6px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(10,132,255,0.85)', fontWeight: 500 }}>
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="btn-icon"
            aria-label="Close project details"
            style={{ flexShrink: 0, marginTop: '4px' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Visual */}
        <div style={{ padding: '24px 32px 0', background: 'rgba(0,0,0,0.2)' }}>
          <ProjectVisual project={project} />
        </div>

        {/* Content */}
        <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Overview */}
          <section>
            <h3 style={{
              fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(10,132,255,0.8)', marginBottom: '10px',
            }}>Overview</h3>
            <p style={{ fontSize: '15px', color: 'rgba(235,235,245,0.75)', lineHeight: 1.7 }}>
              {project.longDescription}
            </p>
          </section>

          {/* Problem & Solution */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="detail-grid">
            <section style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px', padding: '16px',
            }}>
              <h3 style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,159,10,0.8)', marginBottom: '8px' }}>
                Problem
              </h3>
              <p style={{ fontSize: '13.5px', color: 'rgba(235,235,245,0.65)', lineHeight: 1.65 }}>
                {project.problem}
              </p>
            </section>
            <section style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px', padding: '16px',
            }}>
              <h3 style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(50,215,75,0.8)', marginBottom: '8px' }}>
                Solution
              </h3>
              <p style={{ fontSize: '13.5px', color: 'rgba(235,235,245,0.65)', lineHeight: 1.65 }}>
                {project.solution}
              </p>
            </section>
          </div>

          {/* My Contribution */}
          <section>
            <h3 style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(191,90,242,0.8)', marginBottom: '10px' }}>
              My Contribution
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(235,235,245,0.70)', lineHeight: 1.7 }}>
              {project.contribution}
            </p>
          </section>

          {/* Outcomes */}
          <section style={{
            background: 'rgba(10,132,255,0.06)', border: '1px solid rgba(10,132,255,0.15)',
            borderRadius: '12px', padding: '16px',
          }}>
            <h3 style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(10,132,255,0.85)', marginBottom: '10px' }}>
              Outcomes & Results
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(235,235,245,0.75)', lineHeight: 1.7 }}>
              {project.outcomes}
            </p>
          </section>

          {/* Tech Stack */}
          <section>
            <h3 style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(235,235,245,0.45)', marginBottom: '10px' }}>
              Technology Stack
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map(t => (
                <span key={t} className="tech-tag" style={{ fontSize: '13px', padding: '5px 12px' }}>{t}</span>
              ))}
            </div>
          </section>

          {/* Links */}
          <div style={{ display: 'flex', gap: '10px', paddingTop: '4px' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ fontSize: '14px' }}
              >
                <Github size={15} />
                View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '14px' }}
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Back button */}
        <div style={{
          padding: '16px 32px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(0,0,0,0.15)',
        }}>
          <button
            onClick={onClose}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '13px', color: 'rgba(235,235,245,0.5)',
              background: 'none', border: 'none', cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(235,235,245,0.85)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(235,235,245,0.5)'}
          >
            <ChevronLeft size={14} />
            Back to projects
          </button>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  );
}

export default function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  // Prevent body scroll when modal is open
  if (typeof document !== 'undefined') {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  return (
    <section id="projects" style={{ padding: '96px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated selection of full-stack platforms, machine learning systems, and
            low-level engineering projects built with care and precision.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }} className="projects-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectDetail project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
