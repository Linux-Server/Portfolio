'use client';

import { Cpu, MessageSquare, Brain, Bot, Image, Layers } from 'lucide-react';

const projects = [
  {
    Icon: Brain, title: 'Llama 3.1 Reasoning Model',
    desc: 'Transformed Llama 3.1 (8B) into a domain-specific reasoning model using Unsloth with GRPO. Thinks step-by-step on complex domain questions.',
    tech: ['Llama-3.1-70B', 'Unsloth', 'GRPO', 'KubeRay', 'SGLang'],
    accent: '#f97316', badge: 'LLM Fine-tuning',
  },
  {
    Icon: MessageSquare, title: 'Domain Chatbot + RAG',
    desc: 'Fine-tuned LLMs with instruction tuning and RAG. Integrated vector-based retrieval for complex customer inquiries.',
    tech: ['Llama-3.1-8B', 'HF Accelerate', 'vLLM', 'BitsAndBytes', 'SageMaker'],
    accent: '#fb923c', badge: 'RAG + Fine-tuning',
  },
  {
    Icon: Layers, title: 'Graph RAG + RL Chatbot',
    desc: 'Upgraded chatbot with Reinforcement Learning (TRL) and enhanced RAG into Graph RAG for higher precision answers.',
    tech: ['TRL', 'FSDP', 'TGI', 'Lightning AI', 'Graph RAG'],
    accent: '#fbbf24', badge: 'Reinforcement Learning',
  },
  {
    Icon: Cpu, title: 'RLHF Reference Model',
    desc: 'Trained a reference model for RLHF. Experimented with model & pipeline parallelism to train billion-parameter models on consumer GPUs.',
    tech: ['RLHF', 'Model Parallelism', 'Pipeline Parallelism', 'PyTorch'],
    accent: '#ff6b35', badge: 'RLHF',
  },
  {
    Icon: Bot, title: 'Multi-Agent Chatbot',
    desc: 'Multi-Agent chatbot using LangGraph with tool calling and MCP. Also built Crew-AI agents for web scraping with fine-tuned models.',
    tech: ['LangGraph', 'Tool Calling', 'MCP', 'Crew-AI', 'RAG'],
    accent: '#fdba74', badge: 'Multi-Agent',
  },
  {
    Icon: Image, title: 'Diffusion Model Fine-tuning',
    desc: 'Ongoing: fine-tuning diffusion models for high-quality image and video generation from text queries. Exploring LoRA approaches.',
    tech: ['Diffusion Models', 'LoRA', 'Text-to-Image', 'Text-to-Video'],
    accent: '#f97316', badge: 'Ongoing', ongoing: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg)', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '56px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>03 — Projects</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text)' }}>
            Things I&apos;ve <span style={{ color: 'var(--accent)' }}>Built</span>
          </h2>
          <p style={{ marginTop: '16px', color: 'var(--text-secondary)', maxWidth: '560px', fontSize: '1rem' }}>
            Production-grade AI systems spanning LLM fine-tuning, RAG architectures, multi-agent frameworks, and distributed training.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '16px' }}>
          {projects.map(({ Icon, title, desc, tech, accent, badge, ongoing }) => (
            <div key={title} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${accent}15`, border: `1px solid ${accent}30` }}>
                  <Icon size={20} style={{ color: accent }} />
                </div>
                <span style={{ padding: '4px 12px', borderRadius: '999px', fontSize: '0.7rem', fontFamily: 'DM Mono, monospace', background: `${accent}12`, border: `1px solid ${accent}28`, color: accent, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {badge}
                  {ongoing && <span className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent, display: 'inline-block' }} />}
                </span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>{title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px', flex: 1 }}>{desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {tech.map(t => (
                  <span key={t} style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '0.7rem', fontFamily: 'DM Mono, monospace', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
