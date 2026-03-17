'use client';

import { Trophy, Star } from 'lucide-react';

const awards = [
  { Icon: Trophy, title: 'Innovation Award', org: 'Axomium Labs', desc: 'Awarded for developing an AI-powered chatbot that significantly automated customer support workflows, reducing response time and costs.', color: '#fbbf24' },
  { Icon: Star, title: 'Employee of the Month', org: 'Axomium Labs', desc: 'Recognized for outstanding contributions to AI model development and deployment in production, consistently delivering high-impact results.', color: '#f97316' },
];

export default function Awards() {
  return (
    <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>05 — Recognition</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--text)' }}>
            Awards &amp; <span style={{ color: 'var(--accent)' }}>Achievements</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))', gap: '16px' }}>
          {awards.map(({ Icon, title, org, desc, color }) => (
            <div key={title} className="card" style={{ padding: '28px', display: 'flex', gap: '20px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: `${color}12`, border: `1px solid ${color}28` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{title}</h3>
                <div style={{ fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', color, marginBottom: '10px' }}>{org}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
