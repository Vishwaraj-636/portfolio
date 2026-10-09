import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const categoryIcons: Record<string, string> = {
  'Frontend': '⚛️',
  'Backend & APIs': '🔧',
  'Databases & Infra': '🗄️',
  'AI & Machine Learning': '🤖',
  'Programming Languages': '💻',
};

const categoryColors: Record<string, { accent: string; dim: string; border: string }> = {
  'Frontend': { accent: '#0A84FF', dim: 'rgba(10,132,255,0.08)', border: 'rgba(10,132,255,0.15)' },
  'Backend & APIs': { accent: '#32D74B', dim: 'rgba(50,215,75,0.08)', border: 'rgba(50,215,75,0.15)' },
  'Databases & Infra': { accent: '#FF9F0A', dim: 'rgba(255,159,10,0.08)', border: 'rgba(255,159,10,0.15)' },
  'AI & Machine Learning': { accent: '#BF5AF2', dim: 'rgba(191,90,242,0.08)', border: 'rgba(191,90,242,0.15)' },
  'Programming Languages': { accent: '#FF6B6B', dim: 'rgba(255,107,107,0.08)', border: 'rgba(255,107,107,0.15)' },
};

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: '96px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with regularly across full-stack development,
            backend systems, and applied machine learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }} className="skills-grid">
          {Object.entries(skills).map(([category, items], catIndex) => {
            const colors = categoryColors[category] || categoryColors['Frontend'];
            const icon = categoryIcons[category] || '📦';

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                style={{
                  background: 'rgba(22,22,28,0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: `0 16px 40px rgba(0,0,0,0.4), 0 0 24px ${colors.dim}`,
                }}
              >
                {/* Category Header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  marginBottom: '16px',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: colors.dim,
                    border: `1px solid ${colors.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <h3 style={{
                    fontSize: '14px', fontWeight: 700, color: colors.accent,
                    letterSpacing: '-0.01em',
                  }}>
                    {category}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {items.map(skill => (
                    <span
                      key={skill}
                      style={{
                        display: 'inline-flex',
                        padding: '5px 11px',
                        borderRadius: '7px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontSize: '12.5px',
                        fontWeight: 500,
                        color: 'rgba(235,235,245,0.75)',
                        fontFamily: 'var(--font-mono)',
                        transition: 'all 0.2s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = colors.dim;
                        el.style.borderColor = colors.border;
                        el.style.color = colors.accent;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = 'rgba(255,255,255,0.05)';
                        el.style.borderColor = 'rgba(255,255,255,0.08)';
                        el.style.color = 'rgba(235,235,245,0.75)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note about skill bars */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '32px',
            textAlign: 'center',
            fontSize: '13px',
            color: 'var(--color-text-tertiary)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          // Skills listed reflect hands-on project and internship experience
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
