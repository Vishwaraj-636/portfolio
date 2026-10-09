import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { experiences } from '../data/portfolio';

const colorMap: Record<string, { accent: string; dim: string; border: string }> = {
  blue: {
    accent: '#0A84FF',
    dim: 'rgba(10,132,255,0.10)',
    border: 'rgba(10,132,255,0.20)',
  },
  amber: {
    accent: '#FF9F0A',
    dim: 'rgba(255,159,10,0.10)',
    border: 'rgba(255,159,10,0.20)',
  },
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" style={{ padding: '96px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-eyebrow">Work History</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Internships applying machine learning and software engineering to real-world problems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '27px',
            top: '0',
            bottom: '0',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(10,132,255,0.4), rgba(255,159,10,0.3), transparent)',
          }} className="timeline-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp, index) => {
              const colors = colorMap[exp.color];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: '32px',
                    alignItems: 'flex-start',
                  }}
                  className="timeline-item"
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: 'relative',
                    flexShrink: 0,
                    width: '56px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '20px',
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: colors.accent,
                      border: `2px solid ${colors.accent}`,
                      boxShadow: `0 0 16px ${colors.dim}`,
                      zIndex: 1,
                      position: 'relative',
                    }} />
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      flex: 1,
                      background: 'rgba(22, 22, 28, 0.85)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '20px',
                      padding: '28px 32px',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${colors.dim}`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    {/* Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '16px',
                      marginBottom: '20px',
                      flexWrap: 'wrap',
                    }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', padding: '3px 10px',
                            borderRadius: '999px', fontSize: '11px', fontWeight: 600,
                            background: colors.dim, color: colors.accent,
                            border: `1px solid ${colors.border}`,
                          }}>
                            {exp.type}
                          </span>
                          <span style={{
                            fontSize: '12px', color: 'var(--color-text-tertiary)',
                            fontFamily: 'var(--font-mono)',
                          }}>
                            {exp.location}
                          </span>
                        </div>
                        <h3 style={{
                          fontSize: '22px', fontWeight: 700, color: '#fff',
                          letterSpacing: '-0.01em', marginBottom: '4px',
                        }}>
                          {exp.role}
                        </h3>
                        <p style={{ fontSize: '16px', color: colors.accent, fontWeight: 600 }}>
                          {exp.company}
                        </p>
                      </div>
                      <div style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '13px',
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}>
                        {exp.dates}
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: 0, listStyle: 'none' }}>
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} style={{
                          display: 'flex', gap: '10px', alignItems: 'flex-start',
                          fontSize: '14px', color: 'rgba(235,235,245,0.68)', lineHeight: 1.65,
                        }}>
                          <span style={{
                            display: 'inline-block',
                            width: '4px', height: '4px',
                            borderRadius: '50%',
                            background: colors.accent,
                            flexShrink: 0,
                            marginTop: '8px',
                          }} />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Related project link */}
                    {exp.relatedProject && (
                      <div style={{
                        marginTop: '20px',
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <a
                          href="#projects"
                          onClick={e => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            fontSize: '13px', color: colors.accent, textDecoration: 'none',
                            fontWeight: 500,
                            transition: 'gap 0.2s ease',
                          }}
                          onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.gap = '10px';
                          }}
                          onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.gap = '6px';
                          }}
                        >
                          View related project
                          <ArrowRight size={13} />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '64px' }}
        >
          <h3 style={{
            fontSize: '20px', fontWeight: 700, color: '#fff',
            marginBottom: '20px', letterSpacing: '-0.01em',
          }}>
            Certifications
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }} className="certs-grid">
            {[
              { title: 'Samsung PRISM Program Certification', issuer: 'Samsung R&D', year: '2026' },
              { title: 'Machine Learning Internship Certification', issuer: 'SmartBridge', year: '2025' },
              { title: 'Getting Started with Artificial Intelligence', issuer: 'IBM SkillsBuild', year: '2025' },
              { title: 'Journey to Cloud: Envisioning Your Solution', issuer: 'IBM SkillsBuild', year: '2025' },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'rgba(22,22,28,0.70)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(10,132,255,0.10)', border: '1px solid rgba(10,132,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', flexShrink: 0,
                }}>
                  🎓
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '3px' }}>
                    {cert.title}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line { display: none !important; }
          .timeline-item { flex-direction: column !important; gap: 0 !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .timeline-item > div:first-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
