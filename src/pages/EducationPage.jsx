import React from 'react';
import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { Divider } from '../components/Divider';
import { Helmet } from 'react-helmet-async';

/* ─────────────────────────────────────────────
   § DATA
   ───────────────────────────────────────────── */

const SNAPSHOT = [
  { icon: '📍', label: 'LOCATION', value: 'Pune, Maharashtra' },
  { icon: '🎓', label: 'EDUCATION', value: 'B.Tech Computer Science' },
  { icon: '💼', label: 'CURRENT ROLE', value: 'MERN Stack Developer' },
  { icon: '🚀', label: 'STATUS', value: 'Open To Opportunities' },
  { icon: '🎯', label: 'FOCUS', value: 'Full Stack Products' },
];

const PROCESS = [
  { icon: '◎', label: 'Research' },
  { icon: '◇', label: 'Plan' },
  { icon: '△', label: 'Design' },
  { icon: '⟨/⟩', label: 'Develop' },
  { icon: '✓', label: 'Test' },
  { icon: '▲', label: 'Deploy' },
  { icon: '◈', label: 'Feedback' },
];

const BELIEFS = [
  'Build for real users',
  'Simplicity over complexity',
  'Performance matters',
  'Learn continuously',
  'Quality over quantity',
];

/* Shared inline-style tokens */
const st = {
  redLabel: {
    fontFamily: 'var(--font-ui)',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--editorial-red)',
    display: 'block',
  },
  catHead: {
    fontFamily: 'var(--font-ui)',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    borderBottom: '1px solid var(--ink)',
    paddingBottom: 3,
    marginBottom: 5,
  },
  skill: {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    lineHeight: 1.6,
    color: 'var(--ink)',
  },
};

/* ─────────────────────────────────────────────
   § COMPONENT
   ───────────────────────────────────────────── */

