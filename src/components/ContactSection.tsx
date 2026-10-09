import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, ArrowUpRight, Code2 } from 'lucide-react';
import { links } from '../data/portfolio';

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'vishwarajsingh636@gmail.com',
    href: `mailto:${links.email}`,
    color: '#0A84FF',
    dim: 'rgba(10,132,255,0.10)',
    border: 'rgba(10,132,255,0.20)',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/Vishwaraj-636',
    href: links.github,
    color: '#fff',
    dim: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.10)',
    external: true,
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'vishwarajsinghshekhawat',
    href: links.linkedin,
    color: '#0A84FF',
    dim: 'rgba(10,132,255,0.10)',
    border: 'rgba(10,132,255,0.20)',
    external: true,
  },
  {
    icon: <Code2 size={20} />,
    label: 'LeetCode',
    value: 'vishwarajsingh636',
    href: links.leetcode,
    color: '#FF9F0A',
    dim: 'rgba(255,159,10,0.10)',
    border: 'rgba(255,159,10,0.20)',
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '96px 24px 64px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <p className="section-eyebrow" style={{ justifyContent: 'center' }}>
            Get in Touch
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 800,
            letterSpacing: '-0.03em', lineHeight: 1.1, color: '#fff', marginBottom: '20px',
          }}>
            Have something{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              interesting
            </span>{' '}
            to build?
          </h2>
          <p style={{
            fontSize: '17px', color: 'var(--color-text-secondary)',
            lineHeight: 1.7, maxWidth: '520px', margin: '0 auto',
          }}>
            I'm always interested in meaningful engineering challenges, collaborative projects,
            and opportunities to build useful software.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          marginBottom: '36px',
          textAlign: 'left',
        }} className="contact-grid">
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px 20px',
                background: 'rgba(22,22,28,0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${item.border}`,
                borderRadius: '14px',
                textDecoration: 'none',
                transition: 'box-shadow 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${item.dim}, 0 8px 32px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '42px', height: '42px', borderRadius: '11px',
                background: item.dim, border: `1px solid ${item.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: item.color, flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', marginBottom: '3px', fontFamily: 'var(--font-mono)' }}>
                  {item.label}
                </p>
                <p style={{
                  fontSize: '14px', fontWeight: 600, color: '#fff',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {item.value}
                </p>
              </div>
              {item.external && (
                <ArrowUpRight size={14} style={{ color: 'var(--color-text-tertiary)', flexShrink: 0 }} />
              )}
            </motion.a>
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={links.resume}
            download
            className="btn btn-primary"
            style={{ fontSize: '15px', padding: '14px 28px', display: 'inline-flex' }}
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
