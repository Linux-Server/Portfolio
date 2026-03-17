'use client';

import { Briefcase, MapPin, Calendar } from 'lucide-react';

const jobs = [
  {
    title: 'AI Engineer',
    company: 'Axomium Labs',
    location: 'Cochin',
    period: 'Jan 2023 — Present',
    current: true,
    color: '#f97316',
    points: [
      'Developed ML models to optimise process automation and decision-making',
      'Fine-tuned LLMs and domain-specific AI models for chatbots & assistants',
      'Engineered AI-driven APIs for scalable production deployments',
      'Established model monitoring and performance evaluation strategies',
      'Led cross-functional teams to deliver end-to-end AI solutions',
    ],
    tags: ['LLM Fine-tuning', 'RAG', 'PyTorch', 'vLLM', 'AWS SageMaker'],
  },
  {
    title: 'AI Engineer',
    company: 'First Wave',
    location: 'Singapore · Remote',
    period: 'Jan 2022 — Jan 2023',
    current: false,
    color: '#fb923c',
    points: [
      'Built software solutions enhancing system functionality & user satisfaction',
      'Collaborated across technical teams on innovative AI applications',
      'Maintained high code quality through rigorous code reviews',
    ],
    tags: ['Machine Learning', 'Python', 'Deep Learning', 'APIs'],
  },
  {
    title: 'Web3 Full Stack Developer',
    company: 'Sovereign Wallet Network',
    location: 'Singapore · Remote',
    period: 'Jul 2020 — Jan 2022',
    current: false,
    color: '#fbbf24',
    points: [
      'Led a team of engineers designing innovative software solutions',
      'Researched latest AI and Web3 trends for advanced capabilities',
    ],
    tags: ['Web3', 'Blockchain', 'Full Stack', 'Team Lead'],
  },
  {
    title: 'Web3 Developer Intern',
    company: 'CYBROSYS Technologies',
    location: 'India',
    period: 'Mar 2018 — Apr 2020',
    current: false,
    color: '#ff6b35',
    points: [
      'Developed software improving operational efficiency',
      'Facilitated stakeholder meetings and promoted best practices',
    ],
    tags: ['Python', 'Web Dev', 'Software Engineering'],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-alt)', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '56px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>02 — Experience</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text)' }}>
            Where I&apos;ve <span style={{ color: 'var(--accent)' }}>Worked</span>
          </h2>
        </div>

        <div style={{ maxWidth: '700px' }}>
          {jobs.map((job, i) => (
            <div key={job.company} style={{ display: 'flex', gap: '24px', paddingBottom: i < jobs.length - 1 ? '40px' : '0', position: 'relative' }}>

              {/* Timeline column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20px', flexShrink: 0 }}>
                {/* Dot */}
                <div style={{
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: job.color,
                  boxShadow: `0 0 12px ${job.color}60`,
                  border: '3px solid var(--bg-alt)',
                  flexShrink: 0,
                  marginTop: '6px',
                }} />
                {/* Line */}
                {i < jobs.length - 1 && (
                  <div style={{ width: '2px', flex: 1, background: `linear-gradient(to bottom, ${job.color}40, var(--card-border))`, marginTop: '8px' }} />
                )}
              </div>

              {/* Card */}
              <div className="card" style={{ flex: 1, padding: '24px 28px' }}>
                {/* Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)' }}>{job.title}</h3>
                      {job.current && (
                        <span style={{ padding: '2px 10px', borderRadius: '999px', fontSize: '0.7rem', fontFamily: 'DM Mono, monospace', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)', color: 'var(--green)' }}>
                          current
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: job.color }}>
                        <Briefcase size={13} />{job.company}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MapPin size={13} />{job.location}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap' }}>
                    <Calendar size={12} />{job.period}
                  </span>
                </div>

                {/* Points */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                  {job.points.map((pt, pi) => (
                    <li key={pi} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: job.color, marginTop: '6px', flexShrink: 0, fontSize: '0.6rem' }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {job.tags.map(tag => (
                    <span key={tag} style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontFamily: 'DM Mono, monospace', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div style={{ display: 'flex', gap: '24px', marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20px', flexShrink: 0 }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--text-muted)', border: '3px solid var(--bg-alt)', flexShrink: 0, marginTop: '6px' }} />
            </div>
            <div className="card" style={{ flex: 1, padding: '24px 28px' }}>
              <div className="section-label" style={{ marginBottom: '10px' }}>Education</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>B.E. Electronics &amp; Communication</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Anna University, Chennai, TN · 2016</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
