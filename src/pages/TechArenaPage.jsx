import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { Divider } from '../components/Divider';

const TECH = ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'GitHub Pages'];

const CARDS = [
  {
    label: 'PROBLEM',
    title: 'Fragmented Learning',
    text: 'Students preparing for technical roles must juggle multiple platforms for DSA, DBMS, OS, and Aptitude. There is no single, cohesive place to test knowledge across all core subjects.',
  },
  {
    label: 'SOLUTION',
    title: 'Unified Interactive Quizzes',
    text: 'One platform covering all major technical subjects through categorized, interactive quizzes. Built with smooth animations and immediate feedback to make studying feel less like a chore.',
    accent: true,
  },
  {
    label: 'VALUE',
    title: 'Validated by Competition',
    text: 'Winning 2nd prize at a major hackathon validated both the platform\'s utility and its execution under real competitive conditions, proving that technical preparation doesn\'t have to be intimidating.',
  },
];

export function TechArenaPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={false}>

      {/* ══ PROJECT TITLE BAR ══ */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <SectionLabel text="FEATURED PROJECT" />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '24px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink)', marginTop: '8px', lineHeight: 1 }}>
            Tech Arena
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '14px', color: 'var(--text-muted)', marginTop: '6px', lineHeight: 1.3 }}>
            Interactive Learning Platform For Technical Education
          </p>
        </div>
        <div className="byline" style={{ textAlign: 'right', lineHeight: '2' }}>
          <div>Type: <strong style={{ color: 'var(--ink)' }}>EdTech Web App</strong></div>
          <div>Award: <strong style={{ color: 'var(--editorial-red)' }}>2nd Prize — Hackathon</strong></div>
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
              Tech Arena is a unified, interactive learning platform designed for computer science students. It consolidates preparation for technical interviews and exams into a single, engaging experience, replacing the need to juggle multiple disparate resources.
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
              src={`${import.meta.env.BASE_URL}TA.png`}
              alt="Tech Arena Preview"
              style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#fff', border: '1px solid var(--divider)' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', padding: '0 4px' }}>
            <span className="caption" style={{ color: 'var(--text-muted)', letterSpacing: '0.06em', fontSize: '11px' }}>PLATFORM PREVIEW</span>
            <div style={{ display: 'flex', gap: '24px' }}>
              {[{ label: '▶ Live Demo', href: '#' }, { label: '💻 GitHub', href: '#' }, { label: '📄 Documentation', href: '#' }].map(({ label, href }, i) => (
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
          Tech Arena demonstrates that educational tools can be both highly functional and visually engaging. By lowering the friction to start studying, it helps students build consistency in their technical preparation.
        </p>
      </div>

    </PageShell>
  );
}
