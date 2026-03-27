export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--card-border)', padding: '28px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--card)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--accent)', fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', fontWeight: 700 }}>SM</span>
          </div>
          <span style={{ fontSize: '0.8rem', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)' }}>sachin.murali</span>
        </div>
        <span style={{ fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} · Built with Next.js
        </span>
      </div>
    </footer>
  );
}
