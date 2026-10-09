import { motion } from 'framer-motion';
import { GraduationCap, Code2, Brain, Layers } from 'lucide-react';

const interests = [
  { icon: <Code2 size={18} />, label: 'Full-Stack Development', desc: 'Building end-to-end products from database schema to user interface.' },
  { icon: <Layers size={18} />, label: 'Backend Systems', desc: 'Designing reliable APIs, authentication systems, and data pipelines.' },
  { icon: <Brain size={18} />, label: 'Applied Machine Learning', desc: 'Bringing ML models into practical, deployable products.' },
  { icon: <GraduationCap size={18} />, label: 'CS Fundamentals', desc: 'Interested in systems programming, language design, and algorithms.' },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '96px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'start',
        }} className="about-grid">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow">Who I Am</p>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>About</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'rgba(235,235,245,0.72)' }}>
                I'm Vishwaraj Singh Shekhawat, a Computer Science undergraduate at{' '}
                <span style={{ color: '#fff', fontWeight: 600 }}>Vellore Institute of Technology, Chennai</span>
                {' '}(Class of 2027), with a CGPA of <span style={{ color: '#0A84FF', fontWeight: 600 }}>8.70</span>.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'rgba(235,235,245,0.72)' }}>
                My work spans full-stack web development, backend API engineering, and applied machine learning.
                I'm interested in building software that solves real problems — from e-commerce platforms and
                fraud detection systems to edge AI mobile applications.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'rgba(235,235,245,0.72)' }}>
                I care about reliable, well-designed software: clear architecture, sensible abstractions,
                and code that's maintainable beyond the initial build. I enjoy working across the stack
                and connecting backend decisions to the user experience they enable.
              </p>
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                marginTop: '28px',
                background: 'rgba(10,132,255,0.06)',
                border: '1px solid rgba(10,132,255,0.15)',
                borderRadius: '14px',
                padding: '20px 24px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(10,132,255,0.12)', border: '1px solid rgba(10,132,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontSize: '20px',
              }}>
                🎓
              </div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                  B.Tech in Computer Science and Engineering
                </p>
                <p style={{ fontSize: '14px', color: '#0A84FF', fontWeight: 600, marginBottom: '4px' }}>
                  Vellore Institute of Technology, Chennai
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  2023 – 2027 · CGPA: 8.70
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interest cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <p style={{
              fontSize: '12px', fontFamily: 'var(--font-mono)',
              color: 'var(--color-text-tertiary)', letterSpacing: '0.10em',
              textTransform: 'uppercase', marginBottom: '8px',
            }}>
              Engineering Interests
            </p>
            {interests.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                style={{
                  background: 'rgba(22,22,28,0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                }}
                whileHover={{
                  y: -3,
                  borderColor: 'rgba(10,132,255,0.25)',
                }}
              >
                <div style={{
                  color: '#0A84FF',
                  flexShrink: 0,
                  marginTop: '2px',
                  background: 'rgba(10,132,255,0.10)',
                  border: '1px solid rgba(10,132,255,0.15)',
                  borderRadius: '8px',
                  padding: '6px',
                  display: 'flex',
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
