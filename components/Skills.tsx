'use client';

const skillGroups = [
  { category: 'ML / AI Core', color: '#f97316', skills: ['Machine Learning', 'Model Training', 'Model Finetuning', 'Model Evaluation', 'Model Optimisation', 'Model Deployment', 'Deep Learning', 'Neural Networks', 'Reinforcement Learning'] },
  { category: 'LLM & NLP', color: '#fb923c', skills: ['LLM', 'RAG', 'Graph RAG', 'Vector Database', 'Embeddings', 'Prompt Engineering', 'Context Engineering', 'Transformers', 'HuggingFace', 'NLP'] },
  { category: 'Frameworks', color: '#fbbf24', skills: ['PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'Crew-AI', 'HF Accelerate', 'Unsloth', 'TRL', 'vLLM', 'TGI'] },
  { category: 'MLOps & Deployment', color: '#ff6b35', skills: ['Kubernetes', 'Docker', 'KubeRay', 'AWS SageMaker', 'Model Quantization', 'Distributed Training', 'API Development', 'BitsAndBytes', 'FSDP', 'SGLang'] },
  { category: 'Agentic AI', color: '#fdba74', skills: ['Multi-Agent Systems', 'MCP', 'Tool Calling', 'Agent Orchestration'] },
  { category: 'Vision & Other', color: '#ef4444', skills: ['Computer Vision', 'Diffusion Models', 'Python', 'Feature Engineering', 'Data Preprocessing'] },
];

const certs = [
  'Machine Learning Specialization — Andrew NG, Coursera',
  'Deep Learning Specialization — Andrew NG, Coursera',
  'PyTorch for Deep Learning Bootcamp — Zero to Mastery',
  'TensorFlow for Deep Learning Bootcamp — Zero to Mastery',
  'Make More Series — Andrej Karpathy',
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-alt)', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '56px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>04 — Skills</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text)' }}>
            Tools &amp; <span style={{ color: 'var(--accent)' }}>Technologies</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 500px), 1fr))', gap: '16px', marginBottom: '24px' }}>
          {skillGroups.map(({ category, color, skills }) => (
            <div key={category} className="card" style={{ padding: '24px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px', paddingBottom: '14px', borderBottom: `1px solid ${color}20` }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}50` }} />
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color, fontWeight: 600 }}>
                  {category}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map(skill => (
                  <span key={skill} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '0.8rem', fontFamily: 'DM Mono, monospace', background: `${color}10`, border: `1px solid ${color}28`, color, whiteSpace: 'nowrap' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div className="card" style={{ padding: '28px 32px' }}>
          <div className="section-label" style={{ marginBottom: '20px' }}>Certifications</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {certs.map(c => (
              <div key={c} style={{ display: 'flex', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }}>✦</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
