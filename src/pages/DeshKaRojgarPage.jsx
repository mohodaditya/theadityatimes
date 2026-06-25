import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { Divider } from '../components/Divider';

const TECH = ['React', 'Vite', 'Tailwind CSS', 'Material UI', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'];

const CARDS = [
  {
    label: 'PROBLEM',
    title: 'The Invisible Job Market',
    text: 'Millions of local jobs never appear on mainstream portals. Workers and small businesses operate in a gap that corporate platforms were never built to serve.',
  },
  {
    label: 'SOLUTION',
    title: 'Mobile-First, Zero Friction',
    text: 'Post a job in seconds. Connect directly via call or WhatsApp. No lengthy forms, no complex onboarding — just fast, local, human connections.',
    accent: true,
  },
  {
    label: 'VALUE',
    title: 'Built for Real India',
    text: 'Hindi & English ready, mobile-first, and designed for users who have never used a job portal before. Technology in the language of the people it serves.',
  },
];

export function DeshKaRojgarPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={false}>

      {/* ══ PROJECT TITLE BAR ══ */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <SectionLabel text="OPPORTUNITY & EMPLOYMENT DESK" />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '24px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink)', marginTop: '8px', lineHeight: 1 }}>
            DeshKaRojgar
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '14px', color: 'var(--text-muted)', marginTop: '6px', lineHeight: 1.3 }}>
            Connecting Local Talent With Local Opportunities Across India
          </p>
        </div>
        <div className="byline" style={{ textAlign: 'right', lineHeight: '2' }}>
          <div>Stack: <strong style={{ color: 'var(--ink)' }}>MERN · Full Stack</strong></div>
          <div>Status: <strong style={{ color: 'var(--ink)' }}>In Development</strong></div>
        </div>
      </div>

      <Divider />

      {/* ══ TOP SECTION: CONCEPT & IMAGE ══ */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: '40px', marginTop: '30px', marginBottom: '34px' }}>

        {/* Left: Concept & Tech Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="byline" style={{ color: 'var(--editorial-red)', letterSpacing: '0.18em', display: 'block', marginBottom: '10px' }}>
              PROJECT CONCEPT
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '1.75', color: 'var(--ink)' }}>
              DeshKaRojgar is a community-driven employment and service platform designed for everyday Indian users. It bridges the gap between local businesses, workers, and service providers — without the complexity of mainstream hiring platforms.
            </p>
          </div>

          <div style={{ marginTop: '24px' }}>
            <span className="byline" style={{ color: 'var(--editorial-red)', letterSpacing: '0.18em', display: 'block', marginBottom: '12px' }}>
              TECHNOLOGY STACK
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {TECH.map((t, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-light)', border: '1px solid var(--divider-dark)', padding: '4px 10px', borderRadius: '3px', backgroundColor: 'var(--card-bg)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Landscape Preview & Actions */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', aspectRatio: '16/9', border: '1px solid var(--divider-dark)', backgroundColor: 'var(--paper-dark)', padding: '2px', boxSizing: 'border-box' }}>
            <img
              src={`${import.meta.env.BASE_URL}dkr.png`}
              alt="DeshKaRojgar Preview"
              style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#fff', border: '1px solid var(--divider)' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', padding: '0 4px' }}>
            <span className="caption" style={{ color: 'var(--text-muted)', letterSpacing: '0.06em', fontSize: '11px' }}>PLATFORM PREVIEW</span>
            <div style={{ display: 'flex', gap: '24px' }}>
              {[{ label: '▶ Live Demo', href: '#' }, { label: '💻 GitHub', href: '#' }, { label: '📄 Case Study', href: '#' }].map(({ label, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--editorial-red)'} onMouseLeave={e => e.target.style.color = 'var(--ink)'}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <Divider />

      {/* ══ BOTTOM SECTION: 3 CARDS ══ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '30px', marginBottom: '34px' }}>
        {CARDS.map(({ label, title, text, accent }, i) => (
          <div key={i} style={{ padding: '18px', border: '1px solid var(--divider-dark)', borderTop: accent ? '3px solid var(--editorial-red)' : '1px solid var(--divider-dark)', background: accent ? 'rgba(196,30,30,0.02)' : 'var(--card-bg)' }}>
            <span className="byline" style={{ color: accent ? 'var(--editorial-red)' : 'var(--text-muted)', letterSpacing: '0.16em', display: 'block', marginBottom: '8px', fontSize: '10px' }}>
              {label}
            </span>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '10px', lineHeight: 1.25 }}>
              {title}
            </h4>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', lineHeight: '1.65', color: 'var(--text-muted)' }}>
              {text}
            </p>
          </div>
        ))}
      </div>

      <Divider />

      {/* ══ FOOTER SECTION: WHY IT MATTERS ══ */}
      <div style={{ marginTop: '28px', textAlign: 'center', maxWidth: '700px', margin: '28px auto 0' }}>
        <span className="byline" style={{ color: 'var(--editorial-red)', letterSpacing: '0.18em', display: 'block', marginBottom: '10px' }}>
          WHY THIS PROJECT MATTERS
        </span>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: '1.75', color: 'var(--ink)' }}>
          India's local economy runs on trust and proximity, not platforms. DeshKaRojgar meets users where they already are — on mobile, in their language — making work accessible to those the formal job market has long ignored.
        </p>
      </div>

    </PageShell>
  );
}
