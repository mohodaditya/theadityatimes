import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { Divider } from '../components/Divider';
import { Helmet } from 'react-helmet-async';

const TECH = ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OAuth', 'Judge0 API'];

const CARDS = [
  {
    label: 'PROBLEM',
    title: 'Fragmented Preparation',
    text: 'Students must juggle multiple disconnected platforms for DSA practice, technical quizzes, and interview prep. There was no single, comprehensive environment combining code execution and structured assessments.',
  },
  {
    label: 'SOLUTION',
    title: 'Unified Full-Stack Platform',
    text: 'A robust MERN application integrating the Judge0 API for live code execution alongside interactive quizzes. Securely authenticated via JWT and Google OAuth for a seamless, production-ready experience.',
    accent: true,
  },
  {
    label: 'VALUE',
    title: 'Production-Ready Execution',
    text: 'Evolving from an award-winning prototype into a fully architected product, it demonstrates strong system design, third-party API integration, and an unwavering focus on solving real student pain points.',
  },
];

export function TechArenaPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={false}>
      <Helmet>
        <title>Tech Arena | Interactive Learning Platform | THE ADITYA TIMES</title>
        <meta name="description" content="Inside Tech Arena, an interactive learning platform designed for frontend developers to master CSS layouts, component logic, and typography." />
        <link rel="canonical" href="https://theadityatimes.site/projects/tech-arena" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Tech Arena",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web",
            "url": "https://theadityatimes.site/projects/tech-arena",
            "description": "Interactive Technical Learning Platform. A MERN stack project by Aditya Mohod.",
            "author": {
              "@type": "Person",
              "name": "Aditya Mohod"
            }
          })}
        </script>
      </Helmet>

      {/* ══ PROJECT TITLE BAR ══ */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <SectionLabel text="FEATURED PROJECT" />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '24px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink)', marginTop: '8px', lineHeight: 1 }}>
            Tech Arena
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '14px', color: 'var(--text-muted)', marginTop: '6px', lineHeight: 1.3 }}>
            Comprehensive Full-Stack Technical Preparation Platform
          </p>
        </div>
        <div className="byline" style={{ textAlign: 'right', lineHeight: '2' }}>
          <div>Type: <strong style={{ color: 'var(--ink)' }}>EdTech Web App</strong></div>
          <div>Status: <strong style={{ color: 'var(--editorial-red)' }}>Production-Ready MERN App</strong></div>
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
              Tech Arena is a full-stack MERN platform for practicing computer science fundamentals through interactive quizzes and DSA coding. It features JWT authentication, Google OAuth, and Judge0-powered code execution for a seamless learning experience.
            </p><q></q>
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
          Tech Arena demonstrates the ability to architect and deploy a robust full-stack application that solves real-world educational friction. By uniting backend stability, secure API integrations, and an intuitive frontend, it provides immense value to students.
        </p>
      </div>

      {/* Page Number */}
      <div className="flex-row mt-3" style={{ justifyContent: 'space-between', borderTop: '1px solid var(--divider)', paddingTop: '12px' }}>
        <div className="byline" style={{ fontSize: '10px' }}>THE ADITYA TIMES</div>
        <div className="byline" style={{ fontSize: '10px' }}>PAGE 4 OF 6</div>
      </div>

    </PageShell>
  );
}
