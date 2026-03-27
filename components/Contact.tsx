'use client';

import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';

const contactItems = [
  { Icon: Mail,   label: 'Email',    value: 'sachin6624@gmail.com',  href: 'mailto:sachin6624@gmail.com',                   external: false, color: '#f97316' },
  { Icon: Phone,  label: 'Phone',    value: '+91 81388 57524',       href: 'tel:+918138857524',                             external: false, color: '#fbbf24' },
  { Icon: MapPin, label: 'Location', value: 'Cochin, Kerala, India', href: 'https://maps.google.com/?q=Cochin,Kerala,India', external: true,  color: '#fb923c' },
];

const socials = [
  { Icon: Linkedin,     label: 'LinkedIn',    href: 'https://www.linkedin.com/in/sachin-murali-12a625165/', color: '#f97316' },
  { Icon: Github,       label: 'GitHub',      href: 'https://github.com/Linux-Server',                      color: '#fb923c' },
  { Icon: ExternalLink, label: 'HuggingFace', href: 'https://huggingface.co/sachin6624',                    color: '#fbbf24' },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg-alt)', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '56px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>06 — Contact</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text)' }}>
            Get In <span style={{ color: 'var(--accent)' }}>Touch</span>
          </h2>
          <p style={{ marginTop: '16px', color: 'var(--text-secondary)', maxWidth: '520px', fontSize: '1rem' }}>
            Open to exciting AI engineering roles. Whether you have a project in mind or just want to connect, feel free to reach out.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))', gap: '24px' }}>
          {/* Left: contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {contactItems.map(({ Icon, label, value, href, external, color }) => (
              <a key={label} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="card" style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: `${color}12`, border: `1px solid ${color}25` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)', marginBottom: '2px' }}>{label}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text)' }}>{value}</div>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--text-muted)', opacity: 0.4 }} />
              </a>
            ))}

            {/* Socials row */}
            <div style={{ display: 'flex', gap: '10px', paddingTop: '4px' }}>
              {socials.map(({ Icon, label, href, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="card" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', fontSize: '0.8rem', fontFamily: 'DM Mono, monospace', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  <Icon size={14} style={{ color }} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: career goal */}
          <div className="card" style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at bottom right, rgba(249,115,22,0.06), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <div className="section-label" style={{ marginBottom: '20px' }}>Career Goal</div>
              <blockquote style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.75, fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: '20px', margin: 0 }}>
                &ldquo;AI Engineer skilled in LLM fine-tuning and RAG, aiming to build intelligent, scalable
                solutions that automate workflows and enhance decision-making in innovative,
                data-driven environments.&rdquo;
              </blockquote>
              <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--card)', border: '2px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--accent)', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', fontWeight: 700 }}>SM</span>
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>Sachin Murali</div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)' }}>AI Engineer · Cochin, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
