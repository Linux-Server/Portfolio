'use client';

import { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react';

const NeuralNetwork3D = lazy(() => import('./NeuralNetwork3D'));

const TITLES = ['AI Engineer', 'LLM Specialist', 'MLOps Architect', 'RAG Engineer'];

function TypeWriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);
  useEffect(() => {
    const target = TITLES[idx];
    if (!del && text === target) { const t = setTimeout(() => setDel(true), 2200); return () => clearTimeout(t); }
    if (del && text === '') { setDel(false); setIdx(i => (i + 1) % TITLES.length); return; }
    const t = setTimeout(() => setText(del ? text.slice(0, -1) : target.slice(0, text.length + 1)), del ? 35 : 75);
    return () => clearTimeout(t);
  }, [text, del, idx]);
  return (
    <span className="glow-accent" style={{ color: 'var(--accent)' }}>
      {text}<span className="cursor-blink" style={{ color: 'var(--gold)' }}>_</span>
    </span>
  );
}

/* Floating ember sparks */
function Embers() {
  const embers = useMemo(() => Array.from({ length: 20 }, () => ({
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 8,
    dur: Math.random() * 6 + 5,
    color: Math.random() > 0.5 ? 'var(--accent)' : 'var(--ember)',
  })), []);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 3 }}>
      {embers.map((e, i) => (
        <div
          key={i}
          className="ember"
          style={{
            left: e.left,
            bottom: '-10px',
            width: `${e.size}px`,
            height: `${e.size}px`,
            background: e.color,
            boxShadow: `0 0 ${e.size * 2}px ${e.color}`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="about" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--bg)' }}>

      {/* Layer 1: B&W photo */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/sachin-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        filter: 'grayscale(100%) brightness(0.25) contrast(1.2)',
        transform: 'scale(1.02)',
      }} />

      {/* Layer 2: Dark + orange gradient overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.88) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Layer 3: Orange radial glow (like the reference) */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        left: '30%', top: '50%', transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.04) 40%, transparent 70%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Concentric rings */}
      <div aria-hidden="true" className="hero-ring" style={{ left: '30%', top: '50%', transform: 'translate(-50%,-50%)', width: '400px', height: '400px', zIndex: 1 }} />
      <div aria-hidden="true" className="hero-ring" style={{ left: '30%', top: '50%', transform: 'translate(-50%,-50%)', width: '550px', height: '550px', zIndex: 1, animationDelay: '1s', borderColor: 'rgba(251,191,36,0.12)' }} />
      <div aria-hidden="true" className="hero-ring" style={{ left: '30%', top: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', zIndex: 1, animationDelay: '2s', borderColor: 'rgba(249,115,22,0.08)' }} />

      {/* Layer 4: 3D Neural Network */}
      <Suspense fallback={null}>
        <NeuralNetwork3D />
      </Suspense>

      {/* Layer 5: Ember particles */}
      <Embers />

      {/* Layer 6: Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, var(--bg), transparent)', pointerEvents: 'none', zIndex: 4 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto', padding: '0 32px', width: '100%', paddingTop: '100px', paddingBottom: '40px' }}>
        <div style={{ maxWidth: '640px' }}>

          {/* Status badge */}
          <div className="anim-fade-in delay-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '7px 16px', borderRadius: '999px', background: 'rgba(22,22,22,0.85)', border: '1px solid rgba(249,115,22,0.25)', marginBottom: '28px', backdropFilter: 'blur(8px)' }}>
            <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'DM Mono, monospace' }}>Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="anim-fade-up delay-2" style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', letterSpacing: '0.04em', lineHeight: 0.95, marginBottom: '10px' }}>
            <span style={{ color: 'var(--text)' }}>Sachin</span><br />
            <span className="shimmer-text">Murali</span>
          </h1>

          {/* Typewriter */}
          <div className="anim-fade-up delay-3" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontFamily: 'DM Mono, monospace', marginBottom: '20px', minHeight: '32px' }}>
            <TypeWriter />
          </div>

          {/* Summary */}
          <p className="anim-fade-up delay-4" style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '500px', lineHeight: 1.7, marginBottom: '28px', fontFamily: 'Outfit, sans-serif' }}>
            7+ years in software engineering, 4+ as an AI specialist. I build production-grade LLM systems, RAG pipelines, and multi-agent frameworks.
          </p>

          {/* Stats */}
          <div className="anim-fade-up delay-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '36px', marginBottom: '28px' }}>
            {[
              { val: '7+', label: 'Years Exp' },
              { val: '4+', label: 'AI / ML' },
              { val: '10+', label: 'LLMs' },
              { val: '2', label: 'Awards' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--accent)', fontFamily: 'Bebas Neue, sans-serif', lineHeight: 1, letterSpacing: '0.05em' }}>{s.val}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="anim-fade-up delay-6" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'var(--accent)', color: '#0a0a0a', fontWeight: 700, borderRadius: '10px', fontSize: '0.9rem', textDecoration: 'none', fontFamily: 'Outfit, sans-serif' }}>
              View Projects <ArrowDown size={15} />
            </a>
            {[
              { href: 'https://www.linkedin.com/in/sachin-murali-12a625165/', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://github.com/Linux-Server', Icon: Github, label: 'GitHub' },
              { href: 'https://huggingface.co/sachin6624', Icon: ExternalLink, label: 'HuggingFace' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '13px 20px', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)', borderRadius: '10px', fontSize: '0.85rem', textDecoration: 'none', backdropFilter: 'blur(4px)', background: 'rgba(22,22,22,0.4)', fontFamily: 'Outfit, sans-serif' }}>
                <Icon size={15} /> {label}
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="anim-fade-in delay-7" style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace' }}>
            <span aria-hidden="true" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
            Cochin, Kerala, India
            <span aria-hidden="true" style={{ opacity: 0.3 }}>·</span>
            <a href="mailto:sachin6624@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>sachin6624@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="anim-fade-in delay-7" style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', zIndex: 10 }}>
        <span style={{ fontSize: '0.65rem', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)', opacity: 0.4 }}>scroll</span>
        <ArrowDown size={13} className="bounce-y" style={{ color: 'var(--text-muted)', opacity: 0.4 }} />
      </div>
    </section>
  );
}