export function EducationPage({ currentPage, onNavigate }) {
  return (
    <PageShell
      currentPage={currentPage}
      onNavigate={onNavigate}
      compact={false}
      location="PUNE, MAHARASHTRA"
      edition="SPECIAL TECHNOLOGY EDITION"
    >
      <Helmet>
        <title>About Aditya Mohod | MERN Stack Developer | THE ADITYA TIMES</title>
        <meta name="description" content="Learn about Aditya Mohod, a B.Tech Computer Science graduate and passionate MERN Stack Developer based in Pune, specialised in React, Node.js, and scaling products." />
        <link rel="canonical" href="https://theadityatimes.site/about" />
      </Helmet>

      {/* ═══════════════════════════════════════
          § HERO
          ═══════════════════════════════════════ */}
      <div style={{ textAlign: 'center', marginTop: 4, marginBottom: 1 }}>
        <SectionLabel text="INSIDE THE NEWSROOM" className="mb-2" />
        <h2
          className="headline-main"
          style={{ fontSize: 38, textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: 1.05 }}
        >
          Developer Profile
        </h2>
      </div>

      {/* Pull Quote */}
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: 600, padding: '3px 0 5px' }}>
        <Divider />
        <p className="pull-quote-text" style={{ fontSize: 16, lineHeight: 1.35, margin: '6px 0 3px' }}>
          "I enjoy transforming ideas into meaningful products that solve
          real-world problems and create valuable experiences."
        </p>
        <span className="byline" style={{ fontSize: 9, letterSpacing: '0.12em' }}>— ADITYA MOHOD</span>
        <Divider className="mt-2" />
      </div>

      {/* ═══════════════════════════════════════
          § THREE-COLUMN GRID
          ═══════════════════════════════════════ */}
      <div
        style={{
          height: 505,
          display: 'grid',
          gridTemplateColumns: '185px 1fr 178px',
          gap: 0,
          marginTop: 6,
          overflow: 'hidden',
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div
          style={{
            borderRight: '1px solid var(--divider)',
            paddingRight: 14,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Portrait */}
          <div
            style={{
              width: '100%',
              height: 215,
              border: '1px solid var(--divider-dark)',
              overflow: 'hidden',
              background: 'var(--paper-dark)',
              flexShrink: 0,
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Aditya Mohod — MERN Stack Developer"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          {/* Name */}
          <div style={{ marginTop: 7, textAlign: 'center', flexShrink: 0 }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
              letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink)', lineHeight: 1.2,
            }}>
              Aditya Mohod
            </div>
            <div className="byline" style={{ marginTop: 2, fontSize: 9 }}>MERN STACK DEVELOPER</div>
            <div className="byline" style={{ marginTop: 1, fontSize: 8, color: 'var(--text-light)' }}>PUNE, MAHARASHTRA</div>
          </div>

          {/* What I Believe */}
          <div style={{ marginTop: 'auto', paddingTop: 6, flexShrink: 0 }}>
            <span style={{ ...st.redLabel, marginBottom: 6 }}>WHAT I BELIEVE</span>
            {BELIEFS.map((b) => (
              <div
                key={b}
                style={{
                  fontFamily: 'var(--font-ui)', fontSize: 14, lineHeight: 1.55,
                  color: 'var(--ink)', display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4,
                }}
              >
                <span style={{ color: 'var(--editorial-red)', fontWeight: 700, fontSize: 14.5, flexShrink: 0 }}>✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CENTER COLUMN ── */}
        <div
          style={{
            borderRight: '1px solid var(--divider)',
            padding: '0 18px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* WHO I AM */}
          <div style={{ marginBottom: 14 }}>
            <span style={{ ...st.redLabel, marginBottom: 7 }}>WHO I AM</span>
            <p className="body-text" style={{ fontSize: 13, lineHeight: 1.72, marginBottom: 6 }}>
              A full-stack developer from Pune who builds digital products rooted in purpose. I approach every project as a chance to solve a real problem — not merely write code.
            </p>
            <p className="body-text" style={{ fontSize: 13, lineHeight: 1.72 }}>
              My work sits at the intersection of product thinking and clean engineering — shipping software that is genuinely useful, intuitive, and well-built.
            </p>
          </div>

          {/* TECHNICAL SNAPSHOT */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingBottom: 8 }}>
            <span style={{ ...st.redLabel, marginBottom: 8 }}>TECHNICAL SNAPSHOT</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <div style={{ ...st.catHead, marginBottom: 4 }}>Frontend</div>
                <div style={{ ...st.skill, lineHeight: 1.5 }}>React.js &bull; JavaScript &bull; Tailwind CSS &bull; HTML5 &bull; CSS3 &bull; Material UI</div>
              </div>
              <div>
                <div style={{ ...st.catHead, marginBottom: 4 }}>Backend</div>
                <div style={{ ...st.skill, lineHeight: 1.5 }}>Node.js &bull; Express.js &bull; REST APIs &bull; JWT Authentication</div>
              </div>
              <div>
                <div style={{ ...st.catHead, marginBottom: 4 }}>Database</div>
                <div style={{ ...st.skill, lineHeight: 1.5 }}>MongoDB &bull; MySQL &bull; Mongoose</div>
              </div>
              <div>
                <div style={{ ...st.catHead, marginBottom: 4 }}>Tools</div>
                <div style={{ ...st.skill, lineHeight: 1.5 }}>Git &bull; GitHub &bull; Linux &bull; VS Code &bull; Figma</div>
              </div>
              <div>
                <div style={{ ...st.catHead, marginBottom: 4 }}>Expertise</div>
                <div style={{ ...st.skill, lineHeight: 1.5 }}>Full Stack Development &bull; UI/UX Design &bull; Product Development &bull; Responsive Design</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div
          style={{
            paddingLeft: 14,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span style={{ ...st.redLabel, marginBottom: 6 }}>PROFILE FACTS</span>

          {SNAPSHOT.map(({ icon, label, value }, i) => (
            <div
              key={label}
              style={{
                paddingBottom: 7,
                marginBottom: 7,
                borderBottom: i < SNAPSHOT.length - 1 ? '1px solid var(--divider)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--editorial-red)', marginBottom: 2,
              }}>
                {icon}&ensp;{label}
              </div>
              <div style={{
                fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500,
                color: 'var(--ink)', lineHeight: 1.35,
              }}>
                {value}
              </div>
            </div>
          ))}

          {/* Badges */}
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 38 }}>
            {/* MERN Badge */}
            <svg width="130" height="42" viewBox="0 0 130 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="129" height="41" rx="1" stroke="var(--ink)" strokeWidth="1"/>
              <rect x="2.5" y="2.5" width="125" height="37" rx="0.5" stroke="var(--ink)" strokeWidth="0.5"/>
              <text x="65" y="18" fontFamily="var(--font-heading)" fontSize="15" fontWeight="bold" fill="var(--ink)" textAnchor="middle" letterSpacing="0.08em">M E R N</text>
              <line x1="25" y1="24" x2="105" y2="24" stroke="var(--editorial-red)" strokeWidth="1"/>
              <text x="65" y="34" fontFamily="var(--font-ui)" fontSize="8" fontWeight="700" fill="var(--ink)" textAnchor="middle" letterSpacing="0.2em">DEVELOPER</text>
            </svg>

            {/* Product Builder Badge */}
            <svg width="130" height="42" viewBox="0 0 130 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="129" height="41" rx="1" stroke="var(--ink)" strokeWidth="1"/>
              <rect x="2.5" y="2.5" width="125" height="37" rx="0.5" stroke="var(--ink)" strokeWidth="0.5"/>
              <text x="65" y="18" fontFamily="var(--font-heading)" fontSize="13" fontWeight="bold" fill="var(--ink)" textAnchor="middle" letterSpacing="0.1em">PRODUCT</text>
              <line x1="25" y1="24" x2="105" y2="24" stroke="var(--editorial-red)" strokeWidth="1"/>
              <text x="65" y="34" fontFamily="var(--font-ui)" fontSize="8" fontWeight="700" fill="var(--ink)" textAnchor="middle" letterSpacing="0.2em">BUILDER</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          § DEVELOPMENT PROCESS
          ═══════════════════════════════════════ */}
      <Divider className="mt-6" />

      <div style={{ padding: '10px 0 6px', textAlign: 'center' }}>
        <span style={{ ...st.redLabel, marginBottom: 10 }}>DEVELOPMENT PROCESS</span>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 10,
          }}
        >
          {PROCESS.map(({ icon, label }, idx) => (
            <React.Fragment key={label}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 68 }}>
                <div
                  style={{
                    width: 34, height: 34, borderRadius: '50%',
                    border: '1.5px solid var(--ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-ui)', fontSize: 13,
                    color: idx === 0 ? 'var(--paper)' : 'var(--ink)',
                    background: idx === 0 ? 'var(--ink)' : 'transparent',
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <span style={{
                  fontFamily: 'var(--font-ui)', fontSize: 8, fontWeight: 600,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: 'var(--ink)', marginTop: 4, whiteSpace: 'nowrap',
                }}>
                  {label}
                </span>
              </div>

              {idx < PROCESS.length - 1 && (
                <div style={{ display: 'flex', alignItems: 'center', marginTop: 11, flexShrink: 0 }}>
                  <div style={{ width: 12, height: '1px', background: 'var(--divider-dark)' }} />
                  <div style={{
                    width: 0, height: 0,
                    borderTop: '3px solid transparent',
                    borderBottom: '3px solid transparent',
                    borderLeft: '4px solid var(--divider-dark)',
                  }} />
                </div>
              )}
            </React.Fragment>
          ))}

          <div style={{ display: 'flex', alignItems: 'center', marginTop: 6, marginLeft: 4 }}>
            <span style={{ color: 'var(--editorial-red)', fontSize: 16, fontWeight: 700, lineHeight: 1 }}>↺</span>
          </div>
        </div>

        <div className="caption" style={{ marginTop: 5, fontSize: 9, color: 'var(--text-light)', letterSpacing: '0.06em' }}>
          Continuous improvement through real-world feedback
        </div>
      </div>

      <Divider />

      {/* ═══════════════════════════════════════
          § PAGE LINE
          ═══════════════════════════════════════ */}
      <div className="flex-row" style={{ justifyContent: 'space-between', paddingTop: 4, marginTop: 2 }}>
        <div className="byline" style={{ fontSize: 10 }}>THE ADITYA TIMES</div>
        <div className="byline" style={{ fontSize: 10 }}>PAGE 2 OF 6</div>
      </div>
    </PageShell>
  );
}
